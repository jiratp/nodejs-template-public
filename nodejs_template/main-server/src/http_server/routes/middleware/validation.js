/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import validate from '../validator';

import CustomError from 'service-error/custom_error';
import errorType from 'service-error/type';

function getBaseUrlAndApiVersion(req) {
  let baseUrl = req.baseUrl;
  if (baseUrl.startsWith('/edoc')) {
    return {
      edocApi: true,
      baseUrl,
    };
  }
  const matchedPath = baseUrl.match(/^\/v([0-9]+)/);
  let apiVersion;
  if (matchedPath != null) {
    const splittedBaseUrl = baseUrl.split('/');
    splittedBaseUrl.splice(1, 1);
    baseUrl = splittedBaseUrl.join('/');
    apiVersion = parseInt(matchedPath[1]);
  } else {
    apiVersion = 2;
  }
  return {
    baseUrl,
    apiVersion,
  };
}

export function validateQuery(req, res, next) {
  const { baseUrl, apiVersion } = getBaseUrlAndApiVersion(req);
  const queryValidationResult = validate({
    apiVersion,
    method: req.method,
    path: `${baseUrl}${req.route.path}`,
    query: req.query,
  });
  if (!queryValidationResult.valid) {
    next(
      new CustomError({
        errorType: errorType.QUERY_STRING_VALIDATION_FAILED,
        details: queryValidationResult,
      })
    );
    return;
  }
  next();
}

export function validateBody(req, res, next) {
  const { edocApi, baseUrl, apiVersion } = getBaseUrlAndApiVersion(req);
  const bodyValidationResult = validate({
    edocApi,
    apiVersion,
    method: req.method,
    path: `${baseUrl}${req.route.path}`,
    body: req.body,
  });
  if (!bodyValidationResult.valid) {
    next(
      new CustomError({
        errorType: errorType.BODY_VALIDATION_FAILED,
        details: bodyValidationResult,
      })
    );
    return;
  }
  next();
}