'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

  lastId += 1;
  return '' + prefix + lastId;
};

var lastId = 0;