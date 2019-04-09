/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
import express from 'express';

import holderRouter from './holder';
// import issuerRouter from './issuer';
// import recipientRouter from './recipient';
// import utilityRouter from './utility';

const router = express.Router();

router.use('/holder', holderRouter);
// router.use('/issuer', issuerRouter);
// router.use('/recipient', recipientRouter);
// router.use('/utility', utilityRouter);

export default router;