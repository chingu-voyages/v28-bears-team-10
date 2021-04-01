import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, SimpleGrid, Center, Text, Container } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import VolnteerProfile from '../components/VolunteerProfile';

export default function VolunteersPage() {
    return (
        <>
            <Layout>
                <Container color="black" centerContent>
                    <Text>This will be the Volunteers Page</Text>
                    <Text mt="5px">
                        Go back to{' '}
                        <Link href="/" color="blue">
                            home page
                        </Link>
                    </Text>
                    <VolnteerProfile />
                </Container>
            </Layout>
        </>
    );
}
