var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages ORDER BY created DESC', callback);
    }, // a function which produces all the messages
    post: function (parameters, callback) {
      db.query(
        'INSERT INTO users (name) VALUES (?)',
        [parameters.name_User],
        (error, results, fields) => {
          if (error) {
            console.log('User exists');
          }
          db.query(
          'INSERT INTO messages (message, name_User, room) VALUES (?, ?, ?)',
          [parameters.message, parameters.name_User, parameters.room],
          (error, results, fields) => {
            callback(error, results, fields);
          });
        }
      );
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (callback) {
      db.query('SELECT * FROM users', callback);
    },
    post: function (name, callback) {
      db.query('INSERT INTO users (name) VALUES (?)', [name], callback);
    }
  }
};