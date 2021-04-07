import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import CountrySelector from "./CountrySelector";
import SkillsSelector from "./SkillsSelector";

import { useUser } from "@auth0/nextjs-auth0";

const CharityForm = ({ handleChange }) => {
  const { user, error, isLoading } = useUser();
  return (
    <Grid templateColumns="1fr 1fr 1fr" columnGap={20} color="black">
      <GridItem mx={2}>
        <FormControl id="username" isRequired my={2}>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="Choose username "
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
  );
};

export default CharityForm;