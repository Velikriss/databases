var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      return db.Messages.findAll();
    
    }, // a function which produces all the messages
    post: function (parameters) {

      //look up username
        //if they don't exist
          //make them exist
        //promise their user id
      //post message with userid
      //respond with 201 code

    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function () {
      //findAll users in users table
      //respond with userid with their respective usernames
    },
    post: function (name) {
      //look up username
        //if they don't exist
          //make them exist
          //respond with 201 created
        //if they do exist
          //respond with 409 conflict
    }
  }
};



/*messages: {
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
  }*/