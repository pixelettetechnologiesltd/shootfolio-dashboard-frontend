import React from "react";
import Sidebar from "../Components/Sidebar";
import { Row, Col, Card, Container } from "react-bootstrap";
import { images } from "../Components/Images";
const Performance = () => {
  return (
    <Container fluid className="sidebar">
      <Row>
        <Col
          xs={3}
          sm={3}
          md={3}
          lg={2}
          xl={2}
          style={{ backgroundColor: "#1B1B1B" }}
          className="h-100"
        >
          <Sidebar></Sidebar>
        </Col>
        <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "30px" }}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img src={images.billing} alt="Billing Image" />
                <div className="biling_info">Billing Related Information</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Performance;
