import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Row, Col, Container } from "react-bootstrap";

import "../Assets/Css/Setting.css";
import Account from "../Components/Account";
import Billing from "../Components/Billing";
import { FaUser, FaMoneyBill, FaBell } from "react-icons/fa";
const Setting = () => {
  const [Components, setComponents] = useState(<Account />);
  const [activeTab, setActiveTab] = useState(1);
  const handleCompeoents = (value,number) => {
    setComponents(value);
    setActiveTab(number);
  };
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
        <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "50px" }}>
          <Row>
            <div className="notification-container">
              <div
                className={`notification ${activeTab === 1 ? "activeItem" : ""}`}
                onClick={() => handleCompeoents(<Account />,1)}
              >
                <div className="notification-text">
                  {" "}
                  <FaUser></FaUser> <span className="ml-20">Account</span>
                </div>
              </div>
              <div
                 className={`notification ${activeTab === 2 ? "activeItem" : ""}`}
                onClick={() => handleCompeoents(<Billing />,2)}
              >
                <div className="notification-text">
                  <FaMoneyBill></FaMoneyBill>
                  <span className="ml-20">Billing</span>
                </div>
              </div>
              <div
                 className={`notification ${activeTab === 3 ? "activeItem" : ""}`}
                onClick={() => handleCompeoents(<Billing />,3)}
              >
                <div className="notification-text">
                  <FaBell></FaBell>
                  <span className="ml-20">Notification</span>
                </div>
              </div>
              <div
                 className={`notification ${activeTab === 4 ? "activeItem" : ""}`}
                onClick={() => handleCompeoents(<Billing />,4)}
              >
                <div className="notification-text">
                  {" "}
                  <FaUser></FaUser> <span className="ml-20">NFT</span>
                </div>
              </div>
            </div>
          </Row>
          <Row style={{ marginTop: "50px" }}>{Components}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Setting;
