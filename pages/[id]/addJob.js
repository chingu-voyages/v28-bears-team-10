import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  GridItem,
  Text,
  createStandaloneToast,
  Container,
  Box,
} from "@chakra-ui/react";

import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsersContext from "../../context/users/usersContext";

import { useUser } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function addJob() {
  const usersContext = useContext(UsersContext);
  const { currentUser, getCurrentUser } = usersContext;
  const { user, error, isLoading } = useUser();

  const toast = createStandaloneToast();
  const router = useRouter();
  const [form, setForm] = useState({
    sub: user.sub,
    jobTitle: "",
    jobDescription: "",
    jobRequirements: "",
    jobExperienceLevel: "",
    jobHoursRequired: "",
    jobTechStack: "",
    postedBy: user.email,
  });

  function handleChange(e) {
    const checkedArr = [];
    if (e.target.type !== "checkbox") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    } else {
      const checkeds = document.getElementsByTagName("input");
      for (let i = 0; i < checkeds.length; i++) {
        if (checkeds[i].checked) {
          checkedArr.push(checkeds[i].value);
        }
      }
      setForm({
        ...form,
        skills: checkedArr,
      });
    }
  }

  async function createJob() {
    try {
      const res = await fetch(`http://localhost:3000/api/jobs`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createJob();
    toast({
      title: "Job added",
      description: "Your job was successfully added.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    router.push(`/profile/${user.sub}`);
  }

  return (
    <>
      <Layout>
        <Container maxW="container.lg">
          <Box border="2px solid red" mt={20}>
            {/* Style addjob form */}
            {/* @todo add other control groups */}
            <form onSubmit={handleSubmit}>
              <Text color="black">Add job</Text>

              <Grid templateColumns="1fr 1fr 1fr" columnGap={20} color="black">
                <GridItem mx={2}>
                  <FormControl id="jobTitle" isRequired my={2}>
                    <FormLabel>Job title</FormLabel>
                    <Input
                      placeholder="Add job title"
                      name="jobTitle"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl id="jobDescription" isRequired my={2}>
                    <FormLabel>Job Description</FormLabel>
                    <Input
                      name="jobDescription"
                      placeholder="Add job description"
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <Button mt={4} colorScheme="teal" type="submit">
                    Add Job
                  </Button>
                </GridItem>
              </Grid>
            </form>
          </Box>
        </Container>
      </Layout>
    </>
  );
});
