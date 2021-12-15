import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
export const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
}

const AdminContextProvider = ({ children }) => {
  const [ user, setUser ] = useState({})
  useEffect(() => {
    if (user) {
      toast.success('Successfully Logged in!')
    }
  }, [user])
  return (
    <AdminContext.Provider value={{ user, setUser}}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider;