import { useState } from "react";
import Button from "./components/button";
import "./index.css";
import UserItems from "./components/userItems";

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState('');
  const [ageValid, setAgeValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
    setUsernameValid(false)
  }
  const ageHandler = (e) => {
    setAge(e.target.value)
    setAgeValid(false);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (username === '' && age === '') {
      setUsernameValid(true);
      setAgeValid(true);
    }
    else if (username === "") {
      setUsernameValid(true);
      return;
    }
    else if (age === "") {
      setAgeValid(true);
      return
    }
    else {
      const ageNum = +age;
      setData(prev => [{id: Math.random(), username: username, age: ageNum}, ...prev])
    }

  };
  console.log(data);
  let content;
  if (data.length > 0) content = <UserItems data={data} />;
  else content = <h2>Not Found Users</h2>;
  return (
    <div className="h-screen py-10 bg-[#212121]">
      <div className="container mx-auto mb-5 p-5 w-1/4 bg-white rounded-md">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col first:mb-5">
            <label
              htmlFor={"username"}
              className={`mb-2 ${usernameValid ? "text-red-600" : "text-black"}`}
            >
              Username
            </label>
            <input
              type="text"
              name={"username"}
              value={username}
              onChange={usernameHandler}
              className={`px-2 py-1 rounded-sm border border-gray-300 outline-none ${
                usernameValid ? "border-red-600" : "border-gray-300"
              } focus:outline-gray-500 focus:border-0`}
            />
          </div>
          <div className="flex flex-col first:mb-5">
            <label
              htmlFor={"age"}
              className={`mb-2 ${ageValid ? "text-red-600" : "text-black"}`}
            >
              Age (Years)
            </label>
            <input
              type="number"
              name={"age"}
              min={0}
              max={100}
              value={age}
              onChange={ageHandler}
              className={`px-2 py-1 rounded-sm border border-gray-300 outline-none ${
                ageValid ? "border-red-600" : "border-gray-300"
              } focus:outline-gray-500 focus:border-0`}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </div>
      <div className="container mx-auto p-5 w-1/4 bg-white rounded-md">
        {content}
      </div>
    </div>
  );
}

export default App;
