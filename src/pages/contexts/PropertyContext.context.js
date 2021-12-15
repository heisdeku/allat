import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const PropertyContext = createContext();

export const usePropertyContext = () => {
  return useContext(PropertyContext);
};

const PropertyContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [propertiesLoading, setPropertiesLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [property, setProperty] = useState({});

  const fetchProperties = async () => {
    setPropertiesLoading(true);
    try {
      const response = await axios.get(
        "https://landxpress.herokuapp.com/api/property/"
      );
      setProperties(response.data);
      setPropertiesLoading(false);
    } catch (e) {
      setPropertiesLoading(false);
      console.log(e.response);
      let message = e?.response?.data?.message || "An error Occurred";
      toast.error(message);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        loading: propertiesLoading,
        modalOpen,
        property,
        setProperties,
        setModalOpen,
        setProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
