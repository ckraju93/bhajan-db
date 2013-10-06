var expect = require('chai').expect;
var moment = require('moment');
var uuid = require('node-uuid');

var Bhajan = require('../models/Bhajan');

describe('Bhajan create', function () {
});

describe('Bhajan update', function () {
});

describe('Bhajan findOne', function (done) {
    var unique_title_1 = uuid.v4();
    var unique_title_2 = uuid.v4();

    before(function () {
        // insert rows with both ids
    });

    it('should be a function.', function (next) {
        expect(Bhajan.findOne).to.be.a('function');
        next();
    });

    it('should not find more than one result.', function (next) {
        // look up only one id
        next();
    });

    it('should fail gracefully if there are no results.', function (next) {
        Bhajan.findOne({title: 'This bhajan doesn\'t exist'}, function (error, result) {
            // throw an error or return empty result??
            next();
        })
    });

    after(function () {
        // delete both inserted rows.
        done();
    });
});

describe('Bhajan search', function (done) {
    var unique_title = uuid.v4();

    before(function () {
        // insert 5 bhajans to db to search on.
        // should have a unique string as title (node-uuid)
    });

    it('should be a function.', function (next) {
        expect(Bhajan.search).to.be.a('function');
        next();
    });

    it('should return an array of objects.', function (next) {
        Bhajan.search({}, function (error, result) {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(5);
            next();
        });
    });

    it('should return an empty array if no search results.', function (next) {
        Bhajan.search({title: 'This bhajan doesn\'t exist'}, function (error, result) {
            expect(result).to.be.an('array');
            expect(result.length).to.equal(0);
        })
    });

    after(function () {
        // delete the bhajans with the uuid as title.
        done();
    });

});
