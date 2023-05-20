import React from "react";

function AddUser() {
  const addSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addSubmit}>
      <label htmlFor="username">Username</label>
      <input name="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input name="age" type="number" />
    </form>
  );
}

export default AddUser;
