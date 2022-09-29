import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const INITIAL_STATE = {
  url: "",
  caption: "",
};

function ImageForm({ addImage }) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [show, setShow] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newImage = {
      url,
      caption,
    };
    addImage(newImage);
    setState(INITIAL_STATE);
  };

  function clearInputs() {
    return setUrl(""), setCaption("");
  }

  return (
    <Form onSubmit={handleSubmit} className="form">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">URL</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="url"
          pattern="https://.*"
          placeholder="Add favorite sports image..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Caption
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Brief description..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          type="text"
          required
        />
      </InputGroup>
      <div className="buttons">
        <Button variant="secondary" className="btn" onClick={clearInputs}>
          Clear
        </Button>

        <Button
          id="submit-btn"
          type="submit"
          className="btn btn-submit"
          onClick={() => setShow(true)}
        >
          Submit
        </Button>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={2000}
          autohide
          className="toast"
        >
          Submission Successful!
        </Toast>
      </div>
    </Form>
  );
}

export default ImageForm;
