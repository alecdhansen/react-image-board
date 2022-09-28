import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Navigationbar() {
  return (
    <Navbar sticky="top" expand="lg" variant="light">
      <Container className="container">
        <Navbar.Brand className="top-header" href="#">
          {" "}
          <Button variant="primary" className="head-button">
            Add Image
          </Button>
          <p className="title">Sports Image Collection Board</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Navigationbar;
