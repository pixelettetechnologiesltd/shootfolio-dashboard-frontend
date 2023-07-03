import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BiFootball } from "react-icons/bi";
import { useGetGameQuery } from "../slices/gameApi";
import { useGetGameModeQuery } from "../slices/gameModeApi";
import { toast } from "react-toastify";
import {
    useLeagueAddMutation
  } from "../slices/leagueAPi.js";
const Defineleaguetype = () => {
  const [validated, setValidated] = useState(false);
  const { data, isError, isLoading } = useGetGameQuery();
  const gameinfo = data?.data?.data || [];
  const { currentData } = useGetGameModeQuery();
  const gameMode = currentData?.data?.data || [];
  const [formData, setFormData] = useState({
    gameType: "",
    gameMode: "",
    leagueTitle: "",
    investableBudget: "",
    membershipType: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [leagueAdd] = useLeagueAddMutation();
  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
        const gameType = formData.gameType;
        const gameMode = formData.gameMode;
        const leagueTitle = formData.leagueTitle;
        const investableBudget = formData.investableBudget;
        const membershipType = formData.membershipType;
        const status = formData.status;
        try {
          const res = await leagueAdd({
            gameType,
            gameMode,
            leagueTitle,
            investableBudget,
            membershipType,
            status,
          }).unwrap();
    

          toast.success(res?.status);
        } catch (err) {
          console.log(err);
          toast.error(err?.data?.message || err.error);
        }
      }
  };
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
          <Col
            xs={9}
            sm={9}
            md={9}
            lg={10}
            xl={10}
            style={{ marginTop: "30px" }}
          >
            <Row className="setpaddinginnerpage">
              <Col md={4}>
                <div className="makebreadinrow">
                  <span className="breadgreenfootball">
                    <BiFootball />
                  </span>
                  <p className="sootfoliobreadclub">Define League Type</p>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="setmarg">
                <Form
                  noValidate
                  validated={validated}
                  className="mt-5"
                  onSubmit={submitHandler}
                >
                  <Form.Group controlId="validationCustom01" className="mb-4">
                    <Form.Label className="makelabelleft">
                      Select Game Type
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameType"
                      value={formData.gameTypeId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Game Type</option>
                      {isLoading ? (
                        <option value="" disabled>
                          Loading...
                        </option>
                      ) : isError ? (
                        <option value="" disabled>
                          Error loading game types
                        </option>
                      ) : (
                        gameinfo?.map((game) => (
                          <option key={game._id} value={game._id}>
                            {game.title}
                          </option>
                        ))
                      )}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select a Game Type.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Select Game Mode
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameMode"
                     value={formData.gameModeId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Game Mode</option>
                      {isLoading ? (
                        <option value="" disabled>
                          Loading...
                        </option>
                      ) : isError ? (
                        <option value="" disabled>
                          Error loading game Mode
                        </option>
                      ) : (
                        gameMode?.map((game) => (
                          <option key={game.gameType} value={game.gameType}>
                            {game.modeTitle}
                          </option>
                        ))
                      )}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Select League Title
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      placeholder="League Title"
                      name="leagueTitle"
                      value={formData.leagueTitle}
                      onChange={handleChange}
                      required
                    >
                      <option>Open this select menu</option>
                      <option value="Crypto Amateur Learners League">
                        Crypto Amateur Learners League
                      </option>
                      <option value="Crypto Beginner Learners League">
                        Crypto Super League{" "}
                      </option>
                      <option value="Crypto Expert League">
                        Crypto Expert League{" "}
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Investment Budget
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      name="investableBudget"
                      placeholder="$340"
                      value={formData.investableBudget}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Membership Type
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="membershipType"
                      value={formData.membershipType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Membership Type</option>
                      <option value="Free">Free</option>
                      <option value="Subscription">Subscription</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="validationCustom01">
                    <Form.Label className="makelabelleft">status</Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Shows game status on or off"
                      name="status"
                      value={formData.status}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.checked,
                        });
                      }}
                      required
                    />
                  </Form.Group>
                  <div className="addgapbetween">
                    <Button
                      type="submit"
                      className="createclubbutton"
                    >
                      Add League Type
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Defineleaguetype;
