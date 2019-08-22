import React, { useState, useContext } from "react";
import { TeamDispatch } from "../../App";
import { AddPlayerForm } from "./assets/StyledElements";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamSetup from "../teamSetup/TeamSetup";

library.add(faIdBadge);

const PlayerForm = props => {
  const dispatch = useContext(TeamDispatch);

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

  const handleTeamName = name => {
    dispatch({
      type: "CHANGE_TEAM",
      payload: {
        name
      }
    });
    console.log(props.team.name);
  };

  const [isMenuOpen, setOpen] = useState(props.app.isOpen);

  return (
    <AddPlayerForm
      id="playerForm"
      onSubmit={handleAddPlayer}
      isOpen={isMenuOpen}>
      <h1 className="menuOpen" onClick={() => setOpen(prevState => !prevState)}>
        <FontAwesomeIcon icon="id-badge" />
      </h1>
      <TeamSetup changeTeamName={handleTeamName} team={props.team} />
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
