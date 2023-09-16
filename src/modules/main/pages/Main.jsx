import React, { useEffect, useState } from "react";
import { Row, Col, InputGroup, Form, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axios";
import { fetchProdcts, searchProdcts } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_PRODUCTS } from "../store/actions/types";

export default function Main() {
  const data = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  let controler;

  useEffect(() => {
    dispatch(fetchProdcts())
  }, []);

  const search = async (value) => {
    if (controler) {
      controler.abort();
    }

    controler = new AbortController();

    dispatch(searchProdcts(value, controler.signal))
  };

  return (
    <Row className="mt-4">
      <Row>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => search(e.target.value)}
          />
        </InputGroup>
      </Row>
      <Row>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "500px",
            }}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          data.length &&
          data?.map((item, index) => [
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
          ])
        )}
      </Row>
    </Row>
  );
}
