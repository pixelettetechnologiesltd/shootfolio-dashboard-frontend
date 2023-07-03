import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col,Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import Leaguemap from '../Components/Leaguemap';
const Addnewleague = () => {
  return (
    <div>
        <Menu/>
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
                        <p className='sootfoliobreadclub'>Game League</p>
                    </div>
                </Col>
                <Col md={5}></Col>
                <Col md={3} className='makebuttonalignend'>
                    <Button href="/Dashboard/game/gameplaymode" className='addnewshhotfolioclubbutton'> + Add New League</Button>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='mt-5 mb-5'>
                   <Leaguemap/>
                </Col>
            </Row>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Addnewleague