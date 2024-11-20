import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name);
  const navigate = useNavigate();
  if (!dog) return <Navigate to="/dogs" />;

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/dogs")}>Go Back</button>
    </div>
  );
}

export default DogDetails;
