import React from "react";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-10 bg-black/75">
      <Card
        className={
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-1/4 overflow-hidden"
        }
      >
        <header className="bg-[#4f005f] px-2 md:px-5 py-3">
          <h2 className="m-0 text-base md:text-xl text-white">
            {props.error.title}
          </h2>
        </header>
        <div className="py-10 px-2 md:px-5 text-center md:text-left">
          <p>{props.error.message}</p>
        </div>
        <footer className="text-right py-3 pr-3">
          <Button onClick={props.onHideError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;