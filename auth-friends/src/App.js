import "./App.css";
import React from "react";
import { Link, Route } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <h1>FriendsList</h1>
      <nav>
        <Link to="/login">Log In</Link>
        <Link to="/friends">My Friends</Link>
      </nav>

      <Route exact path="/login" component={Login} />
      <Route exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
