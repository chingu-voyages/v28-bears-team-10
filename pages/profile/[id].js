import React, { useContext, useEffect } from "react";
import {
  Box,
  Text,
  Container,
  Heading,
  Flex,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsersContext from "../../context/users/usersContext";

export default withPageAuthRequired(function profile() {
  const usersContext = useContext(UsersContext);
  const { currentUser, getCurrentUser } = usersContext;
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    user && getCurrentUser(user.sub);
  }, [user]);

  if (user && currentUser) {
    return (
      <Layout>
        <Container maxW="container.lg">
          <Box color="black" border="2px solid red" mt={20}>
            <Image
              w={200}
              h={200}
              src={currentUser.avatar}
              alt={currentUser.username}
            />
            <Text>Your username is {currentUser.username}</Text>
            <Text>Your email is {currentUser.email}</Text>
            {currentUser.location && (
              <Text>Your location is {currentUser.location}</Text>
            )}
            {currentUser.description && (
              <Text>Your description is {currentUser.description}</Text>
            )}

            {/* {currentUser.skills && skills.map((skill) => <Text>{skill}</Text>)} */}

            {currentUser.website && (
              <Text>Your website is {currentUser.website}</Text>
            )}

            {currentUser.twitter && (
              <Text>Your twitter is {currentUser.twitter}</Text>
            )}

            {currentUser.linkedin && (
              <Text>Your linkedin is {currentUser.linkedin}</Text>
            )}

            {currentUser.github && (
              <Text>Your github is {currentUser.github}</Text>
            )}

            <Button colorScheme="teal">Update your profile</Button>

            <Button colorScheme="red">Delete your profile</Button>

            {currentUser.userType === "charity" && (
              <Button colorScheme="cyan">Add Job</Button>
            )}
          </Box>
        </Container>
      </Layout>
    );
  } else if (user) {
    return (
      <Layout>
        <Container maxW="container.lg">
          <Box color="black" border="2px solid red" mt={20}>
            <Image w={200} h={200} src={user.picture} alt={user.nickname} />
            <Text>Your nickname is {user.nickname}</Text>
            <Text>Your email is {user.email}</Text>

            <Button colorScheme="teal">
              <Link href="/profile/signup">Create your profile</Link>
            </Button>
          </Box>
        </Container>
      </Layout>
    );
  } else {
    return <h1>Loading...</h1>;
  }
});
