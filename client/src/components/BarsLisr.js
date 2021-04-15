import React, { useContext } from "react";
import { useHttp } from "../hooks/http.hook";

export const Bar = () => {
  const { loading, error, request } = useHttp();
};
