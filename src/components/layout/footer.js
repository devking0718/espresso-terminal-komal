import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-top">
                <Container>
                    <hr className="secondary-hr" />
                    <Row>
                        <Col sm={12} md={3} className="text-center my-5">
                            <div className="footer-section-title mb-4">Links</div>
                            <NavLink className="nav-link mb-3" to="/">Telegram Bot</NavLink>
                            <NavLink className="nav-link mb-3" to="/">Buy $ESPR</NavLink>
                        </Col>
                        <Col sm={12} md={3} className="text-center my-5">
                            <div className="footer-section-title mb-4">Socials</div>
                            <NavLink className="nav-link mb-3" to="/">Twitter</NavLink>
                            <NavLink className="nav-link mb-3" to="/">Telegram Group</NavLink>
                            <NavLink className="nav-link mb-3" to="/">Contact Us</NavLink>
                        </Col>
                        <Col sm={12} md={3} className="text-center my-5">
                            <div className="footer-section-title mb-4">Resources</div>
                            <NavLink className="nav-link mb-3" to="/">Docs</NavLink>
                            <NavLink className="nav-link mb-3" to="/">$ESPR Chart</NavLink>
                        </Col>
                        <Col sm={12} md={3} className="text-center my-5">
                            <div className="footer-section-title mb-4">Legal</div>
                            <NavLink className="nav-link mb-3" to="/">Terms & Conditions</NavLink>
                        </Col>
                    </Row>
                    <hr className="primary-hr" />
                </Container>
            </div>
            <div className="Footer-bottom">
                <Container>
                    <Row className="d-flex align-items-center justify-content-between">
                        <Col sm={12} md={1} className="text-center mb-2"><Image src={logo} alt="logo" height="70" /></Col>
                        <Col sm={12} md={6} className="text-center mb-2"><p>By accessing our services, you accept our Terms of Service and Privacy Policy.</p></Col>
                        <Col sm={12} md={5} className="text-center mb-2"><p>Copyright © 2023 EspressoBot. All rights reserved.</p></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}