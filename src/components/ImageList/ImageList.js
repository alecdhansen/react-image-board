import Card from "react-bootstrap/Card";

function ImageList() {
  const image = (
    <li className="card">
      <Card style={{ width: "100%" }} className="card">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        />
        <Card.Body className="card-body">
          <Card.Title>Image Caption</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%" }} className="card">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <Card.Body>
          <Card.Title>Image Caption</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%" }} className="card">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80"
        />
        <Card.Body>
          <Card.Title>Image Caption</Card.Title>
        </Card.Body>
      </Card>
    </li>
  );

  return <ul className="img-list">{image}</ul>;
}

export default ImageList;
