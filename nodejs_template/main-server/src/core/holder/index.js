/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import fs from 'fs';
import path from 'path';

import CustomError from 'service-error/custom_error';
import errorType from 'service-error/type';

import * as utils from '../../utils';

import { callbackToClient } from '../../utils/callback';
import logger from '../../logger';

import * as config from '../../config';
import { role } from '../../node';

export const callbackUrls = {};
export const seviceCallbackUrls = {};

const callbackUrlFilesPrefix = path.join(
    config.dataDirectoryPath,
    'holder-callback-url-'
);