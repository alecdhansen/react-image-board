import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ImageForm() {
  return (
    <form className="form">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Image URL
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Add a caption
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <div className="buttons">
        <Button variant="secondary" className="btn">
          Cancel
        </Button>
        <Button variant="success" type="submit" className="btn">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ImageForm;
