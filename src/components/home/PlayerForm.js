import React, { useState, useContext } from "react";
import { TeamDispatch } from "../../App";
import { AddPlayerForm } from "./assets/StyledElements";

const PlayerForm = () => {
  const dispatch = useContext(TeamDispatch);
  const [form, setForm] = useState({
    name: "",
    id: "",
    gender: "",
    swappable: true,
    str: "",
    weak: ""
  });

  const handleAddPlayer = e => {
    e.preventDefault();
    setForm(form => ({
      ...form,
      id: form.name.slice(0, 2) + generateRandomID(5)
    }));
    if (form.name.length > 0 && form.gender.length > 0) {
      dispatch({ type: "ADD_PLAYER", payload: form });
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
      <input type="text" id="name" name="name" onChange={handleChange} />
      <select id="gender" name="gender" onChange={handleChange}>
        <option>Choose a gender</option>
        <option value="m">Male</option>
        <option value="f">Female</option>
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
