import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav className="nav-link">
      <Link to="/dogs" className="nav-link">
        Dogs
      </Link>

      <Link to="/colors" className="nav-link">
        Colors
      </Link>

      <Link to="/colors/new" className="nav-link">
        Add a Color
      </Link>

      {dogs.map((dog) => (
        <Link
          key={dog.name}
          to={`/dogs/${dog.name.toLowerCase()}`}
          className="nav-link"
        >
          {dog.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
