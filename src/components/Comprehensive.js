import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "react-bootstrap";

import img1 from "./Images/cardpic1.png";
import img2 from "./Images/cardpic2.png";
import img4 from "./Images/cardpic4.png";

const Comprehensive = () => {
  return (
    <React.Fragment>
      <section className="section" id="services">
        <Container>
          <Row className="justify-content-center mt-5">
            <Col lg={8}>
              <div className="text-center mt-4 mb-5">
                <h1 className="mb-3 align-text-center fw-bold lh-base">
                  Comprehensive
                  <br />
                  Invoice Solutions
                </h1>
                <p className="text-muted pt-3 d-flex justify-content-between">
                  Automate your financial processes and get paid faster with
                  using our automated invoices generated.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <CardBody className="p-3 rounded-3">
              <Row className=" mt-2 mb-3 ">
                <Col sm={12} md={6}>
                  <Card
                    className=" mt-3  w-100"
                    style={{ background: "#F7F7F7", maxWidth: "90%" }}
                  >
                    <Card.Body>
                      <Card.Title className="text-start fw-bold">
                        Automated Invoicing
                      </Card.Title>
                      <Card.Text className="text-start w-75 text-muted">
                        Create and send professional invoices in minutes,
                        without manual effort
                      </Card.Text>
                      <div>
                        <img
                          src={img1}
                          alt=""
                          className="img-fluid mb-4"
                          style={{ maxWidth: "70%" }}
                        />
                      </div>
                    </Card.Body>
                  </Card>

                  <Card
                    className=" mt-3  w-100"
                    style={{ background: "#F7F7F7", maxWidth: "90%" }}
                  >
                    <Card.Body>
                      <Card.Title className="text-start fw-bold">
                        Client Management
                      </Card.Title>
                      <Card.Text className="text-start w-75 text-muted">
                        Ckeep track of client and their payment histories for
                        better communication and relationship management
                      </Card.Text>
                      <div>
                        <img
                          src={img1}
                          alt=""
                          className="img-fluid mb-4"
                          style={{ maxWidth: "70%" }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm={12} md={6}>
                  <Card
                    className=" mt-3  w-100 card-animate"
                    style={{ background: "#F7F7F7", maxWidth: "90%"}}
                  >
                    <Card.Body>
                      <Card.Title className="text-start fw-bold">
                        Online Payments
                      </Card.Title>
                      <Card.Text className="text-start w-75 text-muted">
                        Create and send professional invoices in minutes,
                        without manual effort
                      </Card.Text>
                      <div>
                        <img
                          src={img2}
                          alt=""
                          className="img-fluid mb-4"
                          style={{ maxWidth: "70%" }}
                        />
                      </div>
                    </Card.Body>
                  </Card>

                  <Card
                    className=" mt-3  w-100 card-animate"
                    style={{ background: "#F7F7F7", maxWidth: "90%" }}
                  >
                    <Card.Body>
                      <Card.Title className="text-start fw-bold">
                        Tracking Your Invoice
                      </Card.Title>
                      <Card.Text className="text-start w-75 text-muted">
                        Create and send professional invoices in minutes,
                        without manual effort
                      </Card.Text>
                      <div>
                        <img
                          src={img4}
                          alt=""
                          className="img-fluid mb-4"
                          style={{ maxWidth: "95%" }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Comprehensive;
