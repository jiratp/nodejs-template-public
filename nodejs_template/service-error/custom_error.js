/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
const type = require('./type');

class CustomError extends Error {
  constructor({ message, code, clientError, errorType, details, cause }) {
    if (errorType != null) {
      message = errorType.message;
      code = errorType.code;
      clientError = errorType.clientError;
    }

    super(message);

    Object.defineProperty(this, 'name', {
      value: 'CustomError',
    });

    if (code != null) {
      this.code = code;
    }
    if (clientError != null) {
      this.clientError = clientError;
    }
    if (details != null) {
      this.details = details;
    }

    if (cause != null) {
      Object.defineProperty(this, 'cause', {
        value: cause,
        writable: false,
      });
    }

    Error.captureStackTrace(this, this.constructor);
    const oldStackDescriptor = Object.getOwnPropertyDescriptor(this, 'stack');
    const stackDescriptor = buildStackDescriptor(oldStackDescriptor, cause);
    Object.defineProperty(this, 'stack', stackDescriptor);
  }

  /**
   * Get top of the stack error code
   * @returns {number} Error code
   */
  getCode() {
    if (this.code != null) {
      return this.code;
    }
    if (this.cause != null && this.cause.name === 'CustomError') {
      return this.cause.getCode();
    }
    return type.UNKNOWN_ERROR.code;
  }

  getDetailsOfErrorWithCode() {
    if (this.cause != null && this.cause.name === 'CustomError') {
      return this.cause.getDetailsOfErrorWithCode();
    }
    return this.details;
  }

  getMessageWithCode() {
    if (this.code != null) {
      return this.message;
    }
    if (this.cause != null) {
      if (this.cause.name === 'CustomError') {
        return this.cause.getMessageWithCode();
      }
      return this.cause.message;
    }
    return this.message; // this.cause is undefined
  }

  getMessageWithRootCause() {
    return this.code != null
      ? this.message
      : this.message + '; Caused by: ' + this.getMessageWithCode();
  }

  isRootCauseClientError() {
    if (this.clientError != null) {
      return this.clientError;
    }
    if (this.cause != null && this.cause.name === 'CustomError') {
      return this.cause.isRootCauseClientError();
    }
    return false;
  }

  /**
   * Get error info
   * @returns {Object} Error info
   */
  getInfoForLog(withStack = true) {
    const retval = {
      message: this.message,
      code: this.getCode(),
    };
    if (this.details != null) {
      retval.details = this.details;
    }
    if (this.cause != null) {
      if (this.cause.name === 'CustomError') {
        retval.cause = this.cause.getInfoForLog(false);
      } else {
        const cause = {
          name: this.cause.name,
          message: this.cause.message,
        };
        if (this.cause.code != null) {
          cause.code = this.cause.code;
        }
        retval.cause = cause;
      }
    }
    if (withStack) {
      retval.stack = this.stack;
      retval._printErrStack = true;
    }
    return retval;
  }
}

function buildStackDescriptor(oldStackDescriptor, nested) {
  if (oldStackDescriptor.get) {
    return {
      get: function() {
        const stack = oldStackDescriptor.get.call(this);
        return buildCombinedStacks(stack, this.nested);
      },
    };
  } else {
    const stack = oldStackDescriptor.value;
    return {
      value: buildCombinedStacks(stack, nested),
    };
  }
}

function buildCombinedStacks(stack, nested) {
  if (nested) {
    stack += '\nCaused By: ' + nested.stack;
  }
  return stack;
}

module.exports = CustomError;