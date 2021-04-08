import React, { useState, useContext, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import CountrySelector from "./CountrySelector";
import SkillsSelector from "./SkillsSelector";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0";

import UsersContext from "../context/users/usersContext";

export default function Update() {
  const usersContext = useContext(UsersContext);
  const { currentUser, getCurrentUser } = usersContext;
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    user && getCurrentUser(user.sub);
  }, []);

  const router = useRouter();
  const [form, setForm] = useState({
    sub: user.sub,
    userType: currentUser && currentUser.userType ? currentUser.userType : "",
    username: currentUser && currentUser.username ? currentUser.username : "",
    email: user.email,
    avatar: user.picture,
    profileUpdated: true,
    location: currentUser && currentUser.location ? currentUser.location : "",
    website: currentUser && currentUser.website ? currentUser.website : "",
    github: currentUser && currentUser.github ? currentUser.github : "",
    linkedin: currentUser && currentUser.linkedin ? currentUser.linkedin : "",
    twitter: currentUser && currentUser.twitter ? currentUser.twitter : "",
    skills: currentUser && currentUser.skills ? currentUser.skills : [],
    description:
      currentUser && currentUser.description ? currentUser.description : "",
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

  async function create() {
    try {
      // @todo fix put request not working
      const res = await fetch(
        `http://localhost:3000/api/users${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await create();
    router.push(`/profile/${user.sub}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Text color="black">Update your profile</Text>

        {/* @todo prepopulate form with previous info */}

        {/* CHARITY FORM */}
        {currentUser && currentUser.userType === "charity" && (
          <Grid templateColumns="1fr 1fr 1fr" columnGap={20} color="black">
            <GridItem mx={2}>
              <FormControl id="username" isRequired my={2}>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Choose username"
                  name="username"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="email" isRequired my={2}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={user.email} name="email" disabled />
              </FormControl>
              <FormControl id="country" my={2}>
                <FormLabel>Country</FormLabel>
                <CountrySelector onChange={handleChange} />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="website" my={2}>
                <FormLabel>Website</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your website url"
                  name="website"
                  onChange={handleChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="skills" my={2}>
                <FormLabel>Skills</FormLabel>
                <FormHelperText mb={1}>
                  Choose some skills your future volunteer needs to have
                </FormHelperText>
                <SkillsSelector onChange={handleChange} />
              </FormControl>
              <FormControl id="description" my={2}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  maxLength="150"
                  placeholder="Write a sentance or two about your charity and its mission "
                  name="description"
                  onChange={handleChange}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </GridItem>
          </Grid>
        )}

        {/* VOLUNTEER FORM */}
        {currentUser && currentUser.userType === "volunteer" && (
          <Grid templateColumns="1fr 1fr 1fr" columnGap={20} color="black">
            <GridItem mx={2}>
              <FormControl id="username" isRequired my={2}>
                <FormLabel>User name</FormLabel>
                <Input
                  placeholder="Choose username"
                  name="username"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="email" isRequired my={2}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={user.email} name="email" disabled />
              </FormControl>
              <FormControl id="country" my={2}>
                <FormLabel>Country</FormLabel>
                <CountrySelector onChange={handleChange} />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="website" my={2}>
                <FormLabel>Website</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your website url"
                  name="website"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="github" my={2}>
                <FormLabel>Github</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your Github"
                  name="github"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="linkedin" my={2}>
                <FormLabel>Linkedin</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your linkedin"
                  name="linkedin"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="twitter" my={2}>
                <FormLabel>Twitter</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your twitter handle"
                  name="twitter"
                  onChange={handleChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="skills" my={2}>
                <FormLabel>Skills</FormLabel>
                <FormHelperText mb={1}>
                  We recommend to pick up to 4 that you are most confident with
                </FormHelperText>
                <SkillsSelector onChange={handleChange} />
              </FormControl>
              <FormControl id="description" my={2}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  maxLength="150"
                  placeholder="Write a sentance or two about yourself "
                  name="description"
                  onChange={handleChange}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button mt={4} colorScheme="teal" type="submit">
                Update
              </Button>
            </GridItem>
          </Grid>
        )}
      </form>
    </>
  );
}
