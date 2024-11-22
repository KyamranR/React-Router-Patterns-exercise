import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [form, setForm] = useState({ name: "", value: "#ffffff" });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor({ [form.name]: form.value });
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name:</label>
        <input
          id="name"
          name="name"
          placeholder="Enter color name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="value">Color Value:</label>
        <input
          id="value"
          name="value"
          type="color"
          value={form.value}
          onChange={handleChange}
        />
      </div>
      <button>Add Color</button>
    </form>
  );
}

export default NewColorForm;
