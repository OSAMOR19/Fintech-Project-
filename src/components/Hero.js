import React from "react";
import { Col, Container, Row, Button } from "reactstrap";

import img2 from "./Images/dataman.png";
import avatar1 from "./Images/correctguy.png";

const Hero = () => {
  const gradientBackgroundStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #1D2339 100%)",
    // Add any other styles you want
  };
  return (
    <React.Fragment>
      <section style={gradientBackgroundStyle}>
        <Container>
          <Row className="align-items-center gy-2">
            <Col lg={6} className="order-2 order-lg-1">
              <div className=" text-light mt-sm-3">
                <h5 className="" style={{ color: "#DAFA7E" }}>
                  #1 INVOICE SOLUTIONS
                </h5>
                <h1 className=" fs-50 mb-3 ft-large mt-4 mb-3 fw-bold w-75">
                  Streamline Your Invoicing challenges
                </h1>
                <p className="mb-4 mt-3 w-75 ff-secondary">
                  Automate your financial processes and get paid faster with
                  using our automated invoices generated.
                </p>

                <Row>
                  <ul className="list-group-horizontal">
                    <img
                      src={avatar1}
                      alt=""
                      className="avatar-sm rounded-circle"
                    />
                    Very Affordable
                  </ul>
                  <ul>
                    <img
                      src={avatar1}
                      alt=""
                      className="avatar-sm rounded-circle"
                    />
                    Swift
                  </ul>
                  <ul>
                    <img
                      src={avatar1}
                      alt=""
                      className="avatar-sm rounded-circle"
                    />
                    Trusted
                  </ul>
                </Row>

                <div className="mt-4 g-5">
                  <Button
                    to="/index"
                    className="btn btn-primary me-2"
                    style={{ backgroundColor: "#DAFA7E", color: "#0F322E" }}
                  >
                    Get Started
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                  <Button to="/index" className="btn btn-primary">
                    How it works
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={5} sm={4} className=" ms-auto order-2 order-lg-2">
              <div className="card-animate" style={{ height: "670px" }}>
                <img
                  src={img2}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: "95%", transition: "transform 1.5s ease" }}
                />
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Hero;
