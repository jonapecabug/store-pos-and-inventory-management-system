import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
    username: "",
  });

  const { user_email, user_password, username } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { user_email, user_password, username };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);

      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container w-50 p-5 my-5 border bg-gradient">
        <h1 className="text-center">Register</h1>
        <form onSubmit={onSubmitForm}>
          <label className="">Email address:</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter E-mail"
            className="form-control my-3"
            value={user_email || ""}
            onChange={(e) => onChange(e)}
          />
          <label>Password:</label>
          <input
            type="password"
            name="user_password"
            placeholder="Enter your password"
            className="form-control my-3"
            value={user_password || ""}
            onChange={(e) => onChange(e)}
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="form-control my-3"
            value={username || ""}
            onChange={(e) => onChange(e)}
          />
          <small>We'll never share your information with anyone else.</small>
          <div className="d-grid gap-2 my-3">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
        <Link to="/login">Log-in</Link>
      </div>
    </Fragment>
  );
};

export default Register;
