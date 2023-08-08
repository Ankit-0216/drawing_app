import "./App.css";
import Canvas from "./Components/Canvas";
// import { useEffect, useState } from "react";
// import { fetchImageURLFromServer } from "./api";

function App() {
  const backgroundImageUrl =
    "http://res.cloudinary.com/dc6xvdopk/image/upload/v1691488410/files/slxk18tkgqvh7cq3gnx8.jpg";

  return (
    <div className="App">
      <Canvas
        width={700}
        height={500}
        backgroundImageUrl={backgroundImageUrl}
      />
    </div>
  );
}

export default App;
