import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import { useGameAddMutation } from "../slices/gameApi";
import { toast } from "react-toastify";
const Gameplaymode = () => {
  const [validated, setValidated] = useState(false);
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
        toast.success(res?.status);
        console.log(res);
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
                  <p className="sootfoliobreadclub">Define Game </p>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="mt-4 mb-5 setmarg">
                <Form
                  noValidate
                  validated={validated}
                  className="mt-5"
                  onSubmit={submitHandler}
                >
                  <Form.Group className="mb-4" controlId="validationCustom01">
                    <Form.Label className="makelabelleft">Game Icon</Form.Label>
                    <Form.Control
                      className="removebgupload"
                      type="file"
                      name="iconUrl"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          iconUrl: e.target.files[0],
                        });
                      }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please select a Club Logo.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Game Title
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      name="title"
                      placeholder="Game Title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please select a Game Title.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">Status</Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="Inactive">Inactive</option>
                      <option value="Coming Soon">Coming Soon</option>
                      <option value="Active">Active</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select a Status.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="switch">
                    <Form.Label className="makelabelleft">
                      Quiz Access
                    </Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Shows game status on or off"
                      name="quizAccess"
                      value={formData.quizAccess}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.checked,
                        });
                      }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Provide a quiz access.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="addgapbetween">
                    <Button className="createclubbutton" type="submit">
                      Save
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

export default Gameplaymode;
