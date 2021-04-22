import React from "react";

export const OperationHours = () => {
  return (
    <div>
      <ul className="mt-2">
        {Object.keys(item.operation_hours).map((key, index) => (
          <li className="h6" key={index}>
            {key} : {item.operation_hours[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};
