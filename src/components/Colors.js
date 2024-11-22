import React from "react";
import { Link } from "react-router-dom";

function Colors({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory!</h1>
      <h2>
        <Link to="/colors/new">Add a New Color</Link>
      </h2>
      <ul>
        {Object.keys(colors).map((colorName) => (
          <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
