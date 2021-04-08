import React, { useEffect } from "react";
import { Flex, Text, Grid } from "@chakra-ui/layout";
import { Tooltip, Image, Button, Avatar, Link } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
// import Link from 'next/link';
import styles from "./Profile.module.css";

export default function Profile({ job }) {
  const {
    sub,
    jobTitle,
    jobDescription,
    jobRequirements,
    jobExperienceLevel,
    jobHoursRequired,
    jobTechStack,
  } = job;
  const [turned, setTurned] = React.useState(false);

  const { flipcard, cardFront, cardBack, flip } = styles;

  function handleClick() {
    setTurned(!turned);
  }
  React.useEffect(() => {
    setTurned(false);
  }, []);

  return (
    // @todo add job fields and style
    <>
      <Flex
        bg="blue"
        direction="column"
        w="250px"
        height="300px"
        borderRadius="10px"
      >
        {!job && <Text color="black">Profile not found</Text>}
        <Flex
          direction="column"
          align="center"
          w="100%"
          height="37%"
          borderBottom="orange 1px solid"
        >
          {/* <Avatar
            border="solid 1px orange"
            mt={1}
            w="60px"
            h="60px"
            mx="auto"
            src={avatar}
          /> */}

          <Text> {jobTitle}</Text>
          <Text> {jobDescription}</Text>
        </Flex>
        <Flex
          className={turned ? `${flip} ${flipcard}` : flipcard}
          direction="column"
          align="center"
          justify="space-between"
          py={2}
          w="100%"
          h="51%"
        >
          <Flex className={cardFront} direction="column" align="center">
            {/* <Grid pt={0} w="50%" templateColumns="1fr 1fr">
              {skills &&
                skills.map((skill) => (
                  <Text fontSize="15px" key={skill}>
                    {skill}
                  </Text>
                ))}
            </Grid> */}
            {/* <Text fontSize="15px" px={2}>
              {description && description.substr(0, 151)}
            </Text> */}
          </Flex>
          <Flex
            className={cardBack}
            direction="column"
            align="center"
            justify="space-between"
            p={0}
            fontSize="14px"
          >
            {/* {website && (
              <Link href={website} isExternal>
                <Text>Website</Text>
              </Link>
            )}
            {github && (
              <Link href={github} isExternal>
                <Text>Github</Text>
              </Link>
            )}
            {linkedin && (
              <Link href={linkedin} isExternal>
                <Text>Linkedin</Text>
              </Link>
            )}
            {twitter && (
              <Link href={twitter} isExternal>
                <Text>Twitter</Text>
              </Link>
            )}
            {email && (
              <Text transform="translateY(-5px)" py={2}>
                {email || "available to connnect on social"}
              </Text>
            )} */}
          </Flex>
        </Flex>
        <Flex justify="center" pt={2}>
          <Button
            onClick={handleClick}
            w="35%"
            h="20px"
            bg="orange"
            color="white"
            borderRadius="10px"
            fontSize="13px"
          >
            MORE INFO
          </Button>
          {job && (
            <Button
              w="35%"
              h="20px"
              bg="orange"
              color="white"
              borderRadius="10px"
              fontSize="13px"
            >
              <Link href={`/profile/${sub}`}>VISIT PROFILE</Link>
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
}
