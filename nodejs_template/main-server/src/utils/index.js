/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import fs from 'fs';
import crypto from 'crypto';
import constants from 'constants';

import bignum from 'bignum';

import CustomError from 'service-error/custom_error';
import errorType from 'service-error/type';

import logger from '../logger';

import * as config from '../config';

export function wait(ms, stoppable) {
    let setTimeoutFn;
    const promise = new Promise(
      (resolve) => (setTimeoutFn = setTimeout(resolve, ms))
    );
    if (stoppable) {
      return Object.assign(promise, { stop: () => clearTimeout(setTimeoutFn) });
    }
    return promise;
  }
  
  export function readFileAsync(path, opts) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, opts, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  }