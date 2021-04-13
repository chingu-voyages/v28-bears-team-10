import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import { Button, Container, Flex, Link } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="" />
        <meta
          name="description"
          content="Chinu.io project - an app that connects charities and volunteers to help with digital products andissues"
        />
      </Head>
      <Nav />
      <Flex
        maxW="100%"
        my="0"
        mx="auto"
        justify="center"
        align="center"
        direction="column"
      >
        <Flex mt="80px" ml={{ sm: "10px", md: "20px", lg: "155px" }} w="100%">
          <Link color="black" href="/">
            <Button bg="blue" color="white">
              Back
            </Button>
          </Link>
        </Flex>
        {children}
      </Flex>
    </>
  );
}
