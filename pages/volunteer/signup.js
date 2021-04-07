import Head from 'next/head';
import { Box, SimpleGrid, Center, Text, Container, Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import VolunteerSignupForm from '../../components/volunteerSignup';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function VolunteersSignupPage() {
    return (
        <>
            <Layout>
                <Container maxW="container.lg">
                    <Flex justify="center" mb={5} mt={5}>
                        <Heading color="black">Create your Volunteer Profile!</Heading>
                    </Flex>
                    <VolunteerSignupForm />
                </Container>
            </Layout>
        </>
    );
});
