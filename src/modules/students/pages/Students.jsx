import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../store/slice/students.slice";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function Main() {
  const data = useSelector((state) => state?.students?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <Row>
      {data.length &&
        data?.map((item, index) => {
          return (
            <Col lg={4} md={4} sm={12}>
              <Card className="my-4" style={{ width: "100%" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.firstName}</Card.Title>
                  <Card.Text>{item.birthDate}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}
