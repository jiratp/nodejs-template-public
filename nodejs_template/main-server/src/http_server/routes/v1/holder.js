/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import express from 'express';

import { validateBody } from '../middleware/validation';
import { holderOnlyHandler } from '../middleware/role_handler';
import * as holder from '../../../core/holder';

const router = express.Router();

router.use(holderOnlyHandler);

router.get('/service', validateBody, async (req, res, next) => {
  try {
    

    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;