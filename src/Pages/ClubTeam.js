import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Menu from "../Components/Menu";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useGetGameQuery } from "../slices/gameApi";
import { toast } from "react-toastify";
import { useClubAddMutation, useGetClubQuery } from "../slices/clubApi";

const ClubTeam = () => {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    gameTypeId: "",
    title: "",
    Symbol: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { data, isError, isLoading } = useGetGameQuery();
  const [clubAdd] = useClubAddMutation();
  const { refetch } = useGetClubQuery();
  const gameinfo = data?.data?.data || [];

  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const gameType = formData.gameTypeId;
      const title = formData.title;
      const Symbol = formData.Symbol;
      const status = formData.status;
      try {
        const res = await clubAdd({
          gameType,
          title,
          Symbol,
          status,
        }).unwrap();
        refetch();
        // dispatch(addGame(res.data));
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
          <Sidebar />
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}></Col>
        <Col xs={4} sm={4} md={6} lg={4} xl={4} style={{ marginTop: "50px" }}>
          <div>
            <h4 className="league-text">Define Game Clube Teams</h4>
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
                  name="gameTypeId"
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
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Title.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="Symbol"
                  placeholder="Symbol"
                  value={formData.Symbol}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Symbol.
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
                  Please provide a Status.
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

export default ClubTeam;
