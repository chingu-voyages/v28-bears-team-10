import React, { useEffect } from 'react';
import {
    Box,
    SimpleGrid,
    Center,
    Text,
    Container,
    Heading,
    Flex,
    Image,
    Link
} from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function profile() {
    const { user, error, isLoading } = useUser();

    useEffect(() => {
        console.log(user);
    }, []);
    return user ? (
        <>
            <Layout>
                <Container maxW="container.lg">
                    <Flex justify="center" mb={5} mt={5}>
                        <Heading color="black">Create your Volunteer Profile!</Heading>
                    </Flex>
                    <Box color="black">
                        <Image w={200} h={200} src={user.picture} alt={user.nickname} />
                        <Text>Hello, {user.email}</Text>
                        <Text>Your nickname is {user.nickname}</Text>
                        <Link href="/profile/signup">Update your profile</Link>
                    </Box>
                </Container>
            </Layout>
        </>
    ) : (
        <h1>Loading...</h1>
    );
});
