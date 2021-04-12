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
        gap={2}
        borderBottom=" 2px solid orange"
        pos="fixed"
        top={0}
        w="100vw"
        height="70px"
        // alignItems="center"
        // justifyContent="center"
        placeItems="center"
        color="black"
        px="1%"
        bg="white"
        zIndex={2}
      >
        <GridItem colSpan={2}>
          <Link href="/">
            <Text cursor="pointer" textAlign="start" fontSize={30}>
              TECHVolunteer
            </Text>
          </Link>
        </GridItem>
        <GridItem colStart={4} colEnd={9} direction="row" justify="center">
          <Box
            mx="5px"
            as="button"
            borderRadius="md"
            bg="blue"
            color="white"
            px={2}
            h={10}
            w="160px"
          >
            <Link href="/jobs">
              <a>
                <Text p="0" fontWeight="600">
                  JOBS BOARD
                </Text>
              </a>
            </Link>
          </Box>
          <Box
            mx="5px"
            as="button"
            borderRadius="md"
            bg="blue"
            color="white"
            px={2}
            h={10}
          >
            <Link href="/volunteers">
              <a>
                <Text p="0" fontWeight="600">
                  VOLUNTEERS BOARD
                </Text>
              </a>
            </Link>
          </Box>
        </GridItem>

        <GridItem colSpan={3} direction="row" display="flex">
          {!user && (
            <>
              <Link href={"/api/auth/login"}>
                <Box
                  as="button"
                  borderRadius="md"
                  bg="orange"
                  color="white"
                  px={2}
                  h={10}
                >
                  <Text fontWeight="600">LOGIN</Text>
                </Box>
              </Link>
            </>
          )}
          {user && (
            <>
              {" "}
              <Link href={"/api/auth/logout"}>
                <Box
                  mx="5px"
                  as="button"
                  borderRadius="md"
                  bg="orange"
                  color="white"
                  px={2}
                  h={10}
                >
                  <Text fontWeight="600">LOGOUT</Text>
                </Box>
              </Link>{" "}
              <Link href={`/profile/${user.sub}`}>
                <Box
                  mx="5px"
                  as="button"
                  borderRadius="md"
                  bg="orange"
                  color="white"
                  px={2}
                  h={10}
                >
                  <Text fontWeight="600">PROFILE</Text>
                </Box>
              </Link>{" "}
            </>
          )}
        </GridItem>
        <Tooltip label="Coming Soon" aria-label="A tooltip">
          <GridItem mx="5px" colStart={12}>
            <InfoOutlineIcon w={6} h={6} />
          </GridItem>
        </Tooltip>
      </Grid>
    </>
  );
}
