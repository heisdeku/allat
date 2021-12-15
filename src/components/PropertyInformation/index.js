import React, { useEffect, useState } from "react";
import { Text, Spinner } from "@chakra-ui/react";
import ReactModal from "react-modal";
import "./style.css";
import axios from "axios";
import toast from "react-hot-toast";
import { usePropertyContext } from "../../pages/contexts/PropertyContext.context";

const PropertyInformation = ({ modalOpen, propertyId }) => {
  const propertyContext = usePropertyContext();
  const [isLoading, setIsLoading] = useState(true);
  const { property, setProperty, setModalOpen } = propertyContext;

  const handlePropertyFetch = async () => {
    setProperty({});       
    try {
      const response = await axios.get(
        `https://landxpress.herokuapp.com/api/property/${propertyId}`
      );
      setProperty(response?.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e.response);
      let message = e?.response?.data?.message || "An error Occurred";
      toast.error(message);
    }
  };

  useEffect(() => {
    handlePropertyFetch();
    //eslint-disable-next-line
  }, [propertyId]);

  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      className="property-modal"
      overlayClassName="overlay-property-modal"
      contentLabel="Property Details Modal"
      preventScroll={false}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      bodyOpenClassName="property-modal-isOpen"
    >
      {isLoading ? <Spinner size="xl" /> : <Text>{property?.name}</Text>}
    </ReactModal>
  );
};

export default PropertyInformation;
