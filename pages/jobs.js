import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, SimpleGrid, Center, Text, Container } from "@chakra-ui/react";
import Link from "next/link";

export default function JobsPage() {
  return (
    <>
      <Container mt="200px" centerContent>
        <Text>This will be the Jobs Page</Text>
        <Text mt="5px" color="colors.blue">
          Go back to{" "}
          <Link href="/" color="blue">
            home page
          </Link>
        </Text>
      </Container>
    </>
  );
}
