import React from "react";
import "./styles.css";
import { PropertyCard } from "../PropertyCard";
import {
  Spinner,
  Box,
  Text,
  Center,
  Heading,
  Container,
  HStack,
} from "@chakra-ui/react";
import { usePropertyContext } from "../../pages/contexts/PropertyContext.context";
export const PropertyList = () => {
  const propertyContext = usePropertyContext();
  const { loading, properties } = propertyContext

  return (
    <Box>
      <Container maxW="1240px" py="5" bg="#ffffff" textAlign="center">
        <HStack py={{ md: "5" }}>
          <Box w="75%" mx="auto">
            <Heading>Property Listings</Heading>
            <Text className="lead text-muted">
              These are currently the property that our virtual inspection
              service currently covers
            </Text>
          </Box>
        </HStack>
      </Container>
      <Box py="5" mt="4" className="album bg-light">
        <Container id="#properties" maxW="1200px">
          {loading ? (
            <Center w="full">
              <Spinner />
            </Center>
          ) : properties.length < 1 ? (
            <Text>No Property Listed yet</Text>
          ) : (
            <HStack              
              flexWrap={"wrap"}
              overflowX={"hidden"}
              justifyContent={"space-between"}
              mb="4"
            >
              {properties.map((property, i) => {
                return (
                  <PropertyCard
                    key={i}
                    img={property?.media[0]?.images}
                    {...property}
                  />
                );
              })}
              S
            </HStack>
          )}
        </Container>
      </Box>
    </Box>
  );
};
