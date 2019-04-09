/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import path from 'path';
import fs from 'fs';
import express from 'express';

import logger from '../../logger';

import readyHandler from './middleware/ready_handler';
import errorHandler from './middleware/error_handler';

import apiV1Router from './v1';


import getInfo from './info';
import debugRouter from './debug';

import * as config from '../../config';

const router = express.Router();

// FOR DEBUG
if (config.env === 'development') {
  router.use((req, res, next) => {
    const { method, originalUrl, params, query, body } = req;
    logger.debug({
      message: 'Incoming HTTP request',
      method,
      originalUrl,
      params,
      query,
      body,
    });

    const end = res.end;
    res.end = function(chunk, encoding) {
      res.end = end;
      res.end(chunk, encoding);

      const isJSON =
        res._headers &&
        res._headers['content-type'] &&
        res._headers['content-type'].indexOf('json') >= 0;

      const responseBodyString = chunk && chunk.toString();
      let responseBody;
      if (isJSON) {
        try {
          responseBody = JSON.parse(responseBodyString);
        } catch (error) {
          responseBody = responseBodyString;
        }
      }

      logger.debug({
        message: 'Outgoing HTTP response',
        method,
        originalUrl,
        status: res.statusCode,
        body: responseBody,
      });
    };

    next();
  });
  router.use('/debug', debugRouter);
}

router.get('/info', getInfo);

router.use(apiV1Router);
router.use('/v1', apiV1Router);

router.use(errorHandler);

// All other paths besides stated above are invalid
router.use('*', function(req, res) {
  res.status(404).end();
});

export default router;