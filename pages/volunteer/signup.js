import Head from 'next/head';
import { Box, SimpleGrid, Center, Text, Container, Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import VolunteerSignupForm from '../../components/volunteerSignup';

export default function VolunteersSignupPage() {
    return (
        <>
            <Layout>
                <Container maxW="container.lg">
                    <Flex justify="center" mb={5}>
                        <Heading centercontent>Create your Volunteer Profile!</Heading>
                    </Flex>
                    <VolunteerSignupForm />
                </Container>
            </Layout>
        </>
    );
}
