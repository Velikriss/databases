CREATE DATABASE chat;

USE chat;

/* CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255),
  PRIMARY KEY (id)
); 

CREATE TABLE messages (
  id INT AUTO_INCREMENT NOT NULL,
  message TEXT,
  id_User INT,
  id_Room INT,
  created DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  FOREIGN KEY(id_User) REFERENCES users(id),
  FOREIGN KEY(id_Room) REFERENCES rooms(id)
); */

CREATE TABLE messages (
  id INT AUTO_INCREMENT NOT NULL,
  message TEXT,
  user VARCHAR(255),
  room VARCHAR(255),
  created DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

