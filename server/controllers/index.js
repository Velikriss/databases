var models = require('../models');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get((error, results, fields) => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        
        var messages = results.map(row => (
          {
            objectId: row.id,
            username: row.user,
            text: row.message,
            roomname: row.room,
            createdAt: row.created
          }
        ));

        response.end(JSON.stringify({results: messages}));
      });

    }, // a function which handles a get request for all messages
    post: function (request, response) {
      var parameters = {
        message: request.body.text,
        user: request.body.username,
        room: request.body.roomname
      };
      models.messages.post( parameters, (error, results, fields) => {
        response.writeHead(201, {'Content-Type': 'application/json'});
        response.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

