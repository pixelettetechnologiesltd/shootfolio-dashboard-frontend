import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Assets/Css/Addportfolioclub.css";
import InputGroup from "react-bootstrap/InputGroup";
import { RiExternalLinkLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { usePortFolioAddMutation } from "../slices/clubApi";

const Addportfolioinclub = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    coinName: "",
    numberOfUnits: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [portFolioAdd] = usePortFolioAddMutation();

  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const coinName = formData.coinName;
      const numberOfUnits = formData.numberOfUnits;
      const Price = formData.price;

      try {
        const res = await portFolioAdd({
          coinName,
          numberOfUnits,
          Price,
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
                <p className="addportfolioinclubheadmain">
                  Add Portfolio in Club
                </p>
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
                  <Form.Group className="mb-4" controlId="validationCustom01">
                    <Form.Label className="makelabelleft">Coin Name</Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="coinName"
                      value={formData.coinName}
                      onChange={handleChange}
                      required
                    >
                      <option>Open this select menu</option>
                      <option value="one">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select a Coin.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="validationCustom02">
                    <Form.Label className="makelabelleft">
                      Number of Units
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="number"
                      defaultValue="0.00"
                      min="0.00"
                      step="0.01"
                      title="Choose your Number"
                      name="numberOfUnits"
                      value={formData.numberOfUnits}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid number of units.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="validationCustom03">
                    <Form.Label className="makelabelleft">Price</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        className="makeinputborder"
                        placeholder="Pick price from Coinmarketcap.com"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="price"
                        type="text"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        isInvalid={validated && !formData.price}
                      />
                      <Button
                        className="formgroupbuttojn"
                        variant="outline-secondary"
                        id="button-addon2"
                      >
                        <RiExternalLinkLine />
                      </Button>
                    </InputGroup>
                    {validated && !formData.price && (
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid price.
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <div className="addgapbetween">
                    <Button type="submit" className="discardbutton">
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

export default Addportfolioinclub;
