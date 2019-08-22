import React, { useState } from "react";
import { SetupDiv } from "./assets/StyledElements";

const TeamSetup = ({ changeTeamName, team: { players } }) => {
  const [form, setForm] = useState({
    name: ""
  });
  const handleOnChange = e => {
    e.persist();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  const handleOnSubmit = () => {
    changeTeamName(form.name);
  };

  return (
    <SetupDiv>
      <h1>Team Setup</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Change Team Name"
          onChange={handleOnChange}
        />
        <input type="submit" value="Change Name" />
      </form>
      <h2>Player list</h2>
    </SetupDiv>
  );
};

export default TeamSetup;
