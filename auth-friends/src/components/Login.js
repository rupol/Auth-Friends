import React from "react";

function Login(props) {
  return (
    <form>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
    </form>
  );
}

export default Login;
