import React, { createContext, useContext, useState } from 'react'

const ModeContext = createContext();

export const useModeContext = ()=>useContext(ModeContext)

function GlobalContextProvider( {children}) {
const [mode, setMode] = useState(false);

  return (
    <ModeContext.Provider value={[mode, setMode]}>
        {children}
    </ModeContext.Provider>
  )
}

export default GlobalContextProvider