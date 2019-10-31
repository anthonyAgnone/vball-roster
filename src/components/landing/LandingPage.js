import React, { useContext } from 'react'
import net from './assets/volleyballNet.jpeg'
import { AppContext } from '../../context/AppContext'
import { LandingWrapper, Header } from './assets/StyledComponents'

const LandingPage = () => {
  const { state, setState } = useContext(AppContext)
  return (
    <LandingWrapper>
      <Header img={net}>
        <h1>Manage Your Championship</h1>
        <p>Opportunity does not waste time with those who are unprepared. Take your team to the next level and make this season your best.</p>
        <button onClick={() => setState(!state)}>Start Today</button>
      </Header>
    </LandingWrapper>
  )
}


export default LandingPage;