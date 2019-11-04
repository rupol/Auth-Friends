import React, { useState } from "react";
import api from "../utils/api";

const FriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = event => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    api()
      .post("/friends", newFriend)
      .then(res => {
        console.log(res);
      });
    props.history.push("/friends");
  };

  return (
    <div>
      <h2>Add a New Friend!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="formName" hidden>
          Name:
        </label>
        <input
          type="text"
          id="formName"
          name="name"
          placeholder="Name"
          value={newFriend.name}
          onChange={handleChanges}
        />
        <label htmlFor="formAge" hidden>
          Age:
        </label>
        <input
          type="number"
          id="formAge"
          name="age"
          placeholder="Age"
          value={newFriend.age}
          onChange={handleChanges}
        />
        <label htmlFor="formEmail" hidden>
          Email:
        </label>
        <input
          type="email"
          id="formEmail"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={handleChanges}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
