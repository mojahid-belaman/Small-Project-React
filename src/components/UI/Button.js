import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className="border border-[#4f005f] bg-[#4f005f] hover:bg-[#741188] hover:border-[#741188] active:bg-[#741188] active:border-[#741188] focus:outline-none text-white py-1 px-4"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
