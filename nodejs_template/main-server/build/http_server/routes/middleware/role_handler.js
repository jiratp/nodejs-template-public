"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.holderOnlyHandler = holderOnlyHandler;
exports.issuerOnlyHandler = issuerOnlyHandler;
exports.recipientOnlyHandler = recipientOnlyHandler;

var _node = require("../../../node");

/**
 * Copyright (c) 2018, 2019 ChibCha COMPANY LIMITED
 *
 */
function holderOnlyHandler(req, res, next) {
  if (_node.role !== 'holder') {
    res.status(404).end();
    return;
  }

  next();
}

function issuerOnlyHandler(req, res, next) {
  if (_node.role !== 'issuer') {
    res.status(404).end();
    return;
  }

  next();
}

function recipientOnlyHandler(req, res, next) {
  if (_node.role !== 'recipient') {
    res.status(404).end();
    return;
  }

  next();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwX3NlcnZlci9yb3V0ZXMvbWlkZGxld2FyZS9yb2xlX2hhbmRsZXIuanMiXSwibmFtZXMiOlsiaG9sZGVyT25seUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwicm9sZSIsInN0YXR1cyIsImVuZCIsImlzc3Vlck9ubHlIYW5kbGVyIiwicmVjaXBpZW50T25seUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBOztBQUpBOzs7O0FBTU8sU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDQyxHQUFoQyxFQUFxQ0MsSUFBckMsRUFBMkM7QUFDaEQsTUFBSUMsZUFBUyxRQUFiLEVBQXVCO0FBQ3JCRixJQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNBO0FBQ0Q7O0FBQ0RILEVBQUFBLElBQUk7QUFDTDs7QUFFTSxTQUFTSSxpQkFBVCxDQUEyQk4sR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQXFDQyxJQUFyQyxFQUEyQztBQUNoRCxNQUFJQyxlQUFTLFFBQWIsRUFBdUI7QUFDckJGLElBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0E7QUFDRDs7QUFDREgsRUFBQUEsSUFBSTtBQUNMOztBQUVNLFNBQVNLLG9CQUFULENBQThCUCxHQUE5QixFQUFtQ0MsR0FBbkMsRUFBd0NDLElBQXhDLEVBQThDO0FBQ25ELE1BQUlDLGVBQVMsV0FBYixFQUEwQjtBQUN4QkYsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDQTtBQUNEOztBQUNESCxFQUFBQSxJQUFJO0FBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCwgMjAxOSBDaGliQ2hhIENPTVBBTlkgTElNSVRFRFxuICpcbiAqL1xuaW1wb3J0IHsgcm9sZSB9IGZyb20gJy4uLy4uLy4uL25vZGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9sZGVyT25seUhhbmRsZXIocmVxLCByZXMsIG5leHQpIHtcbiAgaWYgKHJvbGUgIT09ICdob2xkZXInKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuICBuZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc3N1ZXJPbmx5SGFuZGxlcihyZXEsIHJlcywgbmV4dCkge1xuICBpZiAocm9sZSAhPT0gJ2lzc3VlcicpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG5leHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2lwaWVudE9ubHlIYW5kbGVyKHJlcSwgcmVzLCBuZXh0KSB7XG4gIGlmIChyb2xlICE9PSAncmVjaXBpZW50Jykge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbmV4dCgpO1xufSJdfQ==