import styled from "styled-components";

export const AddPlayerForm = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  transition: all .3s ease-in-out;
  transform: translateX(${props => props.isOpen ? 0 : '100%'});
  height: 100vh;
  border-left: 1px solid #000;
  padding: 2em 1em;
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
  .menuOpen {
    position: absolute;
    top: 0;
    left: -50px;
    cursor: pointer;
  }
`;
