'use strict';

var createError = require('errno').create;

var UmbrucoreNodeError = createError('UmbrucoreNodeError');

var RPCError = createError('RPCError', UmbrucoreNodeError);

module.exports = {
  Error: UmbrucoreNodeError,
  RPCError: RPCError
};
