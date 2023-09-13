import React, { useEffect, useState } from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Main() {
  const [data, setData] = useState([]);
  let controller;
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products));
  }, []);

  const search = (searchValue) => {
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();

    axios
      .get(`https://dummyjson.com/products/search?q=${searchValue}`, {
        signal: controller.signal,
      })
      .then((res) => setData(res.data.products));
  };
  return (
    <Row className="mt-4">
      <Row>
        <InputGroup>
          <Form.Control
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => search(e.target.value)}
          />
        </InputGroup>
      </Row>
      <Row>
        {data?.map((item, index) => [
          <Col lg={4} md={4} sm={12}>
            <Card className="my-4" style={{ width: "100%" }}>
              <Card.Img variant="top" src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>,
        ])}
      </Row>
    </Row>
  );
}
