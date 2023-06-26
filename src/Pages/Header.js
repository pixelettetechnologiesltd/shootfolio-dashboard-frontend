import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../Assets/Css/Header.css";

import { images } from "../Components/Images";
import { useSelector } from "react-redux";
import {
  FaBell
} from "react-icons/fa";
function CollapsibleExample() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="navbg">
      <Container>
        <Row className="justify">
          <Col md={3} xs={3}>
            <p className="logohead">Shootfolio</p>
          </Col>
          <Col md={5} xs={4} className="p-0">
            {/* <Form className="d-flex">
              <Form.Control style={{padding: "0.6rem 0.6rem"}}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <span className="iconheaderform">
                
                </span>
              </Button>
            </Form> */}
          </Col>
        
          <Col md={3} xs={4} className="vertalign">
            {userInfo?.userInfo ? 
            <div className="admin-profile">
              <div className="profile-picture">
                <img src={images.person} alt="Admin Profile" />
              </div>
              <div className="profile-info">
                <span className="profile-name">{userInfo?.userInfo?.name}</span>
                <p className="profile-role" style={{marginBottom:"0px"}}>{userInfo?.userInfo?.role}</p>
              </div>
              <div className="bell-icon">
               <FaBell/>
              </div>
            </div>
             :""}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CollapsibleExample;
