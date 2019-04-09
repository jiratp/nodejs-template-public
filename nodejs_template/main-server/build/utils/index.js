"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = wait;
exports.readFileAsync = readFileAsync;

var _fs = _interopRequireDefault(require("fs"));

var _crypto = _interopRequireDefault(require("crypto"));

var _constants = _interopRequireDefault(require("constants"));

var _bignum = _interopRequireDefault(require("bignum"));

var _custom_error = _interopRequireDefault(require("service-error/custom_error"));

var _type = _interopRequireDefault(require("service-error/type"));

var _logger = _interopRequireDefault(require("../logger"));

var config = _interopRequireWildcard(require("../config"));

function wait(ms, stoppable) {
  let setTimeoutFn;
  const promise = new Promise(resolve => setTimeoutFn = setTimeout(resolve, ms));

  if (stoppable) {
    return Object.assign(promise, {
      stop: () => clearTimeout(setTimeoutFn)
    });
  }

  return promise;
}

function readFileAsync(path, opts) {
  return new Promise((resolve, reject) => {
    _fs.default.readFile(path, opts, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3YWl0IiwibXMiLCJzdG9wcGFibGUiLCJzZXRUaW1lb3V0Rm4iLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiT2JqZWN0IiwiYXNzaWduIiwic3RvcCIsImNsZWFyVGltZW91dCIsInJlYWRGaWxlQXN5bmMiLCJwYXRoIiwib3B0cyIsInJlamVjdCIsImZzIiwicmVhZEZpbGUiLCJlcnIiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTyxTQUFTQSxJQUFULENBQWNDLEVBQWQsRUFBa0JDLFNBQWxCLEVBQTZCO0FBQ2hDLE1BQUlDLFlBQUo7QUFDQSxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUNiQyxPQUFELElBQWNILFlBQVksR0FBR0ksVUFBVSxDQUFDRCxPQUFELEVBQVVMLEVBQVYsQ0FEekIsQ0FBaEI7O0FBR0EsTUFBSUMsU0FBSixFQUFlO0FBQ2IsV0FBT00sTUFBTSxDQUFDQyxNQUFQLENBQWNMLE9BQWQsRUFBdUI7QUFBRU0sTUFBQUEsSUFBSSxFQUFFLE1BQU1DLFlBQVksQ0FBQ1IsWUFBRDtBQUExQixLQUF2QixDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0MsT0FBUDtBQUNEOztBQUVNLFNBQVNRLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCQyxJQUE3QixFQUFtQztBQUN4QyxTQUFPLElBQUlULE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVTLE1BQVYsS0FBcUI7QUFDdENDLGdCQUFHQyxRQUFILENBQVlKLElBQVosRUFBa0JDLElBQWxCLEVBQXdCLENBQUNJLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQ3JDLFVBQUlELEdBQUosRUFBUztBQUNQSCxRQUFBQSxNQUFNLENBQUNHLEdBQUQsQ0FBTjtBQUNBO0FBQ0Q7O0FBQ0RaLE1BQUFBLE9BQU8sQ0FBQ2EsSUFBRCxDQUFQO0FBQ0QsS0FORDtBQU9ELEdBUk0sQ0FBUDtBQVNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnY29uc3RhbnRzJztcblxuaW1wb3J0IGJpZ251bSBmcm9tICdiaWdudW0nO1xuXG5cbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdzZXJ2aWNlLWVycm9yL2N1c3RvbV9lcnJvcic7XG5pbXBvcnQgZXJyb3JUeXBlIGZyb20gJ3NlcnZpY2UtZXJyb3IvdHlwZSc7XG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcblxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWl0KG1zLCBzdG9wcGFibGUpIHtcbiAgICBsZXQgc2V0VGltZW91dEZuO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShcbiAgICAgIChyZXNvbHZlKSA9PiAoc2V0VGltZW91dEZuID0gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgKTtcbiAgICBpZiAoc3RvcHBhYmxlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IHN0b3A6ICgpID0+IGNsZWFyVGltZW91dChzZXRUaW1lb3V0Rm4pIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlQXN5bmMocGF0aCwgb3B0cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmcy5yZWFkRmlsZShwYXRoLCBvcHRzLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9Il19