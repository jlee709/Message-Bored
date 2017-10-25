--sql start NormalCars
--creating db

CREATE USER user;
CREATE DATABASE message_bored WITH OWNER bored;


CREATE TABLE users (
  id  NOT NULL primary key,
  name character varying(125) NOT NULL,
  createdAt timestamp  NOT NULL  DEFAULT current_timestamp
  updatedAT timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp
);


CREATE TABLE messages (
  id serial primary key,
  body character varying(1025) NOT NULL
  created_at timestamp  NOT NULL  DEFAULT current_timestamp
  updated_at timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp
  author_id integer NOT NULL
  topic_id integer NOT NULL 
  );

CREATE TABLE topics (
  id serial primary key,
  name character varying(225) NOT NULL
  createdAt timestamp  NOT NULL  DEFAULT current_timestamp
  updatedAt timestamp NOT NULL DEFAULT current_timestamp
  created_by integer NOT NULL 
);
