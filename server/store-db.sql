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
    customer_name varchar(50) NOT NULL
);

INSERT INTO customer(customer_name) VALUES('Jonape Cabug');

INSERT INTO customer(customer_name,purchase_num,credit_num) VALUES('Roseanne Park',500.00,1000.00);

ALTER TABLE customer
ADD COLUMN customer_status VARCHAR(50),
ADD COLUMN purchase_num INT,
ADD COLUMN credit_num INT;

ALTER TABLE customer ALTER COLUMN credit_num SET DEFAULT 0;

CREATE TABLE customer_purchase(
    purchase_id SERIAL PRIMARY KEY,
    customer_id INT,
    purchase_date DATE NOT NULL,
    purchase_description VARCHAR(255),
    product_quantity INT,
    subtotal NUMERIC,
    total_amount NUMERIC
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