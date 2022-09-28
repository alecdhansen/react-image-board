import ImageBoard from "../ImageBoard/ImageBoard";
import Navigationbar from "../Navbar/Navbar";
import "./App.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // const plusSign = <FontAwesomeIcon icon="fa-solid fa-plus" />;
  return (
    <div className="app">
      <Navigationbar />
      <ImageBoard />
    </div>
  );
}

export default App;
