import React, { useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const BarsPage = () => {
  const { loading, error, request } = useHttp();

  return (
    <div>
      <h3>BarsPage cool</h3>
    </div>
  );
};
