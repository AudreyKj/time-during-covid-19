CREATE DATABASE timeduringcovid;

CREATE TABLE heart_likes(
  heart_id SERIAL primary key,
  created_at VARCHAR
);

CREATE TABLE time_perception(
    id SERIAL PRIMARY KEY,
    assertion BOOLEAN default NULL,
    negation BOOLEAN default NULL,
    created_at VARCHAR 
);

CREATE TABLE mood_representation(
    id SERIAL PRIMARY KEY,
    tornado BOOLEAN default NULL,
    rose BOOLEAN default NULL,
    seed BOOLEAN default NULL,
    created_at VARCHAR 
);

CREATE TABLE user_feeling(
    id SERIAL PRIMARY KEY,
    fear BOOLEAN default NULL,
    nostalgia BOOLEAN default NULL,
    normal BOOLEAN default NULL,
    created_at VARCHAR 
);