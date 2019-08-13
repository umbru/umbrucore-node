'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export umbrucore-lib', function() {
    var umbrucore = require('../');
    should.exist(umbrucore.lib);
    should.exist(umbrucore.lib.Transaction);
    should.exist(umbrucore.lib.Block);
  });
});
