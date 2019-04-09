/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */

import { getErrorObjectForClient as _getErrorObjectForClient } from 'service-error/helpers';
import { env } from '../config';

export function getErrorObjectForClient(error) {
  return _getErrorObjectForClient(error, env === 'development');
}