import React from "react";

export const AddButton = () => {
  return (
    <Button
      onClick={() => {
        console.log("clicked");
      }}
      className="btn-primary p-0 px-1 py-0 ml-1"
      type="submit"
      disabled={loading}
    >
      +bar
    </Button>
  );
};
