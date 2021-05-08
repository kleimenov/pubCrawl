import React from "react";

export const AddButton = () => {
  return (
    <button
      onClick={() => {
        console.log("add button was clicked");
      }}
      className="btn btn-secondary text-white px-1 mr-5"
    ></button>
  );
};
