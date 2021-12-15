import React, { useEffect, useState } from "react";
import {
  Text,
  VStack,
  Spinner,
  Center,
  HStack,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import ReactModal from "react-modal";
import "./style.css";
import axios from "axios";
import Slider from "react-slick";
import toast from "react-hot-toast";
import { usePropertyContext } from "../../pages/contexts/PropertyContext.context";
import { formatMoney } from "../../utils/helper-functions";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PropertyInformation = ({ modalOpen, propertyId }) => {
  const propertyContext = usePropertyContext();
  const [isLoading, setIsLoading] = useState(true);
  const { property, setProperty, setModalOpen } = propertyContext;

  const handlePropertyFetch = async () => {
    setIsLoading(true);
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
      {isLoading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <VStack w="full" alignItems={"flex-start"}>
          <Slider {...settings}>
            {property?.media?.map((medium, i) => {
              return (
                <Box>
                  <Image src={medium?.images} alt={medium?.name} />
                </Box>
              );
            })}
          </Slider>
          <HStack alignItems={"center"} my="4">
            <Text fontSize="md">Name:</Text>
            <Heading fontSize={"lg"}>{property?.name}</Heading>
          </HStack>
          <HStack alignItems={"center"} my="4">
            <Text fontSize="md">Title:</Text>
            <Heading fontSize={"lg"}>{property?.title}</Heading>
          </HStack>
          <HStack w="full" alignItems="center" justifyContent={"space-between"}>
            <Box w="40%">
              <Text fontSize="md">Description:</Text>
              <Heading mt="1" fontSize={"lg"}>
                {property?.description}
              </Heading>
            </Box>
            <Box
              d="flex"
              flexDir={"column"}
              justifyContent={"flex-end"}
              w="40%"
            >
              <Text fontSize="md">price:</Text>
              <Heading fontSize={"lg"}>N{formatMoney(property?.price || 0)}</Heading>
            </Box>
          </HStack>
        </VStack>
      )}
    </ReactModal>
  );
};

export default PropertyInformation;
