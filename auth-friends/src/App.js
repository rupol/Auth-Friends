import "./App.css";
import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import { getToken } from "./utils/api";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import Logout from "./components/Logout";

function App() {
  const loggedIn = getToken();

  return (
    <div className="App">
      <h1>FriendsList</h1>
      <nav>
        {!loggedIn && <Link to="/login">Log In</Link>}
        {loggedIn && <Link to="/friends">My Friends</Link>}
        {loggedIn && <Link to="/addfriend">Add a Friend</Link>}
        {loggedIn && <Link to="/logout">Log Out</Link>}
      </nav>

      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <PrivateRoute exact path="/addfriend" component={FriendForm} />
      <PrivateRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(App);
