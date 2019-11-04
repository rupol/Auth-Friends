import "./App.css";
import React from "react";
import { Link, Route } from "react-router-dom";

import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>FriendsList</h1>
      <nav>
        <Link to="/login">Log In</Link>
      </nav>

      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
