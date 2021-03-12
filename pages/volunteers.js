import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, SimpleGrid, Center, Text, Container } from "@chakra-ui/react";
import Link from "next/link";

export default function VolunteersPage() {
  return (
    <>
      <Container mt="200px" centerContent>
        <Text>This will be the Volunteers Page</Text>
        <Text mt="5px">
          Go back to{" "}
          <Link href="/" color="blue">
            home page
          </Link>
        </Text>
      </Container>
    </>
  );
}
