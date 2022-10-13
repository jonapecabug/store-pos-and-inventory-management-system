const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()); //req.body

//routes//

//create a product
app.post("/products", async(req, res) => {
    try {
        const {product_name, product_description, product_price, product_stocks} = req.body;
        const newProduct = await pool.query(
        "INSERT INTO products(product_name, product_description, product_price, product_stocks) VALUES($1,$2,$3,$4) RETURNING *",[product_name, product_description, product_price, product_stocks]);
        res.json(newProduct.rows[0]);  
    } catch (error) {
        console.error(error.message);  
    }
});

//get all products
app.get("/products", async(req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products");
        res.json(allProducts.rows)  
    } catch (error) {
        console.error(error.message);  
    }
});

//get 1 product
app.get("/products/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const product = await pool.query("SELECT * FROM products WHERE product_id = $1", [id]);
      
        res.json(product.rows[0]);
    } catch (error) {
        console.error(error.message);  
    }
});

//update a product
app.put("/products/:id", async(req,res) => {
    try {
        const { product_id } = req.params;
        const { product_name, product_description, product_price, product_stocks } = req.body;
        const updateProduct = await pool.query(
            "UPDATE products SET product_name = $1, product_description = $2, product_price = $3, product_stocks = $4 WHERE product_id = $5",
            [product_name, product_description, product_price, product_stocks, product_id]
        );  
        res.json("Product is updated!");
    } catch (error) {
        console.error(error.message);  
    }
})

//delete a product
app.delete("/products/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const deleteProduct = await pool.query("DELETE FROM products WHERE product_id = $1",[id]);
        res.json("Product is deleted.");
    } catch (error) {
        console.log(error.message)
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});