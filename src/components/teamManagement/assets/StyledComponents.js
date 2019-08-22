import styled from "styled-components";

export const TeamDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform: translateX(${props => (props.isOpen ? 0 : "100%")});
  height: 100vh;
  border-left: 1px solid #000;
  display: flex;
  flex-direction: column;
  width: 20vw;
  padding: 0 1em;
  .menuOpen {
    position: absolute;
    top: 0;
    left: -50px;
    cursor: pointer;
  }
`;
