import styled from "styled-components";

export const OnCourt = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-gap: 4em;
  grid-row-gap: 50%;
  padding-bottom: 200px;
  padding-top: 25px;
  div:nth-child(4) {
    grid-column: 3;
  }
  div:nth-child(5) {
    grid-column: 2;
  }
  div:nth-child(6) {
    grid-column: 1;
  }
  border: 2px solid #000;
  border-top-width: 6px;
  position: relative;
  :after {
    position: absolute;
    top: 33%;
    content: "";
    left: 0;
    height: 3px;
    width: 100%;
    background: rgba(24, 141, 165, 1);
  }
`;

export const OnBench = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  justify-content: center;
  align-items: center;
  h2 {
    align-self: flex-start;
  }
`;

export const Player = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid #000;
  padding: 2em;
  color: ${props => (props.swappable ? "#fffadd" : "#ffffff")};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => positionColor(props.position)};
  transition: all 0.6s ease-in-out;
  p {
    margin: 0;
    padding: 0;
  }
  button {
    display: none;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: 1px solid #000;
    padding: 2px 5px;
    margin: 0;
    background: red;
    color: #fff;
    cursor: pointer;
    :hover {
      background: #fff;
      color: red;
    }
  }
  :hover {
    button {
      display: block;
    }
  }
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
