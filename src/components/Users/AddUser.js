import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  
  const changeUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  }
  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  const addSubmit = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return ;
    }
    if (+enteredAge < 0) {
        return ;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  return (
    <Card className={"conatiner mx-auto my-8 p-4 w-[90%] max-w-2xl"}>
      <form onSubmit={addSubmit}>
        <label htmlFor="username" className="block font-bold mb-2">
          Username
        </label>
        <input
          name="username"
          type="text"
          className="block mb-2 w-full rounded-sm border focus:border-0 border-gray-300 p-1 outline-none focus:outline-gray-500"
          value={enteredUsername}
          onChange={changeUsernameHandler}
        />
        <label htmlFor="age" className="block font-bold mb-2">
          Age (Years)
        </label>
        <input
          name="age"
          type="number"
          className="block mb-2 w-full rounded-sm border focus:border-0 border-gray-300 p-1 outline-none focus:outline-gray-500 "
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
