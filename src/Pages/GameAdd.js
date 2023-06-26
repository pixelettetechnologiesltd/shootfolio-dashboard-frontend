import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { toast } from "react-toastify";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useGameAddMutation,useGetGameQuery } from "../slices/gameApi";
import { useDispatch, useSelector } from "react-redux";
const GameAdd = () => {
  const [validated, setValidated] = useState(false);
  const {refetch}=useGetGameQuery();
  const [formData, setFormData] = useState({
    title: "",
    iconUrl: "",
    quizAccess: "",
    status: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch =useDispatch();
  const [gameAdd, { isLoading }] = useGameAddMutation();
  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const title = formData.title;
      const iconUrl = formData.iconUrl;
      const quizAccess = formData.quizAccess;
      const status = formData.status;
      try {
        const res = await gameAdd({
          title,
          iconUrl,
          quizAccess,
          status,
        }).unwrap();
        refetch()
        //dispatch(addGame(res.data));
        toast.success(res?.status);
      } catch (err) {
        console.log(err)
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
            <h4 className="league-text">Define Game</h4>
            <Form
              noValidate
              validated={validated}
              className="mt-5"
              onSubmit={submitHandler}
            >
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  type="text"
                  name="title"
                  placeholder="Game Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Game Title.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="iconUrl"
                  placeholder="icon url"
                  value={formData.iconUrl}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Icon Url.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="quizAccess"
                  placeholder="Quiz Access"
                  value={formData.quizAccess}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Quiz Access.
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

export default GameAdd;
