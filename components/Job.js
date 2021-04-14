import React, { useEffect } from "react";
import { Flex, Text, Grid, Heading, GridItem } from "@chakra-ui/layout";
import { Tooltip, Image, Button, Avatar, Link } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import styles from "./Profile.module.css";

export default function JobPosting({ job }) {
  const {
    sub,
    jobTitle,
    jobDescription,
    jobRequirements,
    jobExperienceLevel,
    jobHoursRequired,
    jobTechStack,
  } = job;

  return (
    <>
      <Flex
        bg="blue"
        direction="column"
        w="100%"
        minHeight="400px"
        borderRadius="10px"
      >
        {!job && <Text color="black">Profile not found</Text>}
        <Flex
          position="relative"
          p={3}
          flexDirection="column"
          minHeight="400px"
          height="auto"
        >
          <Heading fontSize="30px"> {jobTitle}</Heading>
          <Text> {jobDescription}</Text>
        </Flex>
        <Flex justifyContent="center" alignContent="center" py={2}>
          {job && (
            <Button w="35%" bg="orange" color="white" borderRadius="10px">
              <Link href={`/profile/${sub}`}>VISIT COMPANY PROFILE</Link>
            </Button>
          )}
        </Flex>
        <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }}>
          <GridItem>{jobRequirements}</GridItem>
          <GridItem>{jobExperienceLevel}</GridItem>
          <GridItem>{jobHoursRequired}</GridItem>
          <GridItem>{jobTechStack}</GridItem>
        </Grid>
      </Flex>
    </>
  );
}
