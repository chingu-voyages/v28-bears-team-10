import Head from 'next/head';
import { Box, SimpleGrid, Center, Text, Container } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function VolunteersPage() {
    return (
        <>
            <Layout>
                <Container centerContent>
                    <Text>This will be the Volunteers Sign Ip Page</Text>
                    <Text mt="5px">
                        Go back to{' '}
                        <Link href="/" color="blue">
                            home page
                        </Link>
                    </Text>
                </Container>
            </Layout>
        </>
    );
}