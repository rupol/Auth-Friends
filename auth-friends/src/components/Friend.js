import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <h2>{props.friend.name}</h2>
      <h3>Age: {props.friend.age}</h3>
      <h3>Email: {props.friend.email}</h3>
      <div className="friend-buttons">
        <button
          onClick={props.handleEdit}
          value={props.friend.id}
          className="fas fa-edit fa-xlg edit-button"
        ></button>
        <button
          onClick={props.handleDelete}
          value={props.friend.id}
          className="fas fa-trash fa-xlg delete-button"
        ></button>
      </div>
    </div>
  );
};

export default Friend;
