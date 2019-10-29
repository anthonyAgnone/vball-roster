import React, { useState } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(false)

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}