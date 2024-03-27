import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';

// Import Images
import logolight from "./Images/fintechlogo.png";


const Footer = () => {
  return (
    <React.Fragment>
                {/* <Container className=" bg-dark py-5 position-relative">
                    <Row>
                        <Col lg={4} className="mt-4">
                            <div>
                                <div>
                                    <img src={logolight} alt="logo light" height="17" />
                                </div>
                                <div className="mt-4">
                                    <p>Premium Multipurpose Admin & Dashboard Template</p>
                                    <p className="ff-secondary">You can build any type of web application like eCommerce, CRM, CMS, Project
                                        management apps, Admin Panels, etc using Velzon.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7} className="ms-lg-auto">
                            <Row>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-white mb-0">Company</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Button to="/pages-profile">About Us</Button></li>
                                            <li><Button to="/pages-gallery">Gallery</Button></li>
                                            <li><Button to="/apps-projects-overview">Projects</Button></li>
                                            <li><Button to="/pages-timeline">Timeline</Button></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-white mb-0">Apps Pages</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Button to="/pages-pricing">Calendar</Button></li>
                                            <li><Button to="/apps-mailbox">Mailbox</Button></li>
                                            <li><Button to="/apps-chat">Chat</Button></li>
                                            <li><Button to="/apps-crm-deals">Deals</Button></li>
                                            <li><Button to="#">Kanban Board</Button></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-white mb-0">Support</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Button to="/pages-faqs">FAQ</Button></li>
                                            <li><Button to="/pages-faqs">Contact</Button></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                    <Row className="text-center text-sm-start align-items-center mt-5">
                        <Col sm={6}>

                            <div>
                                <p className="copy-rights mb-0">
                                    {new Date().getFullYear()} © Velzon - Themesbrand
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end mt-3 mt-sm-0">
                                <ul className="list-inline mb-0 footer-social-link">
                                    <li className="list-inline-item">
                                        <Button to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-facebook-fill"></i>
                                            </div>
                                        </Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-github-fill"></i>
                                            </div>
                                        </Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-linkedin-fill"></i>
                                            </div>
                                        </Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-google-fill"></i>
                                            </div>
                                        </Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-dribbble-line"></i>
                                            </div>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container> */}
          
    </React.Fragment>
  )
}

export default Footer