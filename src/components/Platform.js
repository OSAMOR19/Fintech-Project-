import React from "react";
import { Col, Container, Row, Button, Card } from "reactstrap";
import avatar1 from "./Images/avarter image.png";
import avatar4 from "./Images/avarter image.png";
import avatar3 from "./Images/avarter image.png";
import avatar5 from "./Images/avarter image.png";
import avatar6 from "./Images/avarter image.png";

const Platform = () => {
  
  return (
    <React.Fragment>
      <section className="mb-3" style={{ background: "#F4FCE1" }}>
        <Container>
          <Row>
            <Col className="col-12">
              <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
              </div>

              <Row className="justify-content-center mt-5">
                <Col lg={6}>
                  <div className="text-center mt-4 mb-5">
                    <h1 className="mb-3 text-start w-75 fw-bold lh-base">
                      All in-one invoice Platform
                    </h1>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className=" mt-4 mb-5">
                    <p className="text-muted pt-3">
                      Customize your business journey effortlessly with invoices
                      dashboard, backed by a suite of powerful tools at your
                      fingertips
                    </p>
                    <Button
                      to="/index"
                      className="btn btn-primary me-2"
                      style={{ backgroundColor: "#DAFA7E", color: "#0F322E" }}
                    >
                      Get Started
                      <i className="ri-arrow-right-line align-middle ms-1"></i>
                    </Button>
                  </div>
                </Col>
              </Row>

              <div className=" justify-content-center">
                <Row className="row-cols-xxl-8  row-cols-lg-3 row-cols-1">
                  <Col>
                    <Card
                      className="card-body text-light"
                      style={{ background: "#0F322E" }}
                    >
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar1}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2"></div>
                      </div>
                      <h6 className="mb-1 fw-bold">Save Time</h6>
                      <p className="card-text text-light">
                        Automate repetitive task and focus on growing your
                        business
                      </p>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-body">
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar4}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          {/* <h5 className="card-title mb-1">Natasha Carey</h5>
                        <p className="text-muted mb-0">Manager</p> */}
                        </div>
                      </div>
                      <h6 className="mb-1  fw-bold">Easy invoicing</h6>
                      <p className="card-text text-muted">
                        Automate repetitive task and focus on growing your
                        business
                      </p>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-body">
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar3}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2"></div>
                      </div>
                      <h6 className="mb-1 fw-bold">Get paid faster</h6>
                      <p className="card-text text-muted">
                        Automate repetitive task and focus on growing your
                        business
                      </p>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="card-body">
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar5}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          
                        </div>
                      </div>
                      <h6 className="mb-1 fw-bold">Unlimited support</h6>
                      <p className="card-text text-muted">
                        Automate repetitive task and focus on growing your
                        business
                      </p>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-body">
                      <div className="d-flex mb-4 align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={avatar6}
                            alt=""
                            className="avatar-sm rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                        </div>
                      </div>
                      <h6 className="mb-1 fw-bold">rganized & automation</h6>
                      <p className="card-text text-muted">Automate repetitive task and focus on growing your
                        business</p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Platform;
