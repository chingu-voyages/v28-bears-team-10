import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Text,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import { Tooltip, Button } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0";

export default function Nav({ children }) {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Grid
        templateColumns="repeat(11, 1fr) 40px"
        templateRows={{ sm: "30px 1fr" }}
        rowGap={0}
        columnGap={2}
        borderBottom=" 2px solid orange"
        pos="fixed"
        top={0}
        w="100vw"
        height={"70px"}
        placeItems="center"
        color="black"
        px={{ base: "1%", sm: "0" }}
        bg="white"
        zIndex={2}
      >
        <GridItem colSpan={{ base: 12, md: 2, lg: 2, xl: 2 }}>
          <Link href="/">
            <Text
              cursor="pointer"
              textAlign="start"
              fontSize={{ xl: "30px", lg: "30px", md: "20px", sm: "25px" }}
              ml={{ md: "10px" }}
            >
              TECHVolunteer
            </Text>
          </Link>
        </GridItem>
        <GridItem
          colStart={{ base: 4, sm: 1 }}
          colEnd={{ base: 9, sm: 9 }}
          direction="row"
          justifyContent={{ base: "center", sm: "start" }}
        >
          <Box
            mx={{ base: "5px", sm: "2px" }}
            as="button"
            borderRadius="md"
            bg="blue"
            color="white"
            px={2}
            h={{ sm: "25px", md: "30px", lg: "50px", xl: "50px" }}
            w={{ xl: "160px", lg: "160px", md: "100px" }}
          >
            <Link href="/jobs">
              <a>
                <Text
                  p="0"
                  fontWeight="600"
                  fontSize={{ sm: "10px", md: "13px", lg: "16px", xl: "20px" }}
                >
                  JOBS BOARD
                </Text>
              </a>
            </Link>
          </Box>
          <Box
            mx={{ base: "5px", sm: "2px" }}
            as="button"
            borderRadius="md"
            bg="blue"
            color="white"
            px={2}
            h={{ sm: "25px", md: "30px", lg: "50px", xl: "50px" }}
          >
            <Link href="/volunteers">
              <a>
                <Text
                  p="0"
                  fontWeight="600"
                  fontSize={{ sm: "10px", md: "13px", lg: "16px", xl: "20px" }}
                >
                  VOLUNTEERS BOARD
                </Text>
              </a>
            </Link>
          </Box>
        </GridItem>
        <GridItem
          colSpan={3}
          colStart={{ sm: 10 }}
          colEnd={{ sm: 12 }}
          direction="row"
          display="flex"
        >
          {!user && (
            <>
              <Tooltip label="Coming Soon" aria-label="A tooltip">
                <Link href={"/api/auth/login"}>
                  <Box
                    mx={{ base: "5px", sm: "2px" }}
                    as="button"
                    borderRadius="md"
                    bg="blue"
                    color="white"
                    px={2}
                    h={{ sm: "25px", md: "30px", lg: "50px", xl: "50px" }}
                  >
                    <Text
                      p="0"
                      fontWeight="600"
                      fontSize={{ sm: "10px", md: "15px" }}
                    >
                      SIGN UP
                    </Text>
                  </Box>
                </Link>
              </Tooltip>
              <Link href={"/api/auth/login"}>
                <Box
                  mx={{ base: "5px", sm: "2px" }}
                  as="button"
                  borderRadius="md"
                  bg="orange"
                  color="white"
                  px={2}
                  h={{ sm: "25px", md: "30px", lg: "50px", xl: "50px" }}
                >
                  <Text
                    fontWeight="600"
                    fontSize={{
                      sm: "10px",
                      md: "13px",
                      lg: "16px",
                      xl: "20px",
                    }}
                  >
                    LOGIN
                  </Text>
                </Box>
              </Link>
            </>
          )}
          {user && (
            <>
              {" "}
              <Link href={"/api/auth/logout"}>
                <Box
                  mx={{ base: "5px", sm: "2px" }}
                  as="button"
                  borderRadius="md"
                  bg="orange"
                  color="white"
                  px={2}
                  h={{ sm: "25px", md: "30px", lg: "50px", xl: "50px" }}
                >
                  <Text
                    fontWeight="600"
                    fontSize={{
                      sm: "10px",
                      md: "13px",
                      lg: "16px",
                      xl: "20px",
                    }}
                  >
                    LOGOUT
                  </Text>
                </Box>
              </Link>{" "}
              <Link href={`/profile/${user.sub}`}>
                <Box
                  mx={{ base: "5px", sm: "2px" }}
                  as="button"
                  borderRadius="md"
                  bg="orange"
                  color="white"
                  px={2}
                  h={{ sm: "25px", md: "30px", lg: "50px", xl: "50px" }}
                >
                  <Text
                    fontWeight="600"
                    f
                    fontSize={{
                      sm: "10px",
                      md: "13px",
                      lg: "16px",
                      xl: "20px",
                    }}
                  >
                    PROFILE
                  </Text>
                </Box>
              </Link>{" "}
            </>
          )}
        </GridItem>
        <Tooltip
          display={{ sm: "none" }}
          label="Coming Soon"
          aria-label="A tooltip"
        >
          <GridItem display={{ sm: "none" }} mx="5px" colStart={12}>
            <InfoOutlineIcon w={6} h={6} />
          </GridItem>
        </Tooltip>
      </Grid>
    </>
  );
}
