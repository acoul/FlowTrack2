/* jshint unused: false, expr: true*/
'use strict';

var IndexTracking = require('../../lib/model/IndexTracking');
var GetLogger = require('../../lib/util/GetLogger');
var logger = new GetLogger('quiet');
var config = require('config');
var moment = require('moment');

var es = require('elasticsearch');
var chai = require('chai');
var expect = chai.expect;

var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);



describe('IndexTracking', function () {
    describe('getIndexName', function () {
      it('should generate the correct index name', function () {

          var indexTrack = new IndexTracking(es, logger, config);
          var indexID = moment().format('MM-DD-YYYY');
          var indexName = config.Application.index_name;

          var fullIndexName = indexName + '.' + indexID;

          expect(fullIndexName).to.equal(indexTrack.getIndexName());
      });
  });
});
