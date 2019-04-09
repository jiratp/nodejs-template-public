/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import { role } from '../../../node';

export function holderOnlyHandler(req, res, next) {
  if (role !== 'holder') {
    res.status(404).end();
    return;
  }
  next();
}

export function issuerOnlyHandler(req, res, next) {
  if (role !== 'issuer') {
    res.status(404).end();
    return;
  }
  next();
}

export function recipientOnlyHandler(req, res, next) {
  if (role !== 'recipient') {
    res.status(404).end();
    return;
  }
  next();
}