import React, { useCallback, useContext, useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";


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
      <Card className="text-left">
        <Card.Body>
          <Form className="text-secondary search-form-settings">
            <Form.Group id="by name">

            </Form.Group>
            <Form.Group id="by type">

            </Form.Group>
            <Form.Group id="by city/district">

            </Form.Group>
 
 
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

return (
    <Card className="text-left">
      <Card.Body>
        <Form
          className="text-secondary search-form-settings"
          onSubmit={searchHandler}
        >
          <Form.Group id="Author">
            <Form.Label>Search by Author</Form.Label>
            <Form.Control
              type="Author"
              onChange={(evt) => setAuthor(evt.target.value)}
            />
          </Form.Group>
          <Form.Group id="Genre">
            <Form.Label>Search by Genre</Form.Label>
            <Form.Control
              type="Genre"
              onChange={(evt) => setGenre(evt.target.value)}
            />
          </Form.Group>
          <Form.Group id="Country">
            <Form.Label>Search by Country</Form.Label>
            <Form.Control
              type="Country"
              onChange={(evt) => setCountry(evt.target.value)}
            />
          </Form.Group>
          <Form.Group id="bookName">
            <Form.Label>Search by book's name</Form.Label>
            <Form.Control
              type="bookName"
              onChange={(evt) => setBookName(evt.target.value)}
            />
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