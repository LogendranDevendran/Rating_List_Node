var MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Mongo DB State value stored locally
var state = {
  db: null
};

// DB Name to connect with and fetch the data
const dbName = "test";

// To Connect with MongoDB, MongoDB URL has to be passed to this method and done method gets called once the process got completed
exports.connect = function(url, done) {
  if (state.db) return done();
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    // Updates local state db with the DB fetched from the Mongo Client
    state.db = client.db(dbName);
  });
};

// Returns Mongo DB reference
exports.get = function() {
  return state.db;
};

// To Close the MongoDB when the process done.
exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
