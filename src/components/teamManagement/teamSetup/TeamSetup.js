import React, { useState, useContext } from "react";
import {
  SortableContainer,
  SortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import { SetupDiv, ListItem, TeamForm } from "./assets/StyledElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TeamContext } from '../../../context/TeamContext'

const TeamSetup = () => {
  const { team, changeTeam, reorderPlayers } = useContext(TeamContext)

  const [form, setForm] = useState({
    name: team.teamName,
    offense: team.offense,
    tempTeam: team.players
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

  const handleOnSubmit = e => {
    e.preventDefault();
    changeTeam(form)
  };

  const DragHandle = sortableHandle(() => (
    <p className="handle">
      <FontAwesomeIcon icon="volleyball-ball" />
    </p>
  ));

  const SortableItem = SortableElement(({ name, sex, pos }) => (
    <ListItem pos={pos}>
      <DragHandle />
      <p>{name}</p>
      <p>{pos}</p>
      <p>{sex}</p>
    </ListItem>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <ul style={{ padding: 0 }}>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            name={value.name}
            sex={value.gender}
            pos={value.position}
          />
        ))}
      </ul>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let tempTeam = team.players;
    reorderPlayers(arrayMove(tempTeam, oldIndex, newIndex))
  };

  return (
    <SetupDiv>
      <h1>Team Setup</h1>
      <TeamForm onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Change Team Name"
          onChange={handleOnChange}
          id="name"
          name="name"
        />
        <select id="offense" name="offense" onChange={handleOnChange}>
          <option value="i42">International 4-2</option>
          <option value="t42">Traditional 4-2</option>
          <option value="51">5-1</option>
          <option value="62">62</option>
        </select>
        <input type="submit" value="Submit Team" />
      </TeamForm>
      <h2>Player list</h2>
      <SortableList items={team.players} onSortEnd={onSortEnd} useDragHandle />
    </SetupDiv>
  );
};

export default TeamSetup;
