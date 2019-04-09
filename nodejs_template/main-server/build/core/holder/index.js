"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seviceCallbackUrls = exports.callbackUrls = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _custom_error = _interopRequireDefault(require("service-error/custom_error"));

var _type = _interopRequireDefault(require("service-error/type"));

var utils = _interopRequireWildcard(require("../../utils"));

var _callback = require("../../utils/callback");

var _logger = _interopRequireDefault(require("../../logger"));

var config = _interopRequireWildcard(require("../../config"));

var _node = require("../../node");

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
const callbackUrls = {};
exports.callbackUrls = callbackUrls;
const seviceCallbackUrls = {};
exports.seviceCallbackUrls = seviceCallbackUrls;

const callbackUrlFilesPrefix = _path.default.join(config.dataDirectoryPath, 'holder-callback-url-');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2hvbGRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJjYWxsYmFja1VybHMiLCJzZXZpY2VDYWxsYmFja1VybHMiLCJjYWxsYmFja1VybEZpbGVzUHJlZml4IiwicGF0aCIsImpvaW4iLCJjb25maWciLCJkYXRhRGlyZWN0b3J5UGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFoQkE7Ozs7QUFrQk8sTUFBTUEsWUFBWSxHQUFHLEVBQXJCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLEVBQTNCOzs7QUFFUCxNQUFNQyxzQkFBc0IsR0FBR0MsY0FBS0MsSUFBTCxDQUMzQkMsTUFBTSxDQUFDQyxpQkFEb0IsRUFFM0Isc0JBRjJCLENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgsIDIwMTkgQ2hpYkNoYSBDT01QQU5ZIExJTUlURURcbiAqXG4gKi9cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ3NlcnZpY2UtZXJyb3IvY3VzdG9tX2Vycm9yJztcbmltcG9ydCBlcnJvclR5cGUgZnJvbSAnc2VydmljZS1lcnJvci90eXBlJztcblxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5pbXBvcnQgeyBjYWxsYmFja1RvQ2xpZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FsbGJhY2snO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi8uLi9sb2dnZXInO1xuXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IHJvbGUgfSBmcm9tICcuLi8uLi9ub2RlJztcblxuZXhwb3J0IGNvbnN0IGNhbGxiYWNrVXJscyA9IHt9O1xuZXhwb3J0IGNvbnN0IHNldmljZUNhbGxiYWNrVXJscyA9IHt9O1xuXG5jb25zdCBjYWxsYmFja1VybEZpbGVzUHJlZml4ID0gcGF0aC5qb2luKFxuICAgIGNvbmZpZy5kYXRhRGlyZWN0b3J5UGF0aCxcbiAgICAnaG9sZGVyLWNhbGxiYWNrLXVybC0nXG4pOyJdfQ==