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

ALTER TABLE products
ADD COLUMN category VARCHAR;

UPDATE products
SET category = 'alcoholic drinks'
WHERE product_id = 9;

UPDATE products
SET category = 'cold drinks'
WHERE product_id = 3;

UPDATE products
SET category = 'softdrinks'
WHERE product_id = 13;

UPDATE products
SET category = 'softdrinks'
WHERE product_id = 12;

ALTER TABLE products
ALTER COLUMN category SET NOT NULL;