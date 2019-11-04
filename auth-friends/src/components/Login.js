import React, { useState } from "react";

import api from "../utils/api";

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    api()
      .post("/login", user)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        setIsLoading(false);
        props.history.push("/friends");
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="main-section">
      <h1>FriendsList</h1>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        {isLoading && <h2>...logging in...</h2>}
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
    </div>
  );
}

export default Login;
