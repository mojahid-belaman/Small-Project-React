import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };
  const changeUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addSubmit = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <div>
      {error && <ErrorModal error={error} onConfirm={errorHandler} />}
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
    </div>
  );
};

export default AddUser;
