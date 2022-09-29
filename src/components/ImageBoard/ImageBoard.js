import { useState } from "react";
import ImageForm from "../ImageForm/ImageForm";
import ImageList from "../ImageList/ImageList";

const INITIAL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    caption: "Runner takes his mark",
  },
  {
    url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    caption: "Soccerball rests on freshly cut grass",
  },
  {
    url: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80",
    caption: "Night game in Toronto",
  },
];

function ImageBoard() {
  const [images, setImages] = useState(INITIAL_IMAGES);
  const addImage = (newImage) => {
    setImages([newImage, ...images]);
  };
  return (
    <div className="img-board">
      <ImageForm addImage={addImage} />
      <ImageList images={images} />
    </div>
  );
}

export default ImageBoard;
