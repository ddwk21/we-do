DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

USE DATABASE user_db;

CREATE TABLE `Users` (
  id INTEGER NOT NULL AUTO_INCREMENT
  username VARCHAR(30)
  zip_code INTEGER NOT NULL
  interests VARCHAR(100)
  PRIMARY KEY(id)
)

CREATE TABLE `Events` (
  id INTEGER NOT NULL AUTO_INCREMENT
  name VARCHAR(30)
  number_of_participants INTEGER NOT NULL
  max_participants INTEGER NOT NULL
  time_and_date INTEGER NOT NULL
  location VARCHAR(100)
  description VARCHAR(100)
  user_id VARCHAR(30)
  PRIMARY KEY(id)
  FOREIGN KEY(user_id)
  REFERENCES Users(id)
  ON DELETE SET NULL 
)

CREATE TABLE `Messages` (
  sender_id INTERGER NOT NULL
  event_id INTEGER NOT NULL
  time VARCHAR(30)
  content VARCHAR(200)
  id INTEGER NOT NULL
  FOREIGN KEY(sender_id)
  REFERENCES Users(id)
  FOREIGN KEY(event_id)
  REFERENCES Events(id)
)  
  
