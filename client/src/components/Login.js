import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
  });

  const { user_email, user_password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { user_email, user_password };

      const response = await fetch("http://localhost:5000/auth/login", {
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
    <div className="container w-25 p-5 my-5 border bg-gradient">
      <form onSubmit={onSubmitForm}>
        <h1 className="text-center">Login</h1>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="form-control my-3"
          value={user_email || ""}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="user_password"
          placeholder="Password"
          className="form-control my-3"
          value={user_password || ""}
          onChange={(e) => onChange(e)}
        />
        <div className="d-grid gap-2 my-3">
          <button className="btn btn-success">log-in</button>
        </div>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
