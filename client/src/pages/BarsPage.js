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
      <h3 className="text-secondary">BarsPage cool</h3>
      <ul className="list-unstyled">
        {response.map((item) => (
          <li className="my-2" key={item._id}>
            <h5 className="text-secondary ml-2 pt-2">
              {item.barName}
              <div>
                <ul>
                  {
                    Object.keys(item.operation_hours).map((key) => (
                      <li className="h6">
                        {key} : {item.operation_hours[key]}
                      </li>
                    ))
                    
                  }
                </ul>
              </div>
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};
//{item.operation_hours}