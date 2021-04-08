import React, { useContext, useEffect } from "react";
import {
  Box,
  Text,
  Container,
  Image,
  Link,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  createStandaloneToast,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsersContext from "../../context/users/usersContext";
import { useRouter } from "next/router";

export default withPageAuthRequired(function profile() {
  const toast = createStandaloneToast();
  const router = useRouter();
  const usersContext = useContext(UsersContext);
  const { currentUser, getCurrentUser } = usersContext;
  const { user, error, isLoading } = useUser();

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  useEffect(() => {
    user && getCurrentUser(router.query.id);
  }, [user]);

  // Add job
  async function addJob() {
    try {
      console.log("add job");
    } catch (error) {
      console.log(error);
    }
  }

  // Delete profile
  async function onDelete() {
    try {
      if (currentUser) {
        console.log(currentUser._id);

        const res = await fetch(
          `http://localhost:3000/api/users/${currentUser._id}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
      }
      await router.push("/api/auth/logout");

      toast({
        title: "Profile deleted",
        description: "Your profile was successfully deleted.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (user && currentUser) {
    return (
      <Layout>
        <Container maxW="container.lg">
          <Box color="black" mt={20}>
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

            {/* Update  */}
            {currentUser.sub === user.sub && (
              <Button colorScheme="teal">
                <Link href="/profile/update">Update your profile</Link>
              </Button>
            )}

            {/* Delete */}
            {currentUser.sub === user.sub && (
              <>
                <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                  Delete your profile
                </Button>

                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay color="black">
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => onDelete()}
                          ml={3}
                        >
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </>
            )}

            {currentUser.sub === user.sub &&
              currentUser.userType === "charity" && (
                <Button colorScheme="cyan" onClick={() => addJob()}>
                  Add Job
                </Button>
              )}
          </Box>
        </Container>
      </Layout>
    );
  } else if (user) {
    return (
      <Layout>
        <Container maxW="container.lg">
          <Box color="black" mt={20}>
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
