import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { link } from "fs";

export const BarsPage = () => {
  const { loading, error, request } = useHttp();
  const [response, setResponse] = useState([]);
  const auth = useContext(AuthContext);

  const userId = auth.userId;

  useEffect(() => {
    getUsersBars();
  }, []);

  const getUsersBars = async () => {
    try {
      const allData = await request("/api/barslist/userbars", "POST", {
        userId,
      });
      setResponse(allData);
    } catch (e) {}
  };

  console.log(response);

  return (
    <div>
      <h3 >BarsPage cool</h3>
      <ul className="list-unstyled">
        {response.map((item) => (
          <li className="my-2" key={item._id}>
            {item.barName}
          </li>
        ))}
      </ul>
    </div>
  );
};
