import React from "react";

const UserItems = (props) => {
  return (
    <ul className="">
      {props.data.map((el) => (
        <li key={el.id} className="p-2 mb-2 border border-gray-300 rounded-sm">{el.username + ` (${el.age} years old)`}</li>
      ))}
    </ul>
  );
};

export default UserItems;
