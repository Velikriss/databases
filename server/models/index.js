var db = require('../db');
var mysql = require('mysql');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', callback);
    }, // a function which produces all the messages
    post: function (parameters, callback) {
      db.query(
        mysql.format(
          'INSERT INTO messages (message, user, room) VALUES (?, ?, ?)',
          [parameters.message, parameters.user, parameters.room]
        ),
        callback
      );
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

