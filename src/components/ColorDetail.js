import React from "react";
import { useParams, Navigate } from "react-router-dom";

function ColorDetail({ colors }) {
  const { color } = useParams();
  const colorValue = colors[color];

  if (!colorValue) return <Navigate to="/colors" />;

  return (
    <div style={{ backgroundColor: colorValue, height: "100vh" }}>
      <h1>This is {color}</h1>
      <h2>Isn't it beautiful?</h2>
      <p>
        <a href="/colors">Go Back</a>
      </p>
    </div>
  );
}

export default ColorDetail;
