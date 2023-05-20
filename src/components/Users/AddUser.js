import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser() {
  const addSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={'conatiner mx-auto my-8 p-4 w-[90%] max-w-2xl'}>
      <form onSubmit={addSubmit}>
        <label htmlFor="username" className="block font-bold mb-2">Username</label>
        <input name="username" type="text" className="block mb-2 w-full rounded-sm border focus:border-0 border-gray-300 p-1 outline-none focus:outline-gray-500" />
        <label htmlFor="age" className="block font-bold mb-2">Age (Years)</label>
        <input name="age" type="number" className="block mb-2 w-full rounded-sm border focus:border-0 border-gray-300 p-1 outline-none focus:outline-gray-500 " />
        <Button>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
