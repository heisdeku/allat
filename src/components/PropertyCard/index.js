import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { formatMoney } from "../../utils/helper-functions";
import "./styles.css";

export const PropertyCard = ({ img, name, description, id, ...props }) => {
  return (
    <Box w={{ sm: "89vw", md: "32%" }} my="4" mx="2" pb="4">
      <Box w={["89vw", "100%"]} className="card shadow-sm">
        {img ? (
          <Image src={img} w="100%" h="200px" />
        ) : (
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="40%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
        )}
        <VStack alignItems={"flex-start"} spacing="4" className="card-body">
          <Heading fontSize="lg" fontWeight={"700"}>
            {name}
          </Heading>
          <Text color="black" fontSize={"md"} className="card-text">
            {description}
          </Text>
          <HStack
            w="100%"
            justifyContent={"space-between"}
            alignItems="center"
            flexWrap="wrap"
            className="justify-content-between"
            mt="10"
          >
            <Box w={["100%", "65%"]} className="btn-group">
              <Button
                color="#007DE8"
                borderWidth="1px"
                borderColor="#007DE8"
                background="transparent"
                borderRadius={"0"}
                w="40%"
                type
                _hover={{
                  background: "#007DE8",
                  color: "white",
                }}
              >
                Check it out
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    `https://api.whatsapp.com/send?phone=2349097115128&text=Hey%20team%20Land%20Xpress,%20I%20would%20to%20enquiry%20about%20one%20of%20your%20property.%20The%20name%20of%20the%20property%20is%20${name}%20and%20the%20price%20is%20${formatMoney(
                      props.price
                    )}%20naira,%20thanks.`
                  )
                }
                w="40%"
                type="button"
                color="#007DE8"
                borderWidth="1px"
                borderColor="#007DE8"
                background="transparent"
                borderRadius={"0"}
                _hover={{
                  background: "#007DE8",
                  color: "white",
                }}
              >
                Enquiry About
              </Button>
            </Box>
            <Text
              fontSize={["md", "sm"]}
              fontWeight="bold"
              mt={{ sm: "10", md: "0"}}
              className="text-muted"
            >
              N{formatMoney(props.price)}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
