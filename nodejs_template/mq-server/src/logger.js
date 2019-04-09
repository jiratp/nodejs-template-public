/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import { initLogger } from 'ndid-logger';

import * as config from './config';

const logger = initLogger({
  name: config.nodeId,
  logLevel: config.logLevel,
  logTarget: config.logTarget,
  logDirectoryPath: config.logDirectoryPath,
  logFormat: config.logFormat,
  logColor: config.logColor,
  logOneLine: config.logOneLine,
});

export default logger;