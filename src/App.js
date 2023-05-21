import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./index.css";

const App = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const addUser = (uName, uAge) => {
    setDataUsers((prev) => {
      return [...prev, { id: Math.random(), name: uName, age: uAge }];
    });
  };
  return (
    <div className="h-screen py-10 bg-[#212121]">
      <AddUser onAddUser={addUser} />
      <UsersList users={dataUsers} />
    </div>
  );
};

export default App;
