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
  const { team, changeOffense, changeName, reorderPlayers } = useContext(TeamContext)

  const [newTeamName, setNewTeamName] = useState('');

  const handleOnChange = e => {
    e.persist();
    setNewTeamName(e.target.value)
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    changeName(newTeamName)
  };

  const handleChangeOffense = e => {
    changeOffense(e.target.value)
  }

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
        {items && items.map((value, index) => (
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
          id="teamName"
          name="teamName"
        />
        <input type="submit" value="Change Name" />
      </TeamForm>
      <TeamForm>
        <select id="offense" name="offense" onChange={handleChangeOffense}>
          <option value="i42">International 4-2</option>
          <option value="t42">Traditional 4-2</option>
          <option value="51">5-1</option>
          <option value="62">62</option>
        </select>
      </TeamForm>
      <h2>Player list</h2>
      <SortableList items={team.players} onSortEnd={onSortEnd} useDragHandle />
    </SetupDiv>
  );
};

export default TeamSetup;
