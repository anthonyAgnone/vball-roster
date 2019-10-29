import styled from "styled-components";
import img from './volleyballNet.jpeg';

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 0;
  box-shadow: inset 0 0 0 100vh rgba(24, 141, 165, .1);
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Header = styled.header`
  position: absolute;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 20vw;
  height: 40vh;
  background: rgba(24, 141, 165, 1);
  padding: 2em;
  p {
    margin: 2em .3em 4em .8em;
  }
  button {
    background: #fff;
    border: none;
    padding: 8px 13px;
  }
`
