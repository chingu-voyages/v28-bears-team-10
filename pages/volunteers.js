import Head from 'next/head';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';
import { Box, SimpleGrid, Center, Text, Container } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import VolunteerProfile from '../components/VolunteerProfile';
import { Grid } from '@chakra-ui/layout';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function VolunteersPage() {
    const { data, error } = useSWR('http://localhost:3000/api/devs', fetcher);
    console.log(data);
    console.log(error);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <>
            <Layout color="black">
                <Container centerContent m={0}>
                    <Grid
                        placeSelf="center"
                        pt={150}
                        color="black"
                        templateColumns="repeat(4, 1fr)"
                        // templateRows="repeat(20, 1fr)"
                        gap={5}>
                        {
                            // data &&
                            data.map((user) => {
                                return <VolunteerProfile key={user._id} user={user} />;
                            })
                        }
                    </Grid>
                </Container>
            </Layout>
        </>
    );
}
