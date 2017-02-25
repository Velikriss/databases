var SQL = require('sequelize');

var db = new SQL('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db.Users = db.define('users', {
  name: SQL.STRING
});

db.Messages = db.define('messages', {
  userid: SQL.INTEGER,
  text: SQL.STRING,
  roomname: SQL.STRING
});

//implement syncs
db.Messages.sync()
  .catch(error => {
    console.log(error);
    db.close();
  });

module.exports = db;

