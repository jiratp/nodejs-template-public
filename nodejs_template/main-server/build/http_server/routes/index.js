"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _express = _interopRequireDefault(require("express"));

var _logger = _interopRequireDefault(require("../../logger"));

var _ready_handler = _interopRequireDefault(require("./middleware/ready_handler"));

var _error_handler = _interopRequireDefault(require("./middleware/error_handler"));

var _v = _interopRequireDefault(require("./v1"));

var _info = _interopRequireDefault(require("./info"));

var _debug = _interopRequireDefault(require("./debug"));

var config = _interopRequireWildcard(require("../../config"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
const router = _express.default.Router(); // FOR DEBUG


if (config.env === 'development') {
  router.use((req, res, next) => {
    const {
      method,
      originalUrl,
      params,
      query,
      body
    } = req;

    _logger.default.debug({
      message: 'Incoming HTTP request',
      method,
      originalUrl,
      params,
      query,
      body
    });

    const end = res.end;

    res.end = function (chunk, encoding) {
      res.end = end;
      res.end(chunk, encoding);
      const isJSON = res._headers && res._headers['content-type'] && res._headers['content-type'].indexOf('json') >= 0;
      const responseBodyString = chunk && chunk.toString();
      let responseBody;

      if (isJSON) {
        try {
          responseBody = JSON.parse(responseBodyString);
        } catch (error) {
          responseBody = responseBodyString;
        }
      }

      _logger.default.debug({
        message: 'Outgoing HTTP response',
        method,
        originalUrl,
        status: res.statusCode,
        body: responseBody
      });
    };

    next();
  });
  router.use('/debug', _debug.default);
}

router.get('/info', _info.default);
router.use(_v.default);
router.use('/v1', _v.default);
router.use(_error_handler.default); // All other paths besides stated above are invalid

router.use('*', function (req, res) {
  res.status(404).end();
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odHRwX3NlcnZlci9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImNvbmZpZyIsImVudiIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJtZXRob2QiLCJvcmlnaW5hbFVybCIsInBhcmFtcyIsInF1ZXJ5IiwiYm9keSIsImxvZ2dlciIsImRlYnVnIiwibWVzc2FnZSIsImVuZCIsImNodW5rIiwiZW5jb2RpbmciLCJpc0pTT04iLCJfaGVhZGVycyIsImluZGV4T2YiLCJyZXNwb25zZUJvZHlTdHJpbmciLCJ0b1N0cmluZyIsInJlc3BvbnNlQm9keSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImRlYnVnUm91dGVyIiwiZ2V0IiwiZ2V0SW5mbyIsImFwaVYxUm91dGVyIiwiZXJyb3JIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUdBOztBQUNBOztBQUVBOztBQW5CQTs7OztBQXFCQSxNQUFNQSxNQUFNLEdBQUdDLGlCQUFRQyxNQUFSLEVBQWYsQyxDQUVBOzs7QUFDQSxJQUFJQyxNQUFNLENBQUNDLEdBQVAsS0FBZSxhQUFuQixFQUFrQztBQUNoQ0osRUFBQUEsTUFBTSxDQUFDSyxHQUFQLENBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDN0IsVUFBTTtBQUFFQyxNQUFBQSxNQUFGO0FBQVVDLE1BQUFBLFdBQVY7QUFBdUJDLE1BQUFBLE1BQXZCO0FBQStCQyxNQUFBQSxLQUEvQjtBQUFzQ0MsTUFBQUE7QUFBdEMsUUFBK0NQLEdBQXJEOztBQUNBUSxvQkFBT0MsS0FBUCxDQUFhO0FBQ1hDLE1BQUFBLE9BQU8sRUFBRSx1QkFERTtBQUVYUCxNQUFBQSxNQUZXO0FBR1hDLE1BQUFBLFdBSFc7QUFJWEMsTUFBQUEsTUFKVztBQUtYQyxNQUFBQSxLQUxXO0FBTVhDLE1BQUFBO0FBTlcsS0FBYjs7QUFTQSxVQUFNSSxHQUFHLEdBQUdWLEdBQUcsQ0FBQ1UsR0FBaEI7O0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ1UsR0FBSixHQUFVLFVBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ2xDWixNQUFBQSxHQUFHLENBQUNVLEdBQUosR0FBVUEsR0FBVjtBQUNBVixNQUFBQSxHQUFHLENBQUNVLEdBQUosQ0FBUUMsS0FBUixFQUFlQyxRQUFmO0FBRUEsWUFBTUMsTUFBTSxHQUNWYixHQUFHLENBQUNjLFFBQUosSUFDQWQsR0FBRyxDQUFDYyxRQUFKLENBQWEsY0FBYixDQURBLElBRUFkLEdBQUcsQ0FBQ2MsUUFBSixDQUFhLGNBQWIsRUFBNkJDLE9BQTdCLENBQXFDLE1BQXJDLEtBQWdELENBSGxEO0FBS0EsWUFBTUMsa0JBQWtCLEdBQUdMLEtBQUssSUFBSUEsS0FBSyxDQUFDTSxRQUFOLEVBQXBDO0FBQ0EsVUFBSUMsWUFBSjs7QUFDQSxVQUFJTCxNQUFKLEVBQVk7QUFDVixZQUFJO0FBQ0ZLLFVBQUFBLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLGtCQUFYLENBQWY7QUFDRCxTQUZELENBRUUsT0FBT0ssS0FBUCxFQUFjO0FBQ2RILFVBQUFBLFlBQVksR0FBR0Ysa0JBQWY7QUFDRDtBQUNGOztBQUVEVCxzQkFBT0MsS0FBUCxDQUFhO0FBQ1hDLFFBQUFBLE9BQU8sRUFBRSx3QkFERTtBQUVYUCxRQUFBQSxNQUZXO0FBR1hDLFFBQUFBLFdBSFc7QUFJWG1CLFFBQUFBLE1BQU0sRUFBRXRCLEdBQUcsQ0FBQ3VCLFVBSkQ7QUFLWGpCLFFBQUFBLElBQUksRUFBRVk7QUFMSyxPQUFiO0FBT0QsS0ExQkQ7O0FBNEJBakIsSUFBQUEsSUFBSTtBQUNMLEdBekNEO0FBMENBUixFQUFBQSxNQUFNLENBQUNLLEdBQVAsQ0FBVyxRQUFYLEVBQXFCMEIsY0FBckI7QUFDRDs7QUFFRC9CLE1BQU0sQ0FBQ2dDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CQyxhQUFwQjtBQUVBakMsTUFBTSxDQUFDSyxHQUFQLENBQVc2QixVQUFYO0FBQ0FsQyxNQUFNLENBQUNLLEdBQVAsQ0FBVyxLQUFYLEVBQWtCNkIsVUFBbEI7QUFFQWxDLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXOEIsc0JBQVgsRSxDQUVBOztBQUNBbkMsTUFBTSxDQUFDSyxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDakNBLEVBQUFBLEdBQUcsQ0FBQ3NCLE1BQUosQ0FBVyxHQUFYLEVBQWdCWixHQUFoQjtBQUNELENBRkQ7ZUFJZWpCLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCwgMjAxOSBDaGliQ2hhIENPTVBBTlkgTElNSVRFRFxuICpcbiAqL1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vLi4vbG9nZ2VyJztcblxuaW1wb3J0IHJlYWR5SGFuZGxlciBmcm9tICcuL21pZGRsZXdhcmUvcmVhZHlfaGFuZGxlcic7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vbWlkZGxld2FyZS9lcnJvcl9oYW5kbGVyJztcblxuaW1wb3J0IGFwaVYxUm91dGVyIGZyb20gJy4vdjEnO1xuXG5cbmltcG9ydCBnZXRJbmZvIGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgZGVidWdSb3V0ZXIgZnJvbSAnLi9kZWJ1Zyc7XG5cbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vLyBGT1IgREVCVUdcbmlmIChjb25maWcuZW52ID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIHJvdXRlci51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBtZXRob2QsIG9yaWdpbmFsVXJsLCBwYXJhbXMsIHF1ZXJ5LCBib2R5IH0gPSByZXE7XG4gICAgbG9nZ2VyLmRlYnVnKHtcbiAgICAgIG1lc3NhZ2U6ICdJbmNvbWluZyBIVFRQIHJlcXVlc3QnLFxuICAgICAgbWV0aG9kLFxuICAgICAgb3JpZ2luYWxVcmwsXG4gICAgICBwYXJhbXMsXG4gICAgICBxdWVyeSxcbiAgICAgIGJvZHksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlbmQgPSByZXMuZW5kO1xuICAgIHJlcy5lbmQgPSBmdW5jdGlvbihjaHVuaywgZW5jb2RpbmcpIHtcbiAgICAgIHJlcy5lbmQgPSBlbmQ7XG4gICAgICByZXMuZW5kKGNodW5rLCBlbmNvZGluZyk7XG5cbiAgICAgIGNvbnN0IGlzSlNPTiA9XG4gICAgICAgIHJlcy5faGVhZGVycyAmJlxuICAgICAgICByZXMuX2hlYWRlcnNbJ2NvbnRlbnQtdHlwZSddICYmXG4gICAgICAgIHJlcy5faGVhZGVyc1snY29udGVudC10eXBlJ10uaW5kZXhPZignanNvbicpID49IDA7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlQm9keVN0cmluZyA9IGNodW5rICYmIGNodW5rLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgcmVzcG9uc2VCb2R5O1xuICAgICAgaWYgKGlzSlNPTikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlQm9keSA9IEpTT04ucGFyc2UocmVzcG9uc2VCb2R5U3RyaW5nKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXNwb25zZUJvZHkgPSByZXNwb25zZUJvZHlTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbG9nZ2VyLmRlYnVnKHtcbiAgICAgICAgbWVzc2FnZTogJ091dGdvaW5nIEhUVFAgcmVzcG9uc2UnLFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIG9yaWdpbmFsVXJsLFxuICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICBib2R5OiByZXNwb25zZUJvZHksXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbmV4dCgpO1xuICB9KTtcbiAgcm91dGVyLnVzZSgnL2RlYnVnJywgZGVidWdSb3V0ZXIpO1xufVxuXG5yb3V0ZXIuZ2V0KCcvaW5mbycsIGdldEluZm8pO1xuXG5yb3V0ZXIudXNlKGFwaVYxUm91dGVyKTtcbnJvdXRlci51c2UoJy92MScsIGFwaVYxUm91dGVyKTtcblxucm91dGVyLnVzZShlcnJvckhhbmRsZXIpO1xuXG4vLyBBbGwgb3RoZXIgcGF0aHMgYmVzaWRlcyBzdGF0ZWQgYWJvdmUgYXJlIGludmFsaWRcbnJvdXRlci51c2UoJyonLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==