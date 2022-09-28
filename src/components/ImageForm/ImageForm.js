import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function ImageForm({ addImage }) {
  const [source, setSource] = useState("");
  const [caption, setCaption] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newImage = {
      source,
      caption,
    };
    addImage(newImage);
    setSource("");
    setCaption("");
  };

  function clearInputs() {
    return setSource(""), setCaption("");
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
          placeholder="Add your favorite sports image here..."
          value={source}
          onChange={(e) => setSource(e.target.value)}
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
          placeholder="Describe your image in a words..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
      </InputGroup>
      <div className="buttons">
        <Button variant="secondary" className="btn" onClick={clearInputs}>
          Clear
        </Button>
        <Button id="submit-btn" type="submit" className="btn btn-submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ImageForm;
