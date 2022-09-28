import ImageForm from "../ImageForm/ImageForm";
import ImageList from "../ImageList/ImageList";

function ImageBoard() {
  return (
    <div className="img-board">
      <ImageForm />
      <ImageList />
    </div>
  );
}

export default ImageBoard;
