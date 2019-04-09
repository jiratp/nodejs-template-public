"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

require("source-map-support/register");

require("dotenv/config");

var _mkdirp = _interopRequireDefault(require("mkdirp"));

require("./env_var_validate");

var httpServer = _interopRequireWildcard(require("./http_server"));

var _logger = _interopRequireDefault(require("./logger"));

var config = _interopRequireWildcard(require("./config"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
process.on('unhandledRejection', function (reason, p) {
  if (reason && reason.name === 'CustomError') {
    _logger.default.error({
      message: 'Unhandled Rejection',
      p
    });

    _logger.default.error(reason.getInfoForLog());
  } else {
    _logger.default.error({
      message: 'Unhandled Rejection',
      p,
      reason: reason.stack || reason
    });
  }
});

async function initialize() {
  _logger.default.info({
    message: 'Initializing server'
  });

  try {
    httpServer.initialize();
    console.log("11111");
  } catch (error) {
    _logger.default.error({
      message: 'Cannot initialize server',
      error
    }); // shutDown();

  }
}

const {
  privateKeyPassphrase,
  // eslint-disable-line no-unused-vars
  masterPrivateKeyPassphrase,
  // eslint-disable-line no-unused-vars
  dbPassword
} = config,
      configToLog = (0, _objectWithoutProperties2.default)(config, ["privateKeyPassphrase", "masterPrivateKeyPassphrase", "dbPassword"]);

_logger.default.info({
  message: 'Starting server',
  NODE_ENV: process.env.NODE_ENV,
  config: configToLog
}); // Make sure data and log directories exist


_mkdirp.default.sync(config.dataDirectoryPath);

_mkdirp.default.sync(config.logDirectoryPath); // Graceful Shutdown


let shutDownCalledOnce = false;

async function shutDown() {
  if (shutDownCalledOnce) {
    _logger.default.error({
      message: 'Forcefully shutting down'
    });

    process.exit(1);
  }

  shutDownCalledOnce = true;

  _logger.default.info({
    message: 'Received kill signal, shutting down gracefully'
  });

  console.log('(Ctrl+C again to force shutdown)');
}

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
initialize();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm9uIiwicmVhc29uIiwicCIsIm5hbWUiLCJsb2dnZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXRJbmZvRm9yTG9nIiwic3RhY2siLCJpbml0aWFsaXplIiwiaW5mbyIsImh0dHBTZXJ2ZXIiLCJjb25zb2xlIiwibG9nIiwicHJpdmF0ZUtleVBhc3NwaHJhc2UiLCJtYXN0ZXJQcml2YXRlS2V5UGFzc3BocmFzZSIsImRiUGFzc3dvcmQiLCJjb25maWciLCJjb25maWdUb0xvZyIsIk5PREVfRU5WIiwiZW52IiwibWtkaXJwIiwic3luYyIsImRhdGFEaXJlY3RvcnlQYXRoIiwibG9nRGlyZWN0b3J5UGF0aCIsInNodXREb3duQ2FsbGVkT25jZSIsInNodXREb3duIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFmQTs7OztBQWlCQUEsT0FBTyxDQUFDQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsVUFBU0MsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0I7QUFDbkQsTUFBSUQsTUFBTSxJQUFJQSxNQUFNLENBQUNFLElBQVAsS0FBZ0IsYUFBOUIsRUFBNkM7QUFDM0NDLG9CQUFPQyxLQUFQLENBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLHFCQURFO0FBRVhKLE1BQUFBO0FBRlcsS0FBYjs7QUFJQUUsb0JBQU9DLEtBQVAsQ0FBYUosTUFBTSxDQUFDTSxhQUFQLEVBQWI7QUFDRCxHQU5ELE1BTU87QUFDTEgsb0JBQU9DLEtBQVAsQ0FBYTtBQUNYQyxNQUFBQSxPQUFPLEVBQUUscUJBREU7QUFFWEosTUFBQUEsQ0FGVztBQUdYRCxNQUFBQSxNQUFNLEVBQUVBLE1BQU0sQ0FBQ08sS0FBUCxJQUFnQlA7QUFIYixLQUFiO0FBS0Q7QUFDRixDQWREOztBQWdCQSxlQUFlUSxVQUFmLEdBQTRCO0FBQ3hCTCxrQkFBT00sSUFBUCxDQUFZO0FBQUVKLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQVo7O0FBQ0EsTUFBSTtBQUVGSyxJQUFBQSxVQUFVLENBQUNGLFVBQVg7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNELEdBSkQsQ0FJRSxPQUFPUixLQUFQLEVBQWM7QUFDWkQsb0JBQU9DLEtBQVAsQ0FBYTtBQUNYQyxNQUFBQSxPQUFPLEVBQUUsMEJBREU7QUFFWEQsTUFBQUE7QUFGVyxLQUFiLEVBRFksQ0FLWjs7QUFDSDtBQUNKOztBQUVELE1BQU07QUFDSlMsRUFBQUEsb0JBREk7QUFDa0I7QUFDdEJDLEVBQUFBLDBCQUZJO0FBRXdCO0FBQzVCQyxFQUFBQTtBQUhJLElBS0ZDLE1BTEo7QUFBQSxNQUlLQyxXQUpMLDBDQUtJRCxNQUxKOztBQU9BYixnQkFBT00sSUFBUCxDQUFZO0FBQ1ZKLEVBQUFBLE9BQU8sRUFBRSxpQkFEQztBQUVWYSxFQUFBQSxRQUFRLEVBQUVwQixPQUFPLENBQUNxQixHQUFSLENBQVlELFFBRlo7QUFHVkYsRUFBQUEsTUFBTSxFQUFFQztBQUhFLENBQVosRSxDQU1BOzs7QUFDQUcsZ0JBQU9DLElBQVAsQ0FBWUwsTUFBTSxDQUFDTSxpQkFBbkI7O0FBQ0FGLGdCQUFPQyxJQUFQLENBQVlMLE1BQU0sQ0FBQ08sZ0JBQW5CLEUsQ0FFQTs7O0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsS0FBekI7O0FBQ0EsZUFBZUMsUUFBZixHQUEwQjtBQUN4QixNQUFJRCxrQkFBSixFQUF3QjtBQUN0QnJCLG9CQUFPQyxLQUFQLENBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFO0FBREUsS0FBYjs7QUFHQVAsSUFBQUEsT0FBTyxDQUFDNEIsSUFBUixDQUFhLENBQWI7QUFDRDs7QUFDREYsRUFBQUEsa0JBQWtCLEdBQUcsSUFBckI7O0FBRUFyQixrQkFBT00sSUFBUCxDQUFZO0FBQ1ZKLElBQUFBLE9BQU8sRUFBRTtBQURDLEdBQVo7O0FBR0FNLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFaO0FBQ0Q7O0FBRURkLE9BQU8sQ0FBQ0MsRUFBUixDQUFXLFNBQVgsRUFBc0IwQixRQUF0QjtBQUNBM0IsT0FBTyxDQUFDQyxFQUFSLENBQVcsUUFBWCxFQUFxQjBCLFFBQXJCO0FBRUFqQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgsIDIwMTkgQ2hpYkNoYSBDT01QQU5ZIExJTUlURURcbiAqXG4gKi9cbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcbmltcG9ydCBta2RpcnAgZnJvbSAnbWtkaXJwJztcblxuaW1wb3J0ICcuL2Vudl92YXJfdmFsaWRhdGUnO1xuXG5pbXBvcnQgKiBhcyBodHRwU2VydmVyIGZyb20gJy4vaHR0cF9zZXJ2ZXInO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZnVuY3Rpb24ocmVhc29uLCBwKSB7XG4gIGlmIChyZWFzb24gJiYgcmVhc29uLm5hbWUgPT09ICdDdXN0b21FcnJvcicpIHtcbiAgICBsb2dnZXIuZXJyb3Ioe1xuICAgICAgbWVzc2FnZTogJ1VuaGFuZGxlZCBSZWplY3Rpb24nLFxuICAgICAgcCxcbiAgICB9KTtcbiAgICBsb2dnZXIuZXJyb3IocmVhc29uLmdldEluZm9Gb3JMb2coKSk7XG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VyLmVycm9yKHtcbiAgICAgIG1lc3NhZ2U6ICdVbmhhbmRsZWQgUmVqZWN0aW9uJyxcbiAgICAgIHAsXG4gICAgICByZWFzb246IHJlYXNvbi5zdGFjayB8fCByZWFzb24sXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGxvZ2dlci5pbmZvKHsgbWVzc2FnZTogJ0luaXRpYWxpemluZyBzZXJ2ZXInIH0pO1xuICAgIHRyeSB7XG5cbiAgICAgIGh0dHBTZXJ2ZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgY29uc29sZS5sb2coXCIxMTExMVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2dnZXIuZXJyb3Ioe1xuICAgICAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgaW5pdGlhbGl6ZSBzZXJ2ZXInLFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2h1dERvd24oKTtcbiAgICB9XG59XG5cbmNvbnN0IHtcbiAgcHJpdmF0ZUtleVBhc3NwaHJhc2UsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgbWFzdGVyUHJpdmF0ZUtleVBhc3NwaHJhc2UsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgZGJQYXNzd29yZCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAuLi5jb25maWdUb0xvZ1xufSA9IGNvbmZpZztcblxubG9nZ2VyLmluZm8oe1xuICBtZXNzYWdlOiAnU3RhcnRpbmcgc2VydmVyJyxcbiAgTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICBjb25maWc6IGNvbmZpZ1RvTG9nLFxufSk7XG5cbi8vIE1ha2Ugc3VyZSBkYXRhIGFuZCBsb2cgZGlyZWN0b3JpZXMgZXhpc3Rcbm1rZGlycC5zeW5jKGNvbmZpZy5kYXRhRGlyZWN0b3J5UGF0aCk7XG5ta2RpcnAuc3luYyhjb25maWcubG9nRGlyZWN0b3J5UGF0aCk7XG5cbi8vIEdyYWNlZnVsIFNodXRkb3duXG5sZXQgc2h1dERvd25DYWxsZWRPbmNlID0gZmFsc2U7XG5hc3luYyBmdW5jdGlvbiBzaHV0RG93bigpIHtcbiAgaWYgKHNodXREb3duQ2FsbGVkT25jZSkge1xuICAgIGxvZ2dlci5lcnJvcih7XG4gICAgICBtZXNzYWdlOiAnRm9yY2VmdWxseSBzaHV0dGluZyBkb3duJyxcbiAgICB9KTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cbiAgc2h1dERvd25DYWxsZWRPbmNlID0gdHJ1ZTtcblxuICBsb2dnZXIuaW5mbyh7XG4gICAgbWVzc2FnZTogJ1JlY2VpdmVkIGtpbGwgc2lnbmFsLCBzaHV0dGluZyBkb3duIGdyYWNlZnVsbHknLFxuICB9KTtcbiAgY29uc29sZS5sb2coJyhDdHJsK0MgYWdhaW4gdG8gZm9yY2Ugc2h1dGRvd24pJyk7XG59XG5cbnByb2Nlc3Mub24oJ1NJR1RFUk0nLCBzaHV0RG93bik7XG5wcm9jZXNzLm9uKCdTSUdJTlQnLCBzaHV0RG93bik7XG5cbmluaXRpYWxpemUoKTsiXX0=