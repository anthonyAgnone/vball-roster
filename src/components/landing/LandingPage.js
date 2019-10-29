import React, { useContext } from 'react'
import net from './assets/volleyballNet.jpeg'
import { AppContext } from '../../context/AppContext'
import { LandingWrapper, Header } from './assets/StyledComponents'

const LandingPage = () => {
  const { state, setState } = useContext(AppContext)
  return (
    <LandingWrapper>
      <Header img={net}>
        <h1>Volleyball Roster and Rotation App</h1>
        <button onClick={() => setState(!state)}>Login/Sign Up</button>
      </Header>
    </LandingWrapper>
  )
}


export default LandingPage;