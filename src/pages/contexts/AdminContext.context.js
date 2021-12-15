import React, { createContext, useContext, useState } from 'react';


export const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
}

const AdminContextProvider = ({ children }) => {
  const [ user, setUser ] = useState({})
  return (
    <AdminContext.Provider value={{ user, setUser}}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider;