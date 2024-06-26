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
      <section className="py-5" id="platforms" style={{ background: "#F4FCE1" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-5">
                <h1 className="fw-bold mb-3">All-in-one Invoice Platform</h1>
                <p className="text-muted">
                  Customize your business journey effortlessly with an invoices
                  dashboard, backed by a suite of powerful tools at your
                  fingertips.
                </p>
                <Button
                  to="/index"
                  className="btn btn-primary me-2"
                  style={{ backgroundColor: "#DAFA7E", color: "#0F322E" }}
                >
                  Get Started <i className="ri-arrow-right-line align-middle ms-1"></i>
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center gy-4">
            <Col lg={4} md={6}>
              <Card className="card-body text-light animate__animated animate__fadeInUp" style={{ background: "#0F322E" }}>
                <div className="d-flex mb-3 align-items-center">
                  <img src={avatar1} alt="" className="avatar-sm rounded-circle me-2" />
                  <div className="flex-grow-1">
                    <h6 className="mb-1 fw-bold">Save Time</h6>
                    <p className="card-text text-light">
                      Automate repetitive tasks and focus on growing your business.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="card-body animate__animated animate__fadeInUp">
                <div className="d-flex mb-3 align-items-center">
                  <img src={avatar4} alt="" className="avatar-sm rounded-circle me-2" />
                  <div className="flex-grow-1">
                    <h6 className="mb-1 fw-bold">Easy Invoicing</h6>
                    <p className="card-text text-muted">
                      Automate repetitive tasks and focus on growing your business.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="card-body animate__animated animate__fadeInUp">
                <div className="d-flex mb-3 align-items-center">
                  <img src={avatar3} alt="" className="avatar-sm rounded-circle me-2" />
                  <div className="flex-grow-1">
                    <h6 className="mb-1 fw-bold">Get Paid Faster</h6>
                    <p className="card-text text-muted">
                      Automate repetitive tasks and focus on growing your business.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="card-body animate__animated animate__fadeInUp">
                <div className="d-flex mb-3 align-items-center">
                  <img src={avatar5} alt="" className="avatar-sm rounded-circle me-2" />
                  <div className="flex-grow-1">
                    <h6 className="mb-1 fw-bold">Unlimited Support</h6>
                    <p className="card-text text-muted">
                      Automate repetitive tasks and focus on growing your business.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="card-body animate__animated animate__fadeInUp">
                <div className="d-flex mb-3 align-items-center">
                  <img src={avatar6} alt="" className="avatar-sm rounded-circle me-2" />
                  <div className="flex-grow-1">
                    <h6 className="mb-1 fw-bold">Organized & Automation</h6>
                    <p className="card-text text-muted">
                      Automate repetitive tasks and focus on growing your business.
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Platform;
