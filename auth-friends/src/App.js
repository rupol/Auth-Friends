import "./App.css";
import React from "react";
import { Link, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
