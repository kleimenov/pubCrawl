import React from "react";

export const RemoveButton = ({ barId, setRemove }) => {
  
  const clickHandler = () => {
    
    setRemove(barId);
  };
  return (
    <button
      onClick={clickHandler}
      className="btn btn-secondary text-white px-1 mr-5"
    >
      Remove bar
    </button>
  );
};
