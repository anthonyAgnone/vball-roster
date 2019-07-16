import styled from "styled-components";

export const OnCourt = styled.div`
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
  flex-direction: column;
  border: 1px solid #000;
  padding: 1em;
  color: ${props => (props.swappable ? "red" : "black")};
  p {
    margin: 0;
    padding: 0;
  }
  button {
    width: 50%;
    background: transparent;
    border: 1px solid #000;
  }
`;

export const AddPlayerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
  input,
  select {
    margin-bottom: 2em;
  }
  input[type="checkbox"] {
    display: inline-block;
  }
  label {
    display: inline-block;
  }
`;
