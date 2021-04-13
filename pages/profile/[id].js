import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Container,
  Image,
  Link,
  Button,
  Heading,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  createStandaloneToast,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsersContext from "../../context/users/usersContext";
import { useRouter } from "next/router";
import { Grid, GridItem } from "@chakra-ui/layout";

export default withPageAuthRequired(function profile() {
  const [loading, setLoading] = useState(false);
  const toast = createStandaloneToast();
  const router = useRouter();
  const usersContext = useContext(UsersContext);
  const { currentUser, getCurrentUser } = usersContext;
  const { user, error, isLoading } = useUser();

  const [jobs, setJobs] = useState();

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  useEffect(() => {
    user && getCurrentUser(router.query.id);
    getJobs();
  }, [user, currentUser]);

  useEffect(() => {
    setLoading(true);
    currentUser && setLoading(false);
  }, [currentUser]);

  // Get all jobs
  async function getJobs() {
    try {
      const res = await axios.get("http://localhost:3000/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(error);
    }
  }

  // Delete job
  async function deleteJob(id) {
    try {
      if (currentUser) {
        const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      }

      toast({
        title: "Job deleted",
        description: "Your job was successfully deleted.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      getJobs();
    } catch (error) {
      console.log(error);
    }
  }

  // Delete user profile
  async function onDelete() {
    try {
      if (currentUser) {
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

  if (loading) {
    return (
      <Layout>
        <Container maxW="container.lg">
          <Flex
            alignItems="center"
            justifyContent="center"
            color="black"
            height="90vh"
            mt={20}
          >
            <Spinner size="xl" />
          </Flex>
        </Container>
      </Layout>
    );
  }
  if (user && currentUser) {
    return (
      <>
        <Layout>
          <Container maxW="container.lg">
            {/* <Flex> */}
            <Flex direction="row" color="black" mt={20} mb={3}>
              <Image
                w={200}
                h={200}
                src={currentUser.avatar}
                alt={currentUser.username}
              />
              <Grid
                templateColumns="1fr 1fr"
                // direction="column"
                px={2}
                // justifyContent="space-between"
                py={1}
              >
                <GridItem>
                  <Text mb={1}>
                    <span style={{ fontWeight: "800" }}>Username:</span>{" "}
                    {currentUser.username}
                  </Text>
                  <Text mb={1}>
                    <span style={{ fontWeight: "800" }}>Email:</span>{" "}
                    {currentUser.email}
                  </Text>
                  {currentUser.location && (
                    <Text mb={1}>
                      <span style={{ fontWeight: "800" }}>Location: </span>
                      {currentUser.location}
                    </Text>
                  )}
                  {currentUser.description && (
                    <Text>
                      <span style={{ fontWeight: "800" }}>Description:</span>{" "}
                      <br />
                      {currentUser.description}
                    </Text>
                  )}
                </GridItem>

                {/* {currentUser.skills && skills.map((skill) => <Text>{skill}</Text>)} */}
                <GridItem>
                  {currentUser.website && (
                    <Text>
                      {" "}
                      <span style={{ fontWeight: "800" }}>Website: </span>
                      {currentUser.website}
                    </Text>
                  )}

                  {currentUser.twitter && (
                    <Text>
                      <span style={{ fontWeight: "800" }}>Twitter: </span>
                      {currentUser.twitter}
                    </Text>
                  )}

                  {currentUser.linkedin && (
                    <Text>
                      <span style={{ fontWeight: "800" }}>LinkedIn: </span>
                      {currentUser.linkedin}
                    </Text>
                  )}

                  {currentUser.github && (
                    <Text>
                      <span style={{ fontWeight: "800" }}>Github: </span>
                      {currentUser.github}
                    </Text>
                  )}
                </GridItem>
              </Grid>
            </Flex>
            {/* Update  */}
            <Flex
              w="40%"
              justifyContent="space-between"
              placeSelf="center"
              mb={3}
            >
              {currentUser.sub === user.sub && (
                <Link href="/profile/update">
                  <Button colorScheme="teal">Update Profile</Button>
                </Link>
              )}

              {/* Delete */}
              {currentUser.sub === user.sub && (
                <>
                  <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                    Delete Profile
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
                  <Link href={`/${router.query.id}/addJob`}>
                    <Button colorScheme="cyan">Add Job</Button>
                  </Link>
                )}
            </Flex>

            {/* Jobs */}
            {currentUser.userType === "charity" && jobs && jobs.length > 0 && (
              <>
                {jobs.filter((job) => job.postedBy === currentUser.email)
                  .length !== 0 && (
                  <Heading size="xl" color="black" mb={1}>
                    Posted Jobs:
                  </Heading>
                )}

                <Box color="black">
                  {jobs
                    .filter((job) => job.postedBy === currentUser.email)
                    .map((job, index) => (
                      /* @todo style jobs boxes */
                      <Box key={index} border="2px solid orange" mb={2} p={2}>
                        <Heading mb={2} fontSize="20px">
                          {job.jobTitle}
                        </Heading>
                        <Text>{job.jobDescription}</Text>

                        {job.postedBy === user.email && (
                          <Button
                            onClick={() => deleteJob(job._id)}
                            colorScheme="red"
                            mt={2}
                          >
                            Delete
                          </Button>
                        )}
                      </Box>
                    ))}
                </Box>
              </>
            )}
          </Container>
        </Layout>
      </>
    );
  }
  if (user) {
    return (
      <>
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
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
});
