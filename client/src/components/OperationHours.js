import React from "react";

export const OperationHours = (item) => {
  return (
    <div>
      <ul className="mt-2">
        {Object.keys(item.item).map((key, index) => (
          <li className="h6 text-secondary" key={index}>
            {key} : {item.item[key]} 
          </li>
        ))}
      </ul>
    </div>
  );
};
