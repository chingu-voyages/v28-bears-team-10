import React from 'react';
import { Box, Center, Container, Flex, Text, Spacer, Grid, GridItem } from '@chakra-ui/layout';
import { Tooltip, Image, Button, Avatar, Link } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
// import Link from 'next/link';
import styles from './VolunteerProfile.module.css';

export default function VolunteerProfile({ user }) {
    const {
        _id,
        skills,
        username,
        first_name,
        last_name,
        description,
        avatar,
        website,
        twitter,
        linkedin,
        github,
        date,
        email,
        location
    } = user;
    const [turned, setTurned] = React.useState(false);

    const { flipcard, cardFront, cardBack, flip } = styles;

    function handleClick() {
        setTurned(!turned);
    }
    React.useEffect(() => {
        setTurned(false);
    }, []);

    return (
        <>
            <Flex bg="blue" direction="column" w="300px" height="400px" borderRadius="10px">
                {!user && <Text color="black">Profile not found</Text>}
                <Flex
                    direction="column"
                    align="center"
                    w="100%"
                    height="37%"
                    borderBottom="orange 1px solid">
                    <Avatar
                        border="solid 1px orange"
                        mt={1}
                        w="90px"
                        h="90px"
                        mx="auto"
                        src={avatar}
                    />

                    <Text> {first_name}</Text>
                    <Text> {location}</Text>
                </Flex>
                <Flex
                    className={turned ? `${flip} ${flipcard}` : flipcard}
                    direction="column"
                    align="center"
                    justify="space-between"
                    p={2}
                    w="100%"
                    h="48%">
                    <Flex className={cardFront} direction="column" align="center">
                        <Grid pt={2} w="50%" templateColumns="1fr 1fr">
                            {skills && skills.map((skill) => <Text key={skill}>{skill}</Text>)}
                        </Grid>
                        <Text p={2}>{description && description.substr(0, 151)}</Text>
                    </Flex>
                    <Flex
                        className={cardBack}
                        direction="column"
                        align="center"
                        justify="space-between"
                        p={2}>
                        {website && (
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
                        {email && <Text py={2}>{email || 'available to connnect on social'}</Text>}
                    </Flex>
                </Flex>
                <Flex justify="center" pt={2}>
                    <Button
                        onClick={handleClick}
                        w="50%"
                        bg="orange"
                        color="white"
                        borderRadius="20px">
                        MORE INFO
                    </Button>
                </Flex>
            </Flex>
        </>
    );
}
