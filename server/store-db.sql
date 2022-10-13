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