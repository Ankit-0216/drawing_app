// import React from "react";
// import { useOnDraw } from "./Hooks";

// const Canvas = ({ width, height, backgroundImageUrl }) => {
//   const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

//   function onDraw(ctx, point, prevPoint) {
//     drawLine(prevPoint, point, ctx, "#000000", 5);
//   }

//   function drawLine(start, end, ctx, color, width) {
//     start = start ?? end;
//     ctx.beginPath();
//     ctx.lineWidth = width;
//     ctx.strokeStyle = color;
//     ctx.moveTo(start.x, start.y);
//     ctx.lineTo(end.x, end.y);
//     ctx.stroke();

//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
//     ctx.fill();
//   }

//   const canvasStyle = {
//     border: "1px solid black",
//     width: "700px",
//     height: "500px",
//     backgroundImage: `url('${backgroundImageUrl}')`,
//     backgroundSize: "cover", // T0 cover the canvas entirely
//   };

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <canvas
//         width={width}
//         height={height}
//         onMouseDown={onCanvasMouseDown}
//         style={canvasStyle}
//         ref={setCanvasRef}
//       />
//     </div>
//   );
// };

// export default Canvas;

import React, { useState, useEffect } from "react";
import { useOnDraw } from "./Hooks";

const Canvas = ({ width, height }) => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  useEffect(() => {
    // Fetch the background image URL from the backend API
    fetch("/background-image/:image_id")
      .then((response) => response.json())
      .then((data) => setBackgroundImageUrl(data.imageUrl))
      .catch((error) =>
        console.error("Error fetching background image:", error)
      );
  }, []);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "#000000", 5);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  const canvasStyle = {
    border: "1px solid black",
    width: "700px",
    height: "500px",
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: "cover", // T0 cover the canvas entirely
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas
        width={width}
        height={height}
        onMouseDown={onCanvasMouseDown}
        style={canvasStyle}
        ref={setCanvasRef}
      />
    </div>
  );
};

export default Canvas;
