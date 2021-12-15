import React from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import "./styles.css";

export const HeroSection = () => {
  return (
    <Box minH="80vh" d="flex" alignItems="center" backgroundSize={"contain"}>
      <Container centerContent h="100%" maxW="100vw" py="5">
        <HStack
          h="100%"
          d="flex"
          flexDirection={{ base: "row", lg: "row-reverse" }}
          alignItems={"center"}
          spacing="5"
          py="5"
          overflowX={"hidden"}
        >
          <Box className="col-10 col-sm-8 col-lg-5">
            <Image
              src="http://iselllagos.com/wp-content/uploads/2021/02/Hero.png"
              d="block"
              transform={"scale(1.05)"}              
              mx={{ lg: "auto" }}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </Box>
          <VStack alignItems={"start"}>
            <Heading
              textAlign={"left"}
              fontWeight={"bold"}
              fontSize="5xl"
              mb="3"
              lh="1"
              w="65%"
            >
              Virtual Inspection Just got better
            </Heading>
            <Text className="lead">
              We're providing a better and easier solution to purchasing
              properties in Nigeria, through our virtual inspection service,
              we're able to provide our users with a way of verify each property
              listed information, guaranty their safety and make them have get
              back the time they could lose to transport
            </Text>
            <Box
              gap={"2"}
              d={{ base: "grid", md: "flex" }}
              justifyContent={{ md: "start " }}
              className="d-grid gap-2 d-md-flex justify-content-md-start"
            >
              <Button
                type="button"
                px="4"
                as="a"
                href="#properties"                
                className="btn btn-primary btn-lg px-4 me-md-2"
                _hover={{
                  background: "transparent",
                  borderColor: "#007DE8",
                  borderWidth: "1px",
                  color: "#007DE8"
                }}
              >
                Check the properties
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/+2349097115128")}
                target="_blank"
                px="12"
                rel="noreferrer"
                color="#007DE8"
                borderWidth="1px"
                borderColor="#007DE8"
                background="transparent"
                _hover={{
                  background: "#007DE8",
                  color: "white"
                }}
              >
                Chat with our CEO
              </Button>
            </Box>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};
