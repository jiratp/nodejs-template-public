"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeRoleFromBlockchain = getNodeRoleFromBlockchain;
exports.role = void 0;

var _custom_error = _interopRequireDefault(require("service-error/custom_error"));

var config = _interopRequireWildcard(require("./config"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
let role;
exports.role = role;

async function getNodeRoleFromBlockchain() {
  try {
    const nodeInfo = {
      role: "holder"
    }; // await getNodeInfo(config.nodeId);

    if (nodeInfo == null) {
      throw new _custom_error.default({
        message: 'Node info is not available. This node ID may have not been registered with EDOC.'
      });
    }

    if (nodeInfo.role == null) {
      throw new _custom_error.default({
        message: 'Role could not be found.'
      });
    }

    exports.role = role = nodeInfo.role.toLowerCase();
    return role;
  } catch (error) {
    throw new _custom_error.default({
      message: 'Cannot get node role from blockchain',
      cause: error
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sIm5hbWVzIjpbInJvbGUiLCJnZXROb2RlUm9sZUZyb21CbG9ja2NoYWluIiwibm9kZUluZm8iLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJ0b0xvd2VyQ2FzZSIsImVycm9yIiwiY2F1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBOztBQUVBOztBQU5BOzs7O0FBUU8sSUFBSUEsSUFBSjs7O0FBRUEsZUFBZUMseUJBQWYsR0FBMkM7QUFDOUMsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRztBQUNmRixNQUFBQSxJQUFJLEVBQUU7QUFEUyxLQUFqQixDQURFLENBR0M7O0FBRUgsUUFBSUUsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU0sSUFBSUMscUJBQUosQ0FBZ0I7QUFDcEJDLFFBQUFBLE9BQU8sRUFDTDtBQUZrQixPQUFoQixDQUFOO0FBSUQ7O0FBQ0QsUUFBSUYsUUFBUSxDQUFDRixJQUFULElBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLFlBQU0sSUFBSUcscUJBQUosQ0FBZ0I7QUFDcEJDLFFBQUFBLE9BQU8sRUFBRTtBQURXLE9BQWhCLENBQU47QUFHRDs7QUFDRCxtQkFBQUosSUFBSSxHQUFHRSxRQUFRLENBQUNGLElBQVQsQ0FBY0ssV0FBZCxFQUFQO0FBQ0EsV0FBT0wsSUFBUDtBQUNELEdBbEJELENBa0JFLE9BQU9NLEtBQVAsRUFBYztBQUNkLFVBQU0sSUFBSUgscUJBQUosQ0FBZ0I7QUFDcEJDLE1BQUFBLE9BQU8sRUFBRSxzQ0FEVztBQUVwQkcsTUFBQUEsS0FBSyxFQUFFRDtBQUZhLEtBQWhCLENBQU47QUFJRDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgsIDIwMTkgQ2hpYkNoYSBDT01QQU5ZIExJTUlURURcbiAqXG4gKi9cbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdzZXJ2aWNlLWVycm9yL2N1c3RvbV9lcnJvcic7XG5cbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBsZXQgcm9sZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vZGVSb2xlRnJvbUJsb2NrY2hhaW4oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5vZGVJbmZvID0ge1xuICAgICAgICByb2xlOiBcImhvbGRlclwiXG4gICAgICB9OyAvLyBhd2FpdCBnZXROb2RlSW5mbyhjb25maWcubm9kZUlkKTtcblxuICAgICAgaWYgKG5vZGVJbmZvID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ05vZGUgaW5mbyBpcyBub3QgYXZhaWxhYmxlLiBUaGlzIG5vZGUgSUQgbWF5IGhhdmUgbm90IGJlZW4gcmVnaXN0ZXJlZCB3aXRoIEVET0MuJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZUluZm8ucm9sZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcih7XG4gICAgICAgICAgbWVzc2FnZTogJ1JvbGUgY291bGQgbm90IGJlIGZvdW5kLicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcm9sZSA9IG5vZGVJbmZvLnJvbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiByb2xlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiAnQ2Fubm90IGdldCBub2RlIHJvbGUgZnJvbSBibG9ja2NoYWluJyxcbiAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgfSk7XG4gICAgfVxufSJdfQ==