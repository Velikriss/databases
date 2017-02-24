var models = require('../models');

module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get(results => {
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
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

