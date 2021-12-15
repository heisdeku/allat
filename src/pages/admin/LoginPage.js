import React, { useState } from "react";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
  Heading,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import { useAdminContext } from "../contexts/AdminContext.context";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import toast from "react-hot-toast";

export const AdminLoginPage = () => {
  const history = useHistory();
  const adminContext = useAdminContext();
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const { setUser } = adminContext;

  const logUserIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://landxpress.herokuapp.com/api/login/",
        loginDetails
      );
      const token = response.data.token;
      await localStorage.setItem("token_auth", token);
      await setUser({
        username: loginDetails.username
      })
      setLoading(false);
      history.push("/admin")
    } catch (e) {
      setLoading(false);      
      let message = e?.response?.data?.non_field_errors[0] || "An error occurred";
      toast.error(message);
    } 
  };

  const [passwordShow, setPasswordShow] = React.useState(false);
  return (
    <Box w="100vw" h="100vh" bg={"brand.primaryBG"}>
      <Container
        position={{
          base: "unset",
          md: "fixed",
          lg: "fixed",
        }}
        zIndex={["0", "0", "400"]}
        shadow={["none", "none", "lg"]}
        left={["0", "0", "50%"]}
        w={["100%", "600px", "500px"]}
        transform={{ md: "translateX(-50%)" }}
        h={{ md: "90vh", base: "100vh" }}
        p={{ base: "24px", md: "0" }}
        color={"brand.textColorOne"}
        px={{ base: "" }}
        mt={{ base: "0rem", md: "2.5rem" }}
        borderRadius={{ md: "10px" }}
        bg="white"
        // borderTopLeftRadius="10px"
        display={["block", "block", "block"]}
        overflowY="scroll"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box p="4">
          <Heading mt="4" color="black">
            Howdy Admin, Welcome!
          </Heading>
          <form>
            <VStack alignItems="flex-start" spacing="5" my="8">
              <Box w="100%">
                <Text
                  mb="2"
                  fontSize={"md"}
                  color="#BDBDBD"
                  textTransform={"uppercase"}
                >
                  your username
                </Text>
                <InputGroup w="full">
                  <InputLeftElement
                    py="8"
                    pointerEvents="none"
                    children={<Text color="brand.textColorTwo">@</Text>}
                  />
                  <Input
                    w="full"
                    fontSize="20px"
                    _placeholder={{
                      color: "brand.darkishBrown",
                    }}
                    value={loginDetails.username}
                    onChange={(e) =>
                      setLoginDetails({
                        ...loginDetails,
                        username: e.target.value,
                      })
                    }
                    color="brand.darkishBrown"
                    placeholder="zeddcubana"
                    border="1px"
                    borderColor="brand.darkishBrown"
                    type="text"
                    py="8"
                  />
                </InputGroup>
              </Box>
              <Box w="100%">
                <Text
                  mb="2"
                  fontSize={"xs"}
                  color="#BDBDBD"
                  textTransform={"uppercase"}
                >
                  your password
                </Text>
                <InputGroup w="full">
                  <InputLeftElement
                    pointerEvents="none"
                    py="8"
                    children={<IoMdMail color="brand.darkishBrown" />}
                  />
                  <Input
                    w="full"
                    fontSize="20px"
                    _placeholder={{
                      color: "brand.darkishBrown",
                    }}
                    color="brand.darkishBrown"
                    placeholder="e.g. Zeddpay2021"
                    border="1px"
                    borderColor="brand.darkishBrown"
                    py="8"
                    value={loginDetails.password}
                    onChange={(e) =>
                      setLoginDetails({
                        ...loginDetails,
                        password: e.target.value,
                      })
                    }
                    type={passwordShow ? "text" : "password"}
                  />
                  <InputRightElement
                    py="8"
                    cursor="pointer"
                    children={
                      passwordShow ? (
                        <Text
                          fontSize={"sm"}
                          color="brand.darkishBrown"
                          textTransform={"uppercase"}
                          pr="5"
                          onClick={() => setPasswordShow(false)}
                        >
                          Hide
                        </Text>
                      ) : (
                        <Text
                          fontSize={"sm"}
                          color="brand.thickDark"
                          textTransform={"uppercase"}
                          pr="5"
                          onClick={() => setPasswordShow(true)}
                        >
                          Reveal
                        </Text>
                      )
                    }
                  />
                </InputGroup>
              </Box>
              <Button
                type="button"
                px="4"
                mt="10"
                onClick={() => logUserIn()}
                className="btn btn-primary btn-lg px-4 me-md-2"
                _hover={{
                  background: "transparent",
                  borderColor: "#007DE8",
                  borderWidth: "1px",
                  color: "#007DE8",
                }}
                disbaled={loading}
              >
                {loading ? <Spinner color="white" /> : <Text>Login</Text>}
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
