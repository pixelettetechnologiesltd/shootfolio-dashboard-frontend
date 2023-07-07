import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { BiFootball } from "react-icons/bi";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { images } from '../Components/Images';
import { Link } from 'react-router-dom';
import "../Assets/Css/Gametype.css"
const Gametype = () => {
    return (
        <div>
            <Menu />
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
                    <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "30px" }}  className='setpaddinginnerpage'>
                        <Row>
                            <Col md={4}>
                                <div className='makebreadinrow'>
                                    <span className='breadgreenfootball'><BiFootball /></span>
                                    <p className='sootfoliobreadclub'>Game Type</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={3} className='makebuttonalignend'>
                                <Link to="/Dashboard/game/addnewgame"><Button className='addnewshhotfolioclubbutton'> + Add New Game</Button></Link>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col md={3}>
                                <div className='gametypebg'>
                                    <Image src={images.gtypeone} width="100px"/>
                                    <p className='gametypetitle'>Tennis</p>
                                    <div className='makebuttonstretchgametype'>
                                    <Link to="/Dashboard/game/editgametype" className='editgametype'>Edit</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='gametypebg'>
                                    <Image src={images.gtypetwo} width="100px"/>
                                    <p className='gametypetitle'>Football</p>
                                    <div className='makebuttonstretchgametype'>
                                    <Link to="/Dashboard/game/editgametype" className='editgametype'>Edit</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='gametypebg'>
                                    <Image src={images.gtypethree} width="69px"/>
                                    <p className='gametypetitle'>Basketball</p>
                                    <div className='makebuttonstretchgametype'>
                                    <Link to="/Dashboard/game/editgametype" className='editgametype'>Edit</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='gametypebg'>
                                    <Image src={images.gtypefour} width="117px"/>
                                    <p className='gametypetitle'>Volleyball</p>
                                    <div className='makebuttonstretchgametype'>
                                    <Link to="/Dashboard/game/editgametype" className='editgametype'>Edit</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Gametype