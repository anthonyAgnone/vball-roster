import React, { useState, useContext } from "react";
import { AddPlayerForm } from "./assets/StyledElements";

const PlayerForm = ({ dispatch }) => {
  const [form, setForm] = useState({
    name: "",
    id: "",
    gender: "",
    position: "",
    swappable: true,
    str: "",
    weak: ""
  });

  const handleAddPlayer = e => {
    e.preventDefault();
    if (form.name.length > 0 && form.gender.length > 0) {
      dispatch({
        type: "ADD_PLAYER",
        payload: {
          ...form,
          id: form.name.slice(0, 2) + generateRandomID(5)
        }
      });
    }
  };

  const handleChange = e => {
    e.persist();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  const generateRandomID = digits => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < digits; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <AddPlayerForm id="playerForm" onSubmit={handleAddPlayer}>
      <h1>Add a Player</h1>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <select id="gender" name="gender" onChange={handleChange}>
        <option>Choose a gender</option>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>

      <select id="position" name="position" onChange={handleChange}>
        <option>Choose a Position</option>
        <option value="s">Setter</option>
        <option value="mh">Middle Hitter</option>
        <option value="oh">Outside Hitter</option>
      </select>

      <div className="checkbox">
        <input
          type="checkbox"
          id="swappable"
          name="swappable"
          onChange={handleChange}
          checked={form.swappable}
        />
        <label htmlFor="memberSwappable">Swappable?</label>
      </div>
      <input type="submit" value="Add Player" />
    </AddPlayerForm>
  );
};

export default PlayerForm;
