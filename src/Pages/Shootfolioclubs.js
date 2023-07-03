import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col,Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import "../Assets/Css/Shootfolioclubs.css"
import {Clubsmap} from '../Components/Clubsmap';
import { Link } from 'react-router-dom';
const Shootfolioclubs = () => {
  return (
    <div>
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
            <Row  className='setpaddinginnerpage'>
                <Col md={4}>
                    <div className='makebreadinrow'>
                        <span className='breadgreenfootball'><BiFootball/></span>
                        <p className='sootfoliobreadclub'>Shootfolio Clubs</p>
                    </div>
                </Col>
                <Col md={5}></Col>
                <Col md={3} className='makebuttonalignend'>
                    <Link to="/Dashboard/game/addnewclub" className='addnewshhotfolioclubbutton'> + Add New Club</Link>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='mt-4 mb-5'>
                    <Clubsmap/>
                </Col>
            </Row>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Shootfolioclubs