"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _holder = _interopRequireDefault(require("./holder"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
// import issuerRouter from './issuer';
// import recipientRouter from './recipient';
// import utilityRouter from './utility';
const router = _express.default.Router();

router.use('/holder', _holder.default); // router.use('/issuer', issuerRouter);
// router.use('/recipient', recipientRouter);
// router.use('/utility', utilityRouter);

var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwX3NlcnZlci9yb3V0ZXMvdjEvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsImhvbGRlclJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7O0FBRUE7O0FBTkE7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLGlCQUFRQyxNQUFSLEVBQWY7O0FBRUFGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFNBQVgsRUFBc0JDLGVBQXRCLEUsQ0FDQTtBQUNBO0FBQ0E7O2VBRWVKLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCwgMjAxOSBDaGliQ2hhIENPTVBBTlkgTElNSVRFRFxuICpcbiAqL1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCBob2xkZXJSb3V0ZXIgZnJvbSAnLi9ob2xkZXInO1xuLy8gaW1wb3J0IGlzc3VlclJvdXRlciBmcm9tICcuL2lzc3Vlcic7XG4vLyBpbXBvcnQgcmVjaXBpZW50Um91dGVyIGZyb20gJy4vcmVjaXBpZW50Jztcbi8vIGltcG9ydCB1dGlsaXR5Um91dGVyIGZyb20gJy4vdXRpbGl0eSc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci51c2UoJy9ob2xkZXInLCBob2xkZXJSb3V0ZXIpO1xuLy8gcm91dGVyLnVzZSgnL2lzc3VlcicsIGlzc3VlclJvdXRlcik7XG4vLyByb3V0ZXIudXNlKCcvcmVjaXBpZW50JywgcmVjaXBpZW50Um91dGVyKTtcbi8vIHJvdXRlci51c2UoJy91dGlsaXR5JywgdXRpbGl0eVJvdXRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXX0=