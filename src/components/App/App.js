import ImageBoard from "../ImageBoard/ImageBoard";
import Container from "react-bootstrap/Container";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // const plusSign = <FontAwesomeIcon icon="fa-solid fa-plus" />;
  return (
    <div className="app">
      <Navbar sticky="top" expand="lg" variant="light">
        <Container className="container">
          <Navbar.Brand href="#">
            {" "}
            <Button variant="primary">Add Image</Button>{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <main>
        <ImageBoard />
      </main>
    </div>
  );
}

export default App;
