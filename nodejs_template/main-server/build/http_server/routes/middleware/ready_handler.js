"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readyHandler;

var _type = _interopRequireDefault(require("service-error/type"));

var _logger = _interopRequireDefault(require("../../../logger"));

var config = _interopRequireWildcard(require("../../../config"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
function readyHandler(req, res, next) {
  if (req.method === 'POST') {}

  next();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwX3NlcnZlci9yb3V0ZXMvbWlkZGxld2FyZS9yZWFkeV9oYW5kbGVyLmpzIl0sIm5hbWVzIjpbInJlYWR5SGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBUkE7Ozs7QUFVZSxTQUFTQSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0NDLElBQWhDLEVBQXNDO0FBRWpELE1BQUlGLEdBQUcsQ0FBQ0csTUFBSixLQUFlLE1BQW5CLEVBQTJCLENBRTFCOztBQUVERCxFQUFBQSxJQUFJO0FBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCwgMjAxOSBDaGliQ2hhIENPTVBBTlkgTElNSVRFRFxuICpcbiAqL1xuaW1wb3J0IGVycm9yVHlwZSBmcm9tICdzZXJ2aWNlLWVycm9yL3R5cGUnO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uLy4uL2xvZ2dlcic7XG5cbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWFkeUhhbmRsZXIocmVxLCByZXMsIG5leHQpIHtcblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcblxuICAgIH1cblxuICAgIG5leHQoKTtcbn0iXX0=