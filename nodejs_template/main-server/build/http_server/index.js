"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
exports.close = close;

var _fs = _interopRequireDefault(require("fs"));

var _http = _interopRequireDefault(require("http"));

var _https = _interopRequireDefault(require("https"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _error_handler = require("./routes/middleware/error_handler");

var _logger = _interopRequireDefault(require("../logger"));

var config = _interopRequireWildcard(require("../config"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
let server;

function initialize() {
  _logger.default.info({
    message: 'Starting HTTP server'
  });

  const app = (0, _express.default)();
  app.use((0, _morgan.default)('combined', {
    stream: {
      write: message => _logger.default.info(message.trim())
    }
  }));
  app.use(_bodyParser.default.json({
    limit: '3mb'
  }));
  app.use(_error_handler.bodyParserErrorHandler);
  app.use(_routes.default);

  if (config.https) {
    const httpsOptions = {
      key: _fs.default.readFileSync(config.httpsKeyPath),
      cert: _fs.default.readFileSync(config.httpsCertPath)
    };
    server = _https.default.createServer(httpsOptions, app);
  } else {
    server = _http.default.createServer(app);
  }

  server.listen(config.serverPort);

  _logger.default.info({
    message: `${config.https ? 'HTTPS' : 'HTTP'} server listening on port ${config.serverPort}`
  });
}

function close() {
  return new Promise(resolve => {
    if (server) {
      server.close(() => {
        _logger.default.info({
          message: 'HTTP server closed'
        });

        resolve();
      });
    } else {
      resolve();
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odHRwX3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJpbml0aWFsaXplIiwibG9nZ2VyIiwiaW5mbyIsIm1lc3NhZ2UiLCJhcHAiLCJ1c2UiLCJzdHJlYW0iLCJ3cml0ZSIsInRyaW0iLCJib2R5UGFyc2VyIiwianNvbiIsImxpbWl0IiwiYm9keVBhcnNlckVycm9ySGFuZGxlciIsInJvdXRlcyIsImNvbmZpZyIsImh0dHBzIiwiaHR0cHNPcHRpb25zIiwia2V5IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJodHRwc0tleVBhdGgiLCJjZXJ0IiwiaHR0cHNDZXJ0UGF0aCIsImNyZWF0ZVNlcnZlciIsImh0dHAiLCJsaXN0ZW4iLCJzZXJ2ZXJQb3J0IiwiY2xvc2UiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBaEJBOzs7O0FBa0JBLElBQUlBLE1BQUo7O0FBRU8sU0FBU0MsVUFBVCxHQUFzQjtBQUN6QkMsa0JBQU9DLElBQVAsQ0FBWTtBQUNWQyxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQUFaOztBQUlBLFFBQU1DLEdBQUcsR0FBRyx1QkFBWjtBQUVBQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FDRSxxQkFBTyxVQUFQLEVBQW1CO0FBQ2pCQyxJQUFBQSxNQUFNLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFHSixPQUFELElBQWFGLGdCQUFPQyxJQUFQLENBQVlDLE9BQU8sQ0FBQ0ssSUFBUixFQUFaO0FBQXRCO0FBRFMsR0FBbkIsQ0FERjtBQU1BSixFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUUksb0JBQVdDLElBQVgsQ0FBZ0I7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBaEIsQ0FBUjtBQUNBUCxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUU8scUNBQVI7QUFFQVIsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVFRLGVBQVI7O0FBRUEsTUFBSUMsTUFBTSxDQUFDQyxLQUFYLEVBQWtCO0FBQ2hCLFVBQU1DLFlBQVksR0FBRztBQUNuQkMsTUFBQUEsR0FBRyxFQUFFQyxZQUFHQyxZQUFILENBQWdCTCxNQUFNLENBQUNNLFlBQXZCLENBRGM7QUFFbkJDLE1BQUFBLElBQUksRUFBRUgsWUFBR0MsWUFBSCxDQUFnQkwsTUFBTSxDQUFDUSxhQUF2QjtBQUZhLEtBQXJCO0FBSUF2QixJQUFBQSxNQUFNLEdBQUdnQixlQUFNUSxZQUFOLENBQW1CUCxZQUFuQixFQUFpQ1osR0FBakMsQ0FBVDtBQUNELEdBTkQsTUFNTztBQUNMTCxJQUFBQSxNQUFNLEdBQUd5QixjQUFLRCxZQUFMLENBQWtCbkIsR0FBbEIsQ0FBVDtBQUNEOztBQUNETCxFQUFBQSxNQUFNLENBQUMwQixNQUFQLENBQWNYLE1BQU0sQ0FBQ1ksVUFBckI7O0FBRUF6QixrQkFBT0MsSUFBUCxDQUFZO0FBQ1ZDLElBQUFBLE9BQU8sRUFBRyxHQUFFVyxNQUFNLENBQUNDLEtBQVAsR0FBZSxPQUFmLEdBQXlCLE1BQU8sNkJBQzFDRCxNQUFNLENBQUNZLFVBQ1I7QUFIUyxHQUFaO0FBS0Q7O0FBRU0sU0FBU0MsS0FBVCxHQUFpQjtBQUN0QixTQUFPLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhO0FBQzlCLFFBQUk5QixNQUFKLEVBQVk7QUFDVkEsTUFBQUEsTUFBTSxDQUFDNEIsS0FBUCxDQUFhLE1BQU07QUFDakIxQix3QkFBT0MsSUFBUCxDQUFZO0FBQ1ZDLFVBQUFBLE9BQU8sRUFBRTtBQURDLFNBQVo7O0FBR0EwQixRQUFBQSxPQUFPO0FBQ1IsT0FMRDtBQU1ELEtBUEQsTUFPTztBQUNMQSxNQUFBQSxPQUFPO0FBQ1I7QUFDRixHQVhNLENBQVA7QUFZRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LCAyMDE5IENoaWJDaGEgQ09NUEFOWSBMSU1JVEVEXG4gKlxuICovXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHsgYm9keVBhcnNlckVycm9ySGFuZGxlciB9IGZyb20gJy4vcm91dGVzL21pZGRsZXdhcmUvZXJyb3JfaGFuZGxlcic7XG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcblxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmxldCBzZXJ2ZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGxvZ2dlci5pbmZvKHtcbiAgICAgIG1lc3NhZ2U6ICdTdGFydGluZyBIVFRQIHNlcnZlcicsXG4gICAgfSk7XG4gIFxuICAgIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbiAgXG4gICAgYXBwLnVzZShcbiAgICAgIG1vcmdhbignY29tYmluZWQnLCB7XG4gICAgICAgIHN0cmVhbTogeyB3cml0ZTogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvKG1lc3NhZ2UudHJpbSgpKSB9LFxuICAgICAgfSlcbiAgICApO1xuICBcbiAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiAnM21iJyB9KSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyRXJyb3JIYW5kbGVyKTtcbiAgXG4gICAgYXBwLnVzZShyb3V0ZXMpO1xuICBcbiAgICBpZiAoY29uZmlnLmh0dHBzKSB7XG4gICAgICBjb25zdCBodHRwc09wdGlvbnMgPSB7XG4gICAgICAgIGtleTogZnMucmVhZEZpbGVTeW5jKGNvbmZpZy5odHRwc0tleVBhdGgpLFxuICAgICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY29uZmlnLmh0dHBzQ2VydFBhdGgpLFxuICAgICAgfTtcbiAgICAgIHNlcnZlciA9IGh0dHBzLmNyZWF0ZVNlcnZlcihodHRwc09wdGlvbnMsIGFwcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG4gICAgfVxuICAgIHNlcnZlci5saXN0ZW4oY29uZmlnLnNlcnZlclBvcnQpO1xuICBcbiAgICBsb2dnZXIuaW5mbyh7XG4gICAgICBtZXNzYWdlOiBgJHtjb25maWcuaHR0cHMgPyAnSFRUUFMnIDogJ0hUVFAnfSBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtcbiAgICAgICAgY29uZmlnLnNlcnZlclBvcnRcbiAgICAgIH1gLFxuICAgIH0pO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc2VydmVyKSB7XG4gICAgICAgIHNlcnZlci5jbG9zZSgoKSA9PiB7XG4gICAgICAgICAgbG9nZ2VyLmluZm8oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0hUVFAgc2VydmVyIGNsb3NlZCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSJdfQ==