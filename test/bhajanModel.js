var expect = require('chai').expect;
var moment = require('moment');
var uuid = require('node-uuid');

var Bhajan = require('../models/Bhajan');

describe('Bhajan create', function () {
});

describe('Bhajan update', function () {
});

describe('Bhajan findOne', function () {
    it('should be a function.', function () {
        expect(Bhajan.findOne).to.be.a('function');
    });

    it('should not find more than one result.', function () {

    });

    it('should fail gracefully if there are no results.', function () {
        Bhajan.findOne({title: 'This bhajan doesn\'t exist'}, function (error, result) {
            expect()
        })
    });
});

describe('Bhajan search', function () {
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
    });

});
