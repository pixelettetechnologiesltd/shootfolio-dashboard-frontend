import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Row, Col, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  useGameModeAddMutation,
  useGetGameModeQuery,
} from "../slices/gameModeApi";
import { useGetGameQuery } from "../slices/gameApi";
const GameModes = () => {
  const [validated, setValidated] = useState(false);
  const { refetch } = useGetGameModeQuery();
  const [formData, setFormData] = useState({
    gameType: "",
    modeTitle: "",
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const { data, isError } = useGetGameQuery();
  const gameinfo = data?.data?.data || [];

  const [gameModeAdd, { isLoading }] = useGameModeAddMutation();
  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const gameType = formData.gameType;
      const modeTitle = formData.modeTitle;
      const status = formData.status;
      try {
        const res = await gameModeAdd({
          gameType,
          modeTitle,
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
            <h4 className="league-text">Define Game Mode </h4>
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
                  value={formData.gameType}
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
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="modeTitle"
                  placeholder="Mode Title"
                  value={formData.modeTitle}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Mode Title.
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Membership Type</option>
                  <option value="">Game 1</option>
                  <option value="">Game 2</option>
                  <option value="">Game 3</option>
                 
                  </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide A Membership Type.
                </Form.Control.Feedback>
              </Form.Group> */}
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
