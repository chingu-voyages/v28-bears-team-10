import Head from 'next/head';
import useSWR from 'swr';
import { Grid } from '@chakra-ui/layout';
import Layout from '../components/Layout';
import VolunteerProfile from '../components/VolunteerProfile';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function VolunteersPage() {
    const { data, error } = useSWR('http://localhost:3000/api/devs', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <>
            <Layout color="black">
                <Grid
                    placeSelf="center"
                    pt={120}
                    color="black"
                    templateColumns="repeat(4, 1fr)"
                    gap={5}>
                    {data.map((user) => {
                        return <VolunteerProfile key={user._id} user={user} />;
                    })}
                </Grid>
            </Layout>
        </>
    );
}
