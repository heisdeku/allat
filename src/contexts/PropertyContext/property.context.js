import React, { createContext, useReducer } from 'react'
import { onListingFetch, onListingSet } from './property.action'
import propertyReducer, { INITIAL_STATE } from './property.reducer'


export const PropertyContext = createContext(null)

export const ProperyContextWrapper = ({ children }) => {
  const [ state, dispatch ] = useReducer(propertyReducer, INITIAL_STATE)

  return (
    <PropertyContext.Provider value={{ state }}>
      <div>
        {children}
      </div>
    </PropertyContext.Provider>   
  )
}