import React, { useCallback, useContext, useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";
//import { LinksList } from "../components/LinksList";

export const SearchPage = () => {
  const [links, setLinks] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/search", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }
  console.log(links);

  return (
    <div>
      <h3>SearchPage</h3>
    </div>
  );
};

//for test
/*
 return (
    <div>
      <h3>SearchPage</h3>
      {links.map((item, i) => (
        <li>
          {item.name}/ {item.type}
        </li>
      ))}
    </div>
  );
  */
