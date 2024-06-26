import React, { useState } from "react";
import { Col, Container, Row, Button, CardBody, Card } from "reactstrap";
const Price = () => {
  const [plan, setPlan] = useState(true);
  const toggle = () => setPlan(!plan);
  const gradientBackgroundStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #1D2339 100%)",
    // Add any other styles you want
  };
  return (
    <React.Fragment>
      <section className="section" id='pricing' style={gradientBackgroundStyle}>
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center text-light mt-4 mb-5">
                <h1 className="mb-3 fw-bold">
                  Price to organize your <br/>
                   payment method
                </h1>
                <p className=" mb-4">
                  Automate your financial processes and get paid faster with
                  using our automated invoices generated.
                </p>

                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <h5 className="fs-14 mb-0">Monthly</h5>
                  </div>
                  <div className="form-check form-switch fs-20 ms-3 " onClick={toggle} >
                                        <input className="form-check-input" type="checkbox" id="plan-switch" />
                                        <label className="form-check-label" htmlFor="plan-switch"></label>
                                    </div>
                  <div>
                    <h5 className="fs-14 mb-0">
                      Yearly
                      <span className="badge badge-soft-success">Save 20%</span>
                    </h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col lg={4}>
              <Card className=" mb-0">
                <CardBody className="p-4 m-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fw-bold">Free Plans</h5>
                      <p className="text-muted mb-0">This is a free plan for everyone</p>
                    </div>
                    <div className="avatar-sm">
                      <div className="avatar-title bg-light rounded-circle text-primary">
                        <i className="ri-book-mark-line fs-20"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    {plan ? (
                      <h1 className="month">
                          <small>N</small>
                        <span className="ff-secondary fw-bold">0.00</span>{" "}
                        <span className="fs-13 text-muted">/Month</span>
                      </h1>
                    ) : (
                      <h1 className="annual"> 
                          <small>N</small>
                        <span className="ff-secondary fw-bold">0.00</span>{" "}
                        <span className="fs-13 text-muted">/Year</span>
                      </h1>
                    )}
                  </div>

                  <div>
                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold">Unlimited Invoices Acceptance</h6>
                      <p className="text-muted mb-0">This is a free plan for everyone</p>
                    </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Upto <b>299</b> Customers
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Scalable Bandwidth</div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Domain</div>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Button to="#" className="btn btn-soft-success w-100" style={{background:'#0F322E'}}>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            {/* <!--end col--> */}
            <Col lg={4}>
              <Card className="plan-box mb-0 rounded-4  right" style={{background:'#C8F069'}}>
                <CardBody className="p-4 m-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fw-bold">Basic Plans</h5>
                      <p className="text-muted mb-0">This is a Pain Plan for Everyone</p>
                    </div>
                    <div className="avatar-sm">
                      <div className="avatar-title bg-light rounded-circle text-primary">
                        <i className="ri-medal-fill fs-20"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    {plan ? (
                      <h1 className="month">
                          <small>N</small>
                        <span className="ff-secondary fw-bold">24,00</span>{" "}
                        <span className="fs-13 text-muted">/Month</span>
                      </h1>
                    ) : (
                      <h1 className="annual">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">261</span>{" "}
                        <span className="fs-13 text-muted">/Year</span>
                      </h1>
                    )}
                  </div>

                  <div>
                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Upto <b>15</b> Projects
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Customers
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Scalable Bandwidth</div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>12</b> FTP Login
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>24/7</b> Support
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Storage
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Domain</div>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Button to="#" className="btn btn-soft-success w-100" style={{background:'#0E0D13'}}>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="plan-box mb-0">
                <CardBody className="p-4 m-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fw-semibold">Platinum Plan</h5>
                      <p className="text-muted mb-0">Enterprise Businesses</p>
                    </div>
                    <div className="avatar-sm">
                      <div className="avatar-title bg-light rounded-circle text-primary">
                        <i className="ri-stack-fill fs-20"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    {plan ? (
                      <h1 className="month">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">32,000</span>{" "}
                        <span className="fs-13 text-muted">/Month</span>
                      </h1>
                    ) : (
                      <h1 className="annual">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">351</span>{" "}
                        <span className="fs-13 text-muted">/Year</span>
                      </h1>
                    )}
                  </div>

                  <div>
                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Projects
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Customers
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Scalable Bandwidth</div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> FTP Login
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>24/7</b> Support
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Storage
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Domain</div>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Button to="#" className="btn btn-soft-success w-100" style={{background:'#0F322E'}}>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Price;
