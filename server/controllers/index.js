var models = require('../models');
var headers = {'Content-Type': 'application/json'};

module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get()
        .then(results => {
          response.writeHead(200, headers);
          response.end(JSON.stringify({results: results}));
        })
        .catch(error => {
          respond.writeHead(418, headers);
          respond.end(JSON.stringify(error));
        }); 
    }, // a function which handles a get request for all messages
    
    post: function (request, response) {
      var parameters = {
        'message': request.body.text,
        'name_User': request.body.username,
        'room': request.body.roomname
      };
      models.messages.post( parameters, (error, results, fields) => {
        response.writeHead(201, headers);
        response.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (request, response) {
      models.users.get((error, results, fields) => {
        response.writeHead(200, headers);
        response.end(JSON.stringify(results));
      });
    },
    post: function (request, response) {
      models.users.post(request.body.username, (error, results, fields) => {
        response.writeHead(201, headers);
        response.end();
      });
    }
  }
};

