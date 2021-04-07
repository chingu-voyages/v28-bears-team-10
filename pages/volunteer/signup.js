import Head from 'next/head';
import { Box, SimpleGrid, Center, Text, Container, Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import SignupForm from '../../components/Signup';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function SignupPage() {
    return (
        <>
            <Layout>
                <Container maxW="container.lg">
                    <Flex justify="center" mb={5} mt={5}>
                        <Heading color="black">Create your Volunteer Profile!</Heading>
                    </Flex>
                    <SignupForm />
                </Container>
            </Layout>
        </>
    );
});
