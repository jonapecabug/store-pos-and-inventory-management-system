CREATE DATABASE sari_sari_store;

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_name varchar(50) NOT NULL,
    product_description varchar(255) NOT NULL,
    product_price numeric NOT NULL,
    product_stocks int NOT NULL
);

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    customer_name varchar(50) NOT NULL,
    customer_status VARCHAR(50) SET DEFAULT "Approved",
    purchase_num INT SET DEFAULT 0,
    credit_num INT SET DEFAULT 0,
);

CREATE TABLE customer_purchase(
    purchase_id SERIAL PRIMARY KEY,
    fk_customer_id INT FOREIGN KEY,
    purchase_date DATE NOT NULL,
    total_amount NUMERIC
    purchase_list 
)

CREATE TABLE purchase_list(
    purchaselist_id SERIAL PRIMARY KEY,
    fk_purchase_id INT FOREIGN KEY,
    purchase_description VARCHAR(255),
    product_quantity INT,
    subtotal NUMERIC,   
)

CREATE TABLE customer_credit(
    credit_id SERIAL PRIMARY KEY,
    customer_id INT,
    credit_date DATE NOT NULL,
    credit_description VARCHAR(255),
    product_quantity INT,
    subtotal NUMERIC,
    total_amount NUMERIC
)


ALTER TABLE products
ALTER COLUMN product_price SET DATA TYPE numeric;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
); 

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
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