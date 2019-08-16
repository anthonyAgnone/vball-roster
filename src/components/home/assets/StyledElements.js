import styled from "styled-components";

export const OnCourt = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-gap: 4em;
  div:nth-child(4) {
    grid-column: 3;
  }
  div:nth-child(5) {
    grid-column: 2;
  }
  div:nth-child(6) {
    grid-column: 1;
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
  color: ${props => (props.swappable ? "red" : "black")};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
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
