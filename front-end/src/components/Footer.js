import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="footer">Copyright &copy; CSC322</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
