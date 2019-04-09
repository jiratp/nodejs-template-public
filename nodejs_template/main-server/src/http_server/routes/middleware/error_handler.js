/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import logger from '../../../logger';
import errorType from 'service-error/type';
import { getErrorObjectForClient } from '../../../utils/error';
import { env, clientHttpErrorCode, serverHttpErrorCode } from '../../../config';

export default function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  let clientError;
  let unauthorizedError;
  if (err.name === 'CustomError') {
    clientError = err.isRootCauseClientError();
  }

  const responseBody = {
    error: getErrorObjectForClient(err),
  };

  if (unauthorizedError) {
    res.status(403).json(responseBody);
    logger.error({
      message: 'Responded Unauthorized with HTTP code 403',
      responseBody,
    });
  } else if (clientError === true) {
    if (
      err.getCode() === errorType.QUERY_STRING_VALIDATION_FAILED.code ||
      err.getCode() === errorType.BODY_VALIDATION_FAILED.code
    ) {
      responseBody.details = err.details;
    }
    if (err.getCode() === errorType.DATA_VALIDATION_FAILED.code) {
      responseBody.details = err.getDetailsOfErrorWithCode();
    }
    res.status(clientHttpErrorCode).json(responseBody);
    logger.error({
      message: `Responded Bad Request with HTTP code ${clientHttpErrorCode}`,
      responseBody,
    });
  } else {
    res.status(serverHttpErrorCode).json(responseBody);
    logger.error({
      message: `Responded Internal Server Error with HTTP code ${serverHttpErrorCode}`,
      responseBody,
    });
  }
}

export function bodyParserErrorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  let errorCode;
  let errorMessage;
  let clientError;
  if (err) {
    if (err.type == 'entity.parse.failed') {
      errorCode = errorType.BODY_PARSE_FAILED.code;
      errorMessage = errorType.BODY_PARSE_FAILED.message;
      clientError = true;
    } else if (err.type == 'entity.too.large') {
      errorCode = errorType.BODY_TOO_LARGE.code;
      errorMessage = errorType.BODY_TOO_LARGE.message;
      clientError = true;
    } else {
      errorCode = errorType.BODY_PARSER_ERROR.code;
      errorMessage = `${errorType.BODY_PARSER_ERROR.message}: ${err.message}`;
    }

    if (clientError) {
      const responseBody = {
        error: {
          code: errorCode,
          message: errorMessage,
        },
      };
      res.status(clientHttpErrorCode).json(responseBody);
      logger.error({
        message: `Responded Bad Request with HTTP code ${clientHttpErrorCode}`,
        responseBody,
      });
    } else {
      const responseBody = {
        error: {
          code: errorCode,
          message: errorMessage,
          stack: env === 'development' ? err.stack : undefined,
        },
      };
      res.status(serverHttpErrorCode).json(responseBody);
      logger.error({
        message: `Responded Internal Server Error with HTTP code ${serverHttpErrorCode}`,
        responseBody,
      });
    }
  }
}