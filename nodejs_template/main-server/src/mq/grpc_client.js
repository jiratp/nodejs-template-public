/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */

import path from 'path';
import { EventEmitter } from 'events';

import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { ExponentialBackoff } from 'simple-backoff';

import { wait } from '../utils';

import CustomError from 'service-error/custom_error';
import errorType from 'service-error/type';

import logger from '../logger';

import * as config from '../config';

// Load protobuf
const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, '..', '..', '..', 'protos', 'mq_service.proto'),
  {
    keepCase: true,
    longs: Number,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);
const proto = grpc.loadPackageDefinition(packageDefinition);

const MQ_SERVICE_SERVER_ADDRESS = `${config.mqServiceServerIp}:${
  config.mqServiceServerPort
}`;

export const eventEmitter = new EventEmitter();