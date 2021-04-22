import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { OperationHours } from "../components/OperationHours";
import { RemoveButton } from "../components/RemoveButton";

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

  return (
    <div>
      <h3 className="text-secondary">BarsPage cool</h3>
      <ul className="list-unstyled">
        {response.map((item, index) => (
          <li className="my-2" key={item._id}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="text-secondary ml-2 pt-2">
                {item.barName} / {item.district}
              </h5>
              <RemoveButton barId={item._id} />
            </div>
            <OperationHours key={index} item={item.operation_hours} />
          </li>
        ))}
      </ul>
    </div>
  );
};
