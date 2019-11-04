import React, { useState, useEffect } from "react";
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

  return (
    <>
      <h2>My Friends</h2>
      {!isLoading && friends.length ? (
        <div>
          {friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </div>
      ) : !isLoading && !friends.length ? (
        <p>Add a friend to your list!</p>
      ) : (
        <p>...loading friends...</p>
      )}
    </>
  );
}

export default FriendsList;
