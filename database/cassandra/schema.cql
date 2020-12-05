CREATE KEYSPACE "similarhomes"
with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE similarhomes;

CREATE TABLE homes(
  unique_id INT PRIMARY KEY,
  streetAddress text,
  state text,
  zipcode text,
  neighborhood text,
  city text,
  bedrooms INT,
  bathrooms INT,
  sqft INT,
  publishDate text,
  price text,
  priceChange text,
  onFavorites BOOLEAN,
  img_url text
);





/*  Execute this file from the command line by typing:
 *    cqlsh -f
 *    source 'database/cassandra/schema.cql'
 *  to create the database and the tables.*/