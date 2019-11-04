import "./App.css";
import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";

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
      <nav>
        <p className="logo">FriendsList</p>
        {!loggedIn && (
          <NavLink exact to="/login">
            Log In
          </NavLink>
        )}
        {loggedIn && (
          <NavLink exact to="/friends">
            My Friends
          </NavLink>
        )}
        {loggedIn && (
          <NavLink exact to="/addfriend">
            Add a Friend
          </NavLink>
        )}
        {loggedIn && (
          <NavLink exact to="/logout">
            Log Out
          </NavLink>
        )}
      </nav>

      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <PrivateRoute exact path="/addfriend" component={FriendForm} />
      <PrivateRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(App);
