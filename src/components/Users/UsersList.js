import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
  let content;
  if (props.users.length > 0)
    content = (
      <ul>
        {props.users.map((user) => (
          <li
            key={user.id}
            className="p-2 mb-2 last:mb-0 rounded-sm border border-gray-300"
          >
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    );
  else content = <p className="text-center">No Users Found!</p>;
  return (
    <Card className={"my-8 p-4 w-[90%] max-w-2xl"}>
      <ul>
        {content}
      </ul>
    </Card>
  );
};

export default UsersList;
