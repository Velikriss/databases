var SQL = require('sequelize');

var db = new SQL('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


var Message = db.define('message', {
  text: SQL.STRING,
  roomname: SQL.STRING
});

var User = db.define('user', {
  name: SQL.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;
