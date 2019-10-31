import styled from "styled-components";

export const SetupDiv = styled.div`
  width: 100%;
`;

const positionColor = pos => {
  switch (pos) {
    case "s":
      return "#DC5D49";
    case "mh":
      return "#561D25";
    case "oh":
      return "#188DA5";
    default:
      return pos;
  }
};

export const TeamForm = styled.form`
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  width: 100%;
  list-style: none;
  height: 3em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  border-bottom: 2px solid ${props => positionColor(props.pos)};
  padding: 1em 0;
  p {
    margin: 0 1em;
    text-align: center;
  }
  .handle {
    background-color: ${props => positionColor(props.pos)};
    width: 1.3em;
    height: 1.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 50%;
    color: #fff;
    cursor: grab;
  }
`;
