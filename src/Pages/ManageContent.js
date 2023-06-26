import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";
import { images } from "../Components/Images";
const ManageContent = () => {
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
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <Card style={{ width: "18rem", position: "relative" }}>
                <Card.Img variant="top" src={images.dummy} height="200px" />
                <div className="play_button">
                  <img src={images.playButton} />
                </div>
                <div className="thumnail-image">
                  <img
                    src={images.icbutton}
                    alt="Thumbnail"
                   
                  />
                </div>
                <Card.Body
                  style={{
                    padding: "19px 2px 21px 21px",
                    backgroundColor: "#1A1F38",
                  }}
                >
                  <Card.Title className="cardDetail-title">
                    From they fine john he give of rich he
                  </Card.Title>
                  <Card.Text
                    className="cardDetail-text"
                    style={{ marginTop: "0px" }}
                  >
                    Up maids me an ample stood given. Certainty say suffering
                    his him collected.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}></Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}></Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageContent;
