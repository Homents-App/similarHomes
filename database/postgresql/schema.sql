
CREATE DATABASE IF NOT EXISTS similarhomes;

\c similarhomes;

CREATE TABLE IF NOT EXISTS homes (
  unique_id INT PRIMARY KEY,
  streetAddress varchar(255),
  state varchar(255),
  zipcode varchar(255),
  neighborhood varchar(255),
  city varchar(255),
  bedrooms INT NOT NULL,
  bathrooms INT NOT NULL,
  sqft INT NOT NULL,
  publishDate varchar(255),
  price varchar(255),
  priceChange varchar(255),
  onFavorites BOOLEAN,
  img_url varchar(255)
);

COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes0.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes1.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes2.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes3.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes4.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes5.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes6.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes7.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes8.csv' WITH CSV HEADER;
COPY homes FROM '/Users/ZachMcCain/HackReactor/coding/sdc/similarHomes/homes9.csv' WITH CSV HEADER;


/*  Execute this file from the command line by typing:
 *    psql -U postgres < database/postgresql/schema.sql
 *  to create the database and the tables.*/

