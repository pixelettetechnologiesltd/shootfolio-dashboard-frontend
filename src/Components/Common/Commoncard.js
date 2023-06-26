import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "../../Assets/Css/mycard.css"

const Commoncard = ({style,title,text,number,className}) => {
  return (
    <>
    <Card>
      <Card.Body style={style}>
        <Row>
          <Col xs={4}>
          <span className={`visitors ${className}`}>{number}</span>
          </Col>
          <Col xs={8}>
          <div className="card-content">
            <Card.Title>{title}</Card.Title>
            <span className="text-left">{text}</span>
          </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </>
  );
};

export default Commoncard;
