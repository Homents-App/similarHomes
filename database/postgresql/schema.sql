
CREATE DATABASE similarhomes;

\c similarhomes;

CREATE TABLE IF NOT EXISTS homes (
  id SERIAL PRIMARY KEY,
  streetAddress varchar(255),
  state varchar(255),
  zipcode varchar(255),
  neighborhood varchar(255),
  city varchar(255),
  bedrooms INT NOT NULL,
  bathrooms INT NOT NULL,
  sqft INT NOT NULL,
  publishDate DATE,
  price varchar(255),
  priceChange varchar(255),
  onFavorites BOOLEAN,
  img_url varchar(255)
);


/*  Execute this file from the command line by typing:
 *    psql -U postgres < database/postgresql/schema.sql
 *  to create the database and the tables.*/

