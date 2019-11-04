import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import api from "../utils/api";

import Friend from "./Friend";

function FriendsList(props) {
  const [friends, setFriends] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api()
      .get("/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = event => {
    event.preventDefault();
    console.log(event.target.value);
    api()
      .delete(`/friends/${event.target.value}`)
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleEdit = event => {
    event.preventDefault();
  };

  return (
    <div className="main-section">
      <h1>My Friends</h1>
      {!isLoading && friends.length ? (
        <div>
          {friends.map(friend => (
            <Friend
              key={friend.id}
              friend={friend}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      ) : !isLoading && !friends.length ? (
        <h2>
          <NavLink exact to="/addfriend">
            Add a Friend
          </NavLink>{" "}
          to your FriendsList!
        </h2>
      ) : (
        <h2>...loading friends...</h2>
      )}
    </div>
  );
}

export default FriendsList;
