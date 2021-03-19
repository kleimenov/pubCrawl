import React, { useCallback, useContext, useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";

export const SearchPage = () => {

  const {loading, error, request} = useHttp();


  return (
    <div>
      <h3>SearchPage</h3>
      <Card className="text-left">
        <Card.Body>
          <Form className="text-secondary search-form-settings">
            <Form.Group id="name">
              <Form.Label>Search by Bar's name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
            <Form.Group id="type">
              <Form.Label>Search by type (bar/pub and so on...</Form.Label>
              <Form.Control type="type" />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>Search by type location (city/district).</Form.Label>
              <Form.Control type="location" />
            </Form.Group>
            <Button
              className="w-50 btn-secondary search-button-settings"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

/*

return (
    <div>
      <h3>SearchPage</h3>

    </div>
  );


  */

/*
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
*/
