import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="footer text-center py-3">Copyright &copy; CCNY</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
