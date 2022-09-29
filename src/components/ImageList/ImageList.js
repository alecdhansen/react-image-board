import Card from "react-bootstrap/Card";

function ImageList({ images }) {
  const imagesList = images.map(({ id, url, caption }) => (
    <li key={id} className="card">
      <Card style={{ width: "100%" }} className="card">
        <Card.Img variant="top" src={url} />
        <Card.Body className="card-body">
          <Card.Title>{caption}</Card.Title>
        </Card.Body>
      </Card>
    </li>
  ));

  return <ul className="img-list">{imagesList}</ul>;
}

export default ImageList;
