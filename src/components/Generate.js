import React from "react";
import { Col, Container, Row, Card} from "reactstrap";
import img1 from "./Images/invoice.png";
import { CardBody } from "react-bootstrap";

const Generate = () => {
  return (
    <React.Fragment>
      <section className="section bg-light py-5" id="features">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6} sm={6} className="">
              <Card className="rounded-5" style={{background:'#0F322E',  maxWidth: '65%'}}>
                <CardBody>
                <div className="align-items-center img-container ">
                  <img src={img1} alt="" className="img-fluid" style={{ maxWidth: '95%' }} />
                </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <div className="">
                <h1 className="mb-3 fs-50 w-75 fw-bold">Generate upload and sort your invoice in one place</h1>
                <p className="mb-4 ff-secondary fs-16">
                  Collection widgets specialize in displaying many elements of
                  the same type, such as a collection of pictures from a
                  collection of articles from a news app or a collection of
                  messages from a communication app.
                </p>

                <Row className="pt-3">
                  <Col className="col-3">
                    <div className="text-center">
                      <h4>5</h4>
                      <p>Dashboards</p>
                    </div>
                  </Col>
                  <Col className="col-3">
                    <div className="text-center">
                      <h4>150+</h4>
                      <p>Pages</p>
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="text-center">
                      <h4>7+</h4>
                      <p>Functional Apps</p>
                    </div>
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

export default Generate;
