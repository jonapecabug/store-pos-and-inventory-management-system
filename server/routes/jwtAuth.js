const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

//registering

router.post("/register", async (req, res) => {
  try {
    //1. dsestructure the req.body (name, email, password)
    const { username, user_email, user_password } = req.body;
    //2. check if user exists (if use exists row error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      user_email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists.");
    }
    //3. Bcrypt user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(user_password, salt);

    //4. enter the new user inside the database
    const newUser = await pool.query(
      "INSERT INTO users(username, user_email, user_password) VALUES($1, $2, $3) RETURNING *",
      [username, user_email, bcryptPassword]
    );

    res.json(newUser.rows[0]);
    //5. generate jwt token
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

module.exports = router;
