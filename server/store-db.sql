CREATE DATABASE sari_sari_store;

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_name varchar(50) NOT NULL,
    product_description varchar(255) NOT NULL,
    product_price numeric NOT NULL,
    product_stocks int NOT NULL
);

ALTER TABLE products
ALTER COLUMN product_price SET DATA TYPE numeric;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
); 

INSERT INTO users(username, user_email, user_password) 
VALUES('JonapeCabug_v1','cabugjonape@gmail.com','password');