import Head from 'next/head';
import { Box, SimpleGrid, Center, Text, Container } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import VolunteerSignupForm from '../../components/volunteerSignup';

export default function VolunteersSignupPage() {
    return (
        <>
            <Layout>
                <Container maxW="container.lg">
                    <VolunteerSignupForm />
                </Container>
            </Layout>
        </>
    );
}
