import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Assets/Css/Addnewclub.css";
import Form from "react-bootstrap/Form";
import { useGetGameQuery } from "../slices/gameApi";
import { toast } from "react-toastify";
import { useClubAddMutation } from "../slices/clubApi";
const Addnewclub = () => {
  const [validated, setValidated] = useState(false);
  const { data, isError, isLoading } = useGetGameQuery();
  const gameinfo = data?.data?.data || [];
  const [formData, setFormData] = useState({
    clublogo: "",
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
  const [clubAdd] = useClubAddMutation();
  const submitHandler = async(e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
        const clublogo=formData.clublogo;
        const gameType = formData.gameTypeId;
        const title = formData.title;
        const Symbol = formData.Symbol;
        const status = formData.status;
        try {
          const res = await clubAdd({
            clublogo,
            gameType,
            title,
            Symbol,
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
                <p className="addnewclubheading">Add New Club</p>
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
                  enctype="multipart/form-data"
                >
                  <Form.Group className="mb-4" controlId="validationCustom01">
                    <Form.Label className="makelabelleft">Club Logo</Form.Label>
                    <Form.Control
                      className="removebgupload"
                      type="file"
                      name="clublogo"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          clublogo: e.target.files[0],
                        });
                      }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please select a Club Logo.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="validationCustom01"
                    className="mb-4"
                  
                    
                  >
                    <Form.Label className="makelabelleft">
                      Select Game Type
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
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
                  <Form.Group className="mb-4" controlId="validationCustom01">
                    <Form.Label className="makelabelleft">Title</Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="Pico Club"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Title.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="validationCustom01">
                    <Form.Label className="makelabelleft">Symbol</Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="PFC"
                      name="Symbol"
                      value={formData.Symbol}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Symbol.
                    </Form.Control.Feedback>
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
                    <Button className="discardbutton"> Discard</Button>

                    <Button type="submit" className="createclubbutton">
                      Create Club
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

export default Addnewclub;
