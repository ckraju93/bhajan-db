var moment = require('moment');
var mongodb = require('mongodb');
var _ = require('underscore');

var mongoServer = 'localhost';
var environment = 'development';

var serverConnect = function (collection_name, callback) {
    if (!_.isFunction(callback)) {
        return callback(new Error('callback is not a function.'));
    } else {
        var server = new mongodb.Server(mongoServer, 27017, {auto_reconnect: true, safe: true});
        new mongodb.Db(environment, server, {safe: true}).open(function (error, client) {
            if (error) throw error;

            var collection = new mongodb.Collection(client, collection_name);
            callback(client, collection);
        });
    }
};

module.exports = {
    create: function (data, callback) {

    },
    update: function (data, callback) {

    },
    findOne: function (data, callback) {

    },
    search: function (data, callback) {

    },
    serverConnect: serverConnect
}
