import React from "react";
import { useHttp } from "../hooks/http.hook";
import { Button } from "react-bootstrap";

export const SearchResult = ({ data, isSearched }) => {
  const { loading } = useHttp();
  console.log(data);

  const returnHandler = () => {
    isSearched();
  };
  return (
    <div>
      <h4 className="text-secondary text-right">
        This is result of your search:
      </h4>
      <ul>
        {data.map((item) => (
          <li className="my-2">
            <div className="search-wrapper">
              <h5 className="text-secondary ml-2 pt-2">
                {item.name} / {item.type} / {item.district}
              </h5>
              <Button
                className="btn-primary p-0 px-1 py-0 ml-1"
                type="submit"
              >
                +bar
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-end align-items-center mt-5">
        <button
          className="btn btn-secondary text-white py-1 px-2"
          onClick={returnHandler}
          disabled={loading}
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};
