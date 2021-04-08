import { useEffect, useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, SimpleGrid, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/Layout";

import UsersContext from "../context/users/usersContext";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const usersContext = useContext(UsersContext);
  const { currentUser, getCurrentUser } = usersContext;

  const { user, error, isLoading } = useUser();

  useEffect(() => {
    user && getCurrentUser(user.sub);
  }, [user]);

  return (
    <Layout>
      <main>
        <SimpleGrid columns={2} spacing={10} pt={150}>
          <Link href="/jobs">
            <a>
              <Center
                bg="blue"
                w="400px"
                h="400px"
                p={10}
                color="white"
                borderRadius="10px"
              >
                <Text textAlign={["left", "center"]} fontSize={30}>
                  Search for a job
                </Text>
              </Center>
            </a>
          </Link>
          <Link href="/volunteers">
            <a>
              <Center
                bg="blue"
                w="400px"
                h="400px"
                p={10}
                color="white"
                borderRadius="10px"
              >
                <Text textAlign={["left", "center"]} fontSize={30}>
                  Search for a volunteer
                </Text>
              </Center>
            </a>
          </Link>
        </SimpleGrid>
      </main>

      <footer></footer>
    </Layout>
  );
}
