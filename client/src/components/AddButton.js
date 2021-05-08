import React from "react";
import { useHttp } from "../hooks/http.hook";
import { Button } from "react-bootstrap";

export const AddButton = () => {
  const { loading } = useHttp();
  return (
    <Button
      onClick={() => {
        console.log("clicked");
      }}
      className="btn-secondary p-0 px-1 py-0 ml-1"
      type="submit"
      disabled={loading}
    >
      +bar
    </Button>
  );
};
