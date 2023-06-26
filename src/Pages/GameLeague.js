import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useGetGameQuery } from "../slices/gameApi";
import { toast } from "react-toastify";
import {
  useGetGameModeQuery,
} from "../slices/gameModeApi";
import {
  useLeagueAddMutation,
  useLeagueGetQuery,
} from "../slices/leagueAPi.js";
const GameModes = () => {
  const [validated, setValidated] = useState(false);
  const { data, isLoading,isError } = useGetGameQuery();
  const { currentData } = useGetGameModeQuery();
  const { refetch } = useLeagueGetQuery();
  const gameinfo = data?.data?.data || [];
  const gameMode =currentData?.data?.data || []
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
  const submitHandler = async(e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    }
    else {
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
        refetch();
        //dispatch(addGame({ ...res }));
        toast.success(res?.status);
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
    }
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
        <Col xs={3} sm={3} md={3} lg={3} xl={3}></Col>
        <Col xs={4} sm={4} md={6} lg={4} xl={4} style={{ marginTop: "50px" }}>
          <div>
            {" "}
            <h4 className="league-text">Define Game League </h4>
            <Form
              noValidate
              validated={validated}
              className="mt-5"
              onSubmit={submitHandler}
            >
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
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
              <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="gameMode"
                  value={formData.gameModeId}
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
                    gameMode?.map((game) => (
                      <option key={game.gameType} value={game.gameType}>
                        {game.modeTitle}
                      </option>
                    ))
                  )}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Choose a Game Mode ID.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="leagueTitle"
                  placeholder="League Title"
                  value={formData.leagueTitle}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A League Title.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="investableBudget"
                  value={formData.investableBudget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Investable Budget</option>
                  <option value="10000">10000$</option>
                  <option value="20000">20000$</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide A Investable Budget.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Membership Type</option>
                  <option value="Free">Free</option>
                  <option value="Subscription">Subscription</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide A Membership Type.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="status"
                  placeholder="Status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Status.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <button className="formsubmitbutton" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
      </Row>
    </Container>
  );
};

export default GameModes;
