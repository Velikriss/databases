var db = require('../db');

module.exports = {
  messages: {
    get: function (request, response) {
      db.Message.findAll({order: 'createdAt DESC', include: [db.User]})
        .then(results => {
          response.json({results: results});
        });
    }, // a function which handles a get request for all messages
    
    post: function (request, response) {
      db.User.findOrCreate({where: {name: request.body.username}})
        .then((results) => {
          // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>\nuser result', results);
          var parameters = {
            'text': request.body.text,
            'userId': results[0].dataValues.id,
            'roomname': request.body.roomname
          };
          db.Message.create(parameters)
          .then(results => {
            response.json({results:[]});
          });
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (request, response) {
      db.User.findAll()
        .then(results => {
          response.json({results: results});
        });
    },
    post: function (request, response) {
      db.User.create({name: request.body.username})
        .then(results => {
          response.sendStatus(201);
        });
    }
  }
};


