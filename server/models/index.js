var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (error, results, fields) => {
        console.log(results);
        callback(results);
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

