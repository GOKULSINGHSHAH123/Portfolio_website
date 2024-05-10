import React, { createContext } from 'react'
import data from '../assets/data'
export const portfolioContext = createContext(null);

const Context = (props) => {

    const ContextValue = {data}
  return (
    <ShopContext.Provider value={contextValue}>
    {props.children     }
</ShopContext.Provider>
  )
}

export default Context