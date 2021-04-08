import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Box,
  SimpleGrid,
  Center,
  Text,
  Container,
  Grid,
} from "@chakra-ui/react";
import Job from "../components/Job";
import Link from "next/link";
import Layout from "../components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function JobsPage() {
  const { data, error } = useSWR("http://localhost:3000/api/jobs", fetcher);

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
          gap={5}
        >
          {data.map((job) => {
            return <Job key={job._id} job={job} />;
          })}
        </Grid>
      </Layout>
    </>
  );
}
