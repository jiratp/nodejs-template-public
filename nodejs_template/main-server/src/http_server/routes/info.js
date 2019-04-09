/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import path from 'path';
import fs from 'fs';

import * as config from '../../config';
import logger from '../../logger';

let version;

export default async function getInfo(req, res, next) {
  try {
    let nodeInfo;

    res.status(200).json({
      env: config.env,
      version: version == null ? null : version,
      apiVersion: '1.0',
      nodeId: config.nodeId,
      nodeName: nodeInfo != null ? nodeInfo.node_name : undefined,
      nodePublicKey: nodeInfo != null ? nodeInfo.public_key : undefined,
      role: nodeInfo != null ? nodeInfo.role : undefined,
      serverListenPort: config.serverPort,
      dbIp: config.dbIp,
      dbPort: config.dbPort,
    });
  } catch (error) {
    next(error);
  }
}

fs.readFile(
  path.join(__dirname, '..', '..', '..', '..', 'VERSION'),
  'utf8',
  (err, data) => {
    if (err) {
      logger.error({
        message: 'Unable to read VERSION file',
        err,
      });
    }
    version = data;
  }
);