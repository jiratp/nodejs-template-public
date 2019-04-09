"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _validation = require("../middleware/validation");

var _role_handler = require("../middleware/role_handler");

var holder = _interopRequireWildcard(require("../../../core/holder"));

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
const router = _express.default.Router();

router.use(_role_handler.holderOnlyHandler);
router.get('/service', _validation.validateBody, async (req, res, next) => {
  try {
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwX3NlcnZlci9yb3V0ZXMvdjEvaG9sZGVyLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJob2xkZXJPbmx5SGFuZGxlciIsImdldCIsInZhbGlkYXRlQm9keSIsInJlcSIsInJlcyIsIm5leHQiLCJzdGF0dXMiLCJlbmQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFSQTs7OztBQVVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQVdDLCtCQUFYO0FBRUFKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQVgsRUFBdUJDLHdCQUF2QixFQUFxQyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQzdELE1BQUk7QUFHRkQsSUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRCxHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RILElBQUFBLElBQUksQ0FBQ0csS0FBRCxDQUFKO0FBQ0Q7QUFDRixDQVJEO2VBVWVaLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCwgMjAxOSBDaGliQ2hhIENPTVBBTlkgTElNSVRFRFxuICpcbiAqL1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCB7IHZhbGlkYXRlQm9keSB9IGZyb20gJy4uL21pZGRsZXdhcmUvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBob2xkZXJPbmx5SGFuZGxlciB9IGZyb20gJy4uL21pZGRsZXdhcmUvcm9sZV9oYW5kbGVyJztcbmltcG9ydCAqIGFzIGhvbGRlciBmcm9tICcuLi8uLi8uLi9jb3JlL2hvbGRlcic7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci51c2UoaG9sZGVyT25seUhhbmRsZXIpO1xuXG5yb3V0ZXIuZ2V0KCcvc2VydmljZScsIHZhbGlkYXRlQm9keSwgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgXG5cbiAgICByZXMuc3RhdHVzKDIwNCkuZW5kKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcik7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19