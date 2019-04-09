"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInfo;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var config = _interopRequireWildcard(require("../../config"));

var _logger = _interopRequireDefault(require("../../logger"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
let version;

async function getInfo(req, res, next) {
  try {
    let nodeInfo;
    res.status(200).json({
      env: config.env,
      version: version == null ? null : version,
      apiVersion: '1.0',
      nodeId: config.nodeId,
      nodeName: nodeInfo != null ? nodeInfo.node_name : undefined,
      nodePublicKey: nodeInfo != null ? nodeInfo.public_key : undefined,
      role: nodeInfo != null ? nodeInfo.role : undefined,
      serverListenPort: config.serverPort,
      dbIp: config.dbIp,
      dbPort: config.dbPort
    });
  } catch (error) {
    next(error);
  }
}

_fs.default.readFile(_path.default.join(__dirname, '..', '..', '..', '..', 'VERSION'), 'utf8', (err, data) => {
  if (err) {
    _logger.default.error({
      message: 'Unable to read VERSION file',
      err
    });
  }

  version = data;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odHRwX3NlcnZlci9yb3V0ZXMvaW5mby5qcyJdLCJuYW1lcyI6WyJ2ZXJzaW9uIiwiZ2V0SW5mbyIsInJlcSIsInJlcyIsIm5leHQiLCJub2RlSW5mbyIsInN0YXR1cyIsImpzb24iLCJlbnYiLCJjb25maWciLCJhcGlWZXJzaW9uIiwibm9kZUlkIiwibm9kZU5hbWUiLCJub2RlX25hbWUiLCJ1bmRlZmluZWQiLCJub2RlUHVibGljS2V5IiwicHVibGljX2tleSIsInJvbGUiLCJzZXJ2ZXJMaXN0ZW5Qb3J0Iiwic2VydmVyUG9ydCIsImRiSXAiLCJkYlBvcnQiLCJlcnJvciIsImZzIiwicmVhZEZpbGUiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImVyciIsImRhdGEiLCJsb2dnZXIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUVBOztBQUNBOztBQVJBOzs7O0FBVUEsSUFBSUEsT0FBSjs7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ3BELE1BQUk7QUFDRixRQUFJQyxRQUFKO0FBRUFGLElBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxNQUFBQSxHQUFHLEVBQUVDLE1BQU0sQ0FBQ0QsR0FETztBQUVuQlIsTUFBQUEsT0FBTyxFQUFFQSxPQUFPLElBQUksSUFBWCxHQUFrQixJQUFsQixHQUF5QkEsT0FGZjtBQUduQlUsTUFBQUEsVUFBVSxFQUFFLEtBSE87QUFJbkJDLE1BQUFBLE1BQU0sRUFBRUYsTUFBTSxDQUFDRSxNQUpJO0FBS25CQyxNQUFBQSxRQUFRLEVBQUVQLFFBQVEsSUFBSSxJQUFaLEdBQW1CQSxRQUFRLENBQUNRLFNBQTVCLEdBQXdDQyxTQUwvQjtBQU1uQkMsTUFBQUEsYUFBYSxFQUFFVixRQUFRLElBQUksSUFBWixHQUFtQkEsUUFBUSxDQUFDVyxVQUE1QixHQUF5Q0YsU0FOckM7QUFPbkJHLE1BQUFBLElBQUksRUFBRVosUUFBUSxJQUFJLElBQVosR0FBbUJBLFFBQVEsQ0FBQ1ksSUFBNUIsR0FBbUNILFNBUHRCO0FBUW5CSSxNQUFBQSxnQkFBZ0IsRUFBRVQsTUFBTSxDQUFDVSxVQVJOO0FBU25CQyxNQUFBQSxJQUFJLEVBQUVYLE1BQU0sQ0FBQ1csSUFUTTtBQVVuQkMsTUFBQUEsTUFBTSxFQUFFWixNQUFNLENBQUNZO0FBVkksS0FBckI7QUFZRCxHQWZELENBZUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RsQixJQUFBQSxJQUFJLENBQUNrQixLQUFELENBQUo7QUFDRDtBQUNGOztBQUVEQyxZQUFHQyxRQUFILENBQ0VDLGNBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxFQUE2QyxTQUE3QyxDQURGLEVBRUUsTUFGRixFQUdFLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQ2IsTUFBSUQsR0FBSixFQUFTO0FBQ1BFLG9CQUFPUixLQUFQLENBQWE7QUFDWFMsTUFBQUEsT0FBTyxFQUFFLDZCQURFO0FBRVhILE1BQUFBO0FBRlcsS0FBYjtBQUlEOztBQUNENUIsRUFBQUEsT0FBTyxHQUFHNkIsSUFBVjtBQUNELENBWEgiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCwgMjAxOSBDaGliQ2hhIENPTVBBTlkgTElNSVRFRFxuICpcbiAqL1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vLi4vbG9nZ2VyJztcblxubGV0IHZlcnNpb247XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEluZm8ocmVxLCByZXMsIG5leHQpIHtcbiAgdHJ5IHtcbiAgICBsZXQgbm9kZUluZm87XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBlbnY6IGNvbmZpZy5lbnYsXG4gICAgICB2ZXJzaW9uOiB2ZXJzaW9uID09IG51bGwgPyBudWxsIDogdmVyc2lvbixcbiAgICAgIGFwaVZlcnNpb246ICcxLjAnLFxuICAgICAgbm9kZUlkOiBjb25maWcubm9kZUlkLFxuICAgICAgbm9kZU5hbWU6IG5vZGVJbmZvICE9IG51bGwgPyBub2RlSW5mby5ub2RlX25hbWUgOiB1bmRlZmluZWQsXG4gICAgICBub2RlUHVibGljS2V5OiBub2RlSW5mbyAhPSBudWxsID8gbm9kZUluZm8ucHVibGljX2tleSA6IHVuZGVmaW5lZCxcbiAgICAgIHJvbGU6IG5vZGVJbmZvICE9IG51bGwgPyBub2RlSW5mby5yb2xlIDogdW5kZWZpbmVkLFxuICAgICAgc2VydmVyTGlzdGVuUG9ydDogY29uZmlnLnNlcnZlclBvcnQsXG4gICAgICBkYklwOiBjb25maWcuZGJJcCxcbiAgICAgIGRiUG9ydDogY29uZmlnLmRiUG9ydCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yKTtcbiAgfVxufVxuXG5mcy5yZWFkRmlsZShcbiAgcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJywgJy4uJywgJ1ZFUlNJT04nKSxcbiAgJ3V0ZjgnLFxuICAoZXJyLCBkYXRhKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgbG9nZ2VyLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogJ1VuYWJsZSB0byByZWFkIFZFUlNJT04gZmlsZScsXG4gICAgICAgIGVycixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2ZXJzaW9uID0gZGF0YTtcbiAgfVxuKTsiXX0=