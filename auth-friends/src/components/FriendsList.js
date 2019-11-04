import React, { useState, useEffect } from "react";
import api from "../utils/api";

import Friend from "./Friend";

function FriendsList(props) {
  const [friends, setFriends] = useState({});

  useEffect(() => {
    api()
      .get("/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>My Friends</h2>
      {friends.length ? (
        <div>
          {friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </div>
      ) : (
        <p>Add a friend to your list!</p>
      )}
    </>
  );
}

export default FriendsList;
