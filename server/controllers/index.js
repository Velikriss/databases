var models = require('../models');

module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get((error, results, fields) => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        
        var messages = results.map(row => (
          {
            objectId: row.id,
            username: row.name_User,
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
        'message': request.body.text,
        'name_User': request.body.username,
        'room': request.body.roomname
      };
      models.messages.post( parameters, (error, results, fields) => {
        response.writeHead(201, {'Content-Type': 'application/json'});
        response.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (request, response) {
      models.users.get((error, results, fields) => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(results));
      });
    },
    post: function (request, response) {
      models.users.post(request.body.username, (error, results, fields) => {
        response.writeHead(201, {'Content-Type': 'application/json'});
        response.end();
      });
    }
  }
};

