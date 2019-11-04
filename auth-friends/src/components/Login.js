import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState();

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
