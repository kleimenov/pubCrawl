import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { OperationHours } from "../components/OperationHours";
import { RemoveButton } from "../components/RemoveButton";

export const BarsPage = () => {
  const { loading, error, request } = useHttp();
  const [response, setResponse] = useState([]);
  const [removeId, setRemove] = useState(null);
  const auth = useContext(AuthContext);

  const userId = auth.userId;
  console.log("state old", removeId);

  useEffect(
    () => {
      getUsersBars();
      //setRemove(null);
    },
    [removeId],
    response
  );

  const getUsersBars = async () => {
    if (removeId) {
      try {
        const newData = await request("/api/remove/remove", "POST", {
          removeId,
          userId,
        });
        //setResponse(newData);
        setRemove(null);
        console.log(newData);
      } catch (e) {}
    } else {
      try {
        const allData = await request("/api/barslist/userbars", "POST", {
          userId,
        });
        setResponse(allData);
        console.log("invoked update of list of bars");
      } catch (e) {}
    }
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
              <RemoveButton barId={item._id} setRemove={setRemove} />
            </div>
            <OperationHours key={index} item={item.operation_hours} />
          </li>
        ))}
      </ul>
    </div>
  );
};
