import React from "react";

const Button = (props) => {
  return (
    <button
      type="submit"
      className="px-2 py-1 mt-5 rounded-sm bg-[#4a148c] transition-colors  hover:bg-[#6a1b9a] text-white"
    >
      {props.children}
    </button>
  );
};

export default Button;
