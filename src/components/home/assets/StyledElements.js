import styled from "styled-components";

export const TeamInfo = styled.div`
  width: 40vh;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2vw;
`;

export const Controls = styled.div`
  width: 100vh;
  height: 10vh;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  display: flex;
  border: 2px solid #fff;
  button {
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-right: 1px solid #002430;
    :last-child {
      border: none;
    }
  }
`;

export const OnCourt = styled.div`
  width: 100vh;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-gap: 4em;
  grid-row-gap: 10%;
  background-size: 30%;
  background-repeat: repeat;
  background-position: top;
  border: 2px solid #fff;
  border-top-width: 6px;
  padding-top: 20px;
  padding-bottom: 50px;
  background-color: #002430;
  div:nth-child(4) {
    grid-column: 3;
  }
  div:nth-child(5) {
    grid-column: 2;
  }
  div:nth-child(6) {
    grid-column: 1;
  }
  :before {
    z-index: -1;
    position: absolute;
    top: 33%;
    content: "";
    left: 0;
    height: 3px;
    width: 100%;
    background: rgba(24, 141, 165, 1);
  }
`;

export const Player = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-width: ${props => (props.swappable ? "1px" : "3px")};
  border-style: solid;
  border-color: ${props => (props.swappable ? "#000" : "red")};
  padding: 2em;
  color: ${props => (props.swappable ? "#fffadd" : "#ffffff")};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => positionColor(props.position)};
  transition: all 0.6s ease-in-out;
  height: 50%;
  width: auto;
  min-width: 100px;
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

export const OnBench = styled.div`
  width: 40vh;
  position: absolute;
  top: 50vh;
  left: 2vw;
  display: flex;
  flex-direction: column;
`;

export const BenchList = styled.ul`
  width: 100%;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BenchPlayer = styled.div`
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #333;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  padding: 0.2em;
  color: ${props => (props.swappable ? "#fffadd" : "#ffffff")};
  background-color: #3cbcc3;
  transition: all 0.6s ease-in-out;
  p {
    margin: 0;
    padding: 0;
  }
  button {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
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
      return "#00938C";
    case "mh":
      return "#003459";
    case "oh":
      return "#007EA7";
    default:
      return pos;
  }
};
