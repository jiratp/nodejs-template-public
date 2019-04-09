/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import path from 'path';

export const env = process.env.NODE_ENV || 'development';

const defaultMqBindingPort = 5555;

export const mqPort =
  process.env.MQ_BINDING_PORT == null
    ? defaultMqBindingPort
    : parseInt(process.env.MQ_BINDING_PORT);

export const serverPort = process.env.SERVER_PORT
  ? parseInt(process.env.SERVER_PORT)
  : 50051;

export const nodeId = process.env.NODE_ID;

export const logLevel =
  process.env.LOG_LEVEL || (env === 'development' ? 'debug' : 'info');

export const logFormat = process.env.LOG_FORMAT || 'default';

export const logTarget = process.env.LOG_TARGET || 'console';

export const logColor =
  process.env.LOG_COLOR == null
    ? logTarget === 'console'
    : process.env.LOG_COLOR === 'true';

export const logOneLine = process.env.LOG_ONE_LINE === 'true';

export const logDirectoryPath =
  process.env.LOG_DIRECTORY_PATH || path.join(__dirname, '..', 'log');

export const maxConnectionPerSocket = 
  process.env.MAX_CONNECTION_PER_SOCKET || 16;