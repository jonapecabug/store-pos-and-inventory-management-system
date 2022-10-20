const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

//registering

router.post("/register", validInfo, async (req, res) => {
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

    //5. generate jwt token
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

// log-in route

router.post("/login", validInfo, async (req, res) => {
  try {
    //1. destructure the req.body

    const { user_email, user_password } = req.body;

    //2. check if user doesn't exist (if not throw an error)

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      user_email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("email or password is incorrect.");
    }

    //3. check if password matches the database password

    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("email or password is incorrect.");
    }

    //4. give the jwt token

    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

// private routes

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

module.exports = router;
