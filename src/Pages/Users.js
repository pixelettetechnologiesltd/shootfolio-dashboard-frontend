import React from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Commoncard from "../Components/Common/Commoncard";
import { images } from "../Components/Images";
const Users = () => {
  return (
    <Container fluid className="sidebar">
      <Row className="h-100">
        <Col
          xs={3}
          sm={3}
          md={3}
          lg={2}
          xl={2}
          style={{ backgroundColor: "#1B1B1B" }}
        >
          <Sidebar></Sidebar>
        </Col>
        <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "30px" }}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <Commoncard
                style={{ padding: "15px", borderRadius: "10px" }}
                className="color"
                number="100+"
                title="Visitors"
                text="Active Site Visitors"
                textColor="#848484"
              ></Commoncard>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <Commoncard
                style={{ padding: "15px", borderRadius: "10px" }}
                number="2 Hrs"
                title="Time"
                text="Interaction time"
              ></Commoncard>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <Commoncard
                style={{ padding: "15px", borderRadius: "10px" }}
                number="100+"
                title="Lorem"
                text="Good draw knew"
              ></Commoncard>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <Commoncard
                style={{ padding: "15px", borderRadius: "10px" }}
                number="100+"
                title="Lorem"
                text="Good draw knew"
              ></Commoncard>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card>
                <Card.Body style={{ padding: "0px" }}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                        <img src={images.person} height="100%" />
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                        <span className="username"> UserName</span>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                        <span className="username">Email</span>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                        <span className="username">Status </span>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                        <span className="username">type</span>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                        <div className="makebtnsinrow_edit">
                          <div className="submitbtn_edit">
                            <button className="formsubmitbutton" style={{color:"white"}} type="submit">
                              Edit
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
