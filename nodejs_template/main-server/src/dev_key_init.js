/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import 'source-map-support/register';

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

import * as config from './config';

process.on('unhandledRejection', function(reason, p) {
  console.error('Unhandled Rejection', p, reason.stack || reason);
});

// Make sure data and log directories exist
mkdirp.sync(config.dataDirectoryPath);
mkdirp.sync(config.logDirectoryPath);

export async function init() {
    // Login for setup pub/priv key
    process.exit();
};

init();