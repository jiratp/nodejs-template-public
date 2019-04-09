/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
const errorType = require('./type');

function getErrorObjectForClient(error, includeErrorStack) {
  let errorMessage;
  let errorCode;
  let clientError;
  let unauthorizedError;

  if (error.name === 'CustomError') {
    errorMessage = error.getMessageWithCode();
    errorCode = error.getCode();
    clientError = error.isRootCauseClientError();
  } else {
    errorMessage = error.message;
    errorCode = error.code != null ? error.code : errorType.UNKNOWN_ERROR.code;
  }

  if (clientError === true) {
    return {
      code: errorCode,
      message: errorMessage,
    };
  } else {
    return {
      code: errorCode,
      message: errorMessage,
      stack: includeErrorStack ? error.stack : undefined,
    };
  }
}

module.exports.getErrorObjectForClient = getErrorObjectForClient;