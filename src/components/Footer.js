import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Faida Rouid" />
          </Col> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/faida-rouid" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/faidarouid" target="_blank" rel="noreferrer"><img src={navIcon3} alt="GitHub" /></a>
              <a href="mailto:rouidfaida@gmail.com"><img src={navIcon2} alt="Email" /></a>
            </div>
            <p>© 2025 Faida Rouid — Tous droits réservés</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
