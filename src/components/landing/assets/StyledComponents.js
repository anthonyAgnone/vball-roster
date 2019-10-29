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
  box-shadow: inset 0 0 0 100vh rgba(24, 141, 165, .8);
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Header = styled.header`
  margin: 0 auto;
  width: 65vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
