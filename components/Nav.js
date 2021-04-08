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

export default function Nav({ children }) {

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
        placeItems="center"
        color="black"
        px="1%"
        bg="white"
        zIndex={2}
      >
        <GridItem colSpan={2}>
          <Text textAlign="start" fontSize={30}>
            TECHVolunteer
          </Text>
        </GridItem>
        <GridItem colStart={4} colEnd={8} direction="row" justify="center">
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

        <GridItem pl="80px" colStart={8} colEnd={12}>
          <Tooltip label="Coming Soon" aria-label="A tooltip">
            <Box
              mx="5px"
              as="button"
              borderRadius="md"
              bg="blue"
              color="white"
              px={2}
              h={10}
            >
              <Text p="0" fontWeight="600" fontSize="14px">
                CHARITY SIGN UP
              </Text>
            </Box>
          </Tooltip>
          <Link href="/volunteer/signup">
            <Box
              mx="5px"
              as="button"
              borderRadius="md"
              bg="orange"
              color="white"
              px={2}
              h={10}
            >
              <Text fontWeight="600">VOLUNTEER SIGN UP</Text>
            </Box>
          </Link>
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