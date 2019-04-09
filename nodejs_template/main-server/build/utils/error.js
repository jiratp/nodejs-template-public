"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorObjectForClient = getErrorObjectForClient;

var _helpers = require("service-error/helpers");

var _config = require("../config");

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
function getErrorObjectForClient(error) {
  return (0, _helpers.getErrorObjectForClient)(error, _config.env === 'development');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9lcnJvci5qcyJdLCJuYW1lcyI6WyJnZXRFcnJvck9iamVjdEZvckNsaWVudCIsImVycm9yIiwiZW52Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBQ0E7O0FBTkE7Ozs7QUFRTyxTQUFTQSx1QkFBVCxDQUFpQ0MsS0FBakMsRUFBd0M7QUFDN0MsU0FBTyxzQ0FBeUJBLEtBQXpCLEVBQWdDQyxnQkFBUSxhQUF4QyxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCwgMjAxOSBDaGliQ2hhIENPTVBBTlkgTElNSVRFRFxuICpcbiAqL1xuXG5pbXBvcnQgeyBnZXRFcnJvck9iamVjdEZvckNsaWVudCBhcyBfZ2V0RXJyb3JPYmplY3RGb3JDbGllbnQgfSBmcm9tICdzZXJ2aWNlLWVycm9yL2hlbHBlcnMnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yT2JqZWN0Rm9yQ2xpZW50KGVycm9yKSB7XG4gIHJldHVybiBfZ2V0RXJyb3JPYmplY3RGb3JDbGllbnQoZXJyb3IsIGVudiA9PT0gJ2RldmVsb3BtZW50Jyk7XG59Il19