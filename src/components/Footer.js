import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #1D2339 100%)",
    color: "#ffffff",
    paddingTop: "10px",
    paddingBottom: "20px",
  };

  const textCenter = {
    textAlign: "start",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    margin: "30px 40px", // Adjusted margin for links
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="py-5"> {/* Added padding on the y-axis */}
          <Col lg={4}>
            <div>
                <h2>WEBLOW AGENCY</h2>
              <p className="ff-secondary">
                You can build any type of web application like eCommerce, CRM,
                CMS, Project management apps, Admin Panels, etc using Velzon.
              </p>
              <p style={textCenter}>© 2024 Your Company. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col sm={6}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home" style={linkStyle}>Home</a>
                  </li>
                  <li>
                    <a href="#services" style={linkStyle}>Services</a>
                  </li>
                  <li>
                    <a href="#portfolio" style={linkStyle}>Portfolio</a>
                  </li>
                  <li>
                    <a href="#contact" style={linkStyle}>Contact</a>
                  </li>
                  <li>
                    <a href="#faq" style={linkStyle}>FAQ's</a>
                  </li>
                </ul>
              </Col>
              <Col sm={6}>
                <h5>Company</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#about" style={linkStyle}>About Us</a>
                  </li>
                  <li>
                    <a href="#team" style={linkStyle}>Our Team</a>
                  </li>
                  <li>
                    <a href="#blog" style={linkStyle}>Blog</a>
                  </li>
                  <li>
                    <a href="#testimonials" style={linkStyle}>Testimonials</a>
                  </li>
                  <li>
                    <a href="#pricing" style={linkStyle}>Pricing</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Col, Container, Row, Button } from 'reactstrap';

// // Import Images
// import logolight from "./Images/fintechlogo.png";


// const Footer = () => {
//   return (
//     <React.Fragment>
//                 <Container className=" bg-dark py-5 position-relative">
//                     <Row>
//                         <Col lg={4} className="mt-4">
//                             <div>
//                                 <div>
//                                     <img src={logolight} alt="logo light" height="17" />
//                                 </div>
//                                 <div className="mt-4">
//                                     <p>Premium Multipurpose Admin & Dashboard Template</p>
//                                     <p className="ff-secondary">You can build any type of web application like eCommerce, CRM, CMS, Project
//                                         management apps, Admin Panels, etc using Velzon.</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col lg={7} className="ms-lg-auto">
//                             <Row>
//                                 <Col sm={4} className="mt-4">
//                                     <h5 className="text-white mb-0">Company</h5>
//                                     <div className="text-muted mt-3">
//                                         <ul className="list-unstyled ff-secondary footer-list">
//                                             <li><Button to="/pages-profile">About Us</Button></li>
//                                             <li><Button to="/pages-gallery">Gallery</Button></li>
//                                             <li><Button to="/apps-projects-overview">Projects</Button></li>
//                                             <li><Button to="/pages-timeline">Timeline</Button></li>
//                                         </ul>
//                                     </div>
//                                 </Col>
//                                 <Col sm={4} className="mt-4">
//                                     <h5 className="text-white mb-0">Apps Pages</h5>
//                                     <div className="text-muted mt-3">
//                                         <ul className="list-unstyled ff-secondary footer-list">
//                                             <li><Button to="/pages-pricing">Calendar</Button></li>
//                                             <li><Button to="/apps-mailbox">Mailbox</Button></li>
//                                             <li><Button to="/apps-chat">Chat</Button></li>
//                                             <li><Button to="/apps-crm-deals">Deals</Button></li>
//                                             <li><Button to="#">Kanban Board</Button></li>
//                                         </ul>
//                                     </div>
//                                 </Col>
//                                 <Col sm={4} className="mt-4">
//                                     <h5 className="text-white mb-0">Support</h5>
//                                     <div className="text-muted mt-3">
//                                         <ul className="list-unstyled ff-secondary footer-list">
//                                             <li><Button to="/pages-faqs">FAQ</Button></li>
//                                             <li><Button to="/pages-faqs">Contact</Button></li>
//                                         </ul>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>

//                     </Row>

//                     <Row className="text-center text-sm-start align-items-center mt-5">
//                         <Col sm={6}>

//                             <div>
//                                 <p className="copy-rights mb-0">
//                                     {new Date().getFullYear()} © Velzon - Themesbrand
//                                 </p>
//                             </div>
//                         </Col>
//                         <Col sm={6}>
//                             <div className="text-sm-end mt-3 mt-sm-0">
//                                 <ul className="list-inline mb-0 footer-social-link">
//                                     <li className="list-inline-item">
//                                         <Button to="#" className="avatar-xs d-block">
//                                             <div className="avatar-title rounded-circle">
//                                                 <i className="ri-facebook-fill"></i>
//                                             </div>
//                                         </Button>
//                                     </li>
//                                     <li className="list-inline-item">
//                                         <Button to="#" className="avatar-xs d-block">
//                                             <div className="avatar-title rounded-circle">
//                                                 <i className="ri-github-fill"></i>
//                                             </div>
//                                         </Button>
//                                     </li>
//                                     <li className="list-inline-item">
//                                         <Button to="#" className="avatar-xs d-block">
//                                             <div className="avatar-title rounded-circle">
//                                                 <i className="ri-linkedin-fill"></i>
//                                             </div>
//                                         </Button>
//                                     </li>
//                                     <li className="list-inline-item">
//                                         <Button to="#" className="avatar-xs d-block">
//                                             <div className="avatar-title rounded-circle">
//                                                 <i className="ri-google-fill"></i>
//                                             </div>
//                                         </Button>
//                                     </li>
//                                     <li className="list-inline-item">
                                        
//                                             <div className="avatar-title rounded-circle">
//                                                 <i className="ri-dribbble-line"></i>
//                                             </div>
                                        
//                                     </li>
//                                 </ul>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
          
//     </React.Fragment>
//   )
// }

// export default Footer