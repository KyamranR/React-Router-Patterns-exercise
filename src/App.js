import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./images/whiskey.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";

import Colors from "./components/Colors";
import ColorDetail from "./components/ColorDetail";
import NewColorForm from "./components/NewColorForm";

import "./App.css";

function App({ dogs }) {
  const [colors, setColors] = useState({
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  });

  const addColor = (newColor) =>
    setColors((colors) => ({ ...newColor, ...colors }));

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes>
          {/* Dogs Finder Routes */}
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />

          {/* Color Factory Routes */}
          <Route path="/colors" element={<Colors colors={colors} />} />
          <Route
            path="/colors/new"
            element={<NewColorForm addColor={addColor} />}
          />
          <Route
            path="/colors/:color"
            element={<ColorDetail colors={colors} />}
          />

          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
  ],
};

export default App;
