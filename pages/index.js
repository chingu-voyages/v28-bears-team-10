import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, SimpleGrid, Center, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const orange = "#FF6700";
  const blue = "#268ED0";
  return (
    <div className={styles.container}>
      <Head>
        <title>Chingu Bears</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SimpleGrid columns={2} spacing={10}>
          <Link href="/">
            <a>
              <Center
                bg={blue}
                w="400px"
                h="400px"
                p={10}
                color="white"
                borderRadius="10px"
              >
                <Text textAlign={["left", "center"]} fontSize={30}>
                  Search for a job or post a job
                </Text>
              </Center>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Center
                bg={blue}
                w="400px"
                h="400px"
                p={10}
                color="white"
                borderRadius="10px"
              >
                <Text textAlign={["left", "center"]} fontSize={30}>
                  Search for or register as a volunteer
                </Text>
              </Center>
            </a>
          </Link>
        </SimpleGrid>
      </main>

      <footer></footer>
    </div>
  );
}
