import React, { useEffect, useState } from "react";
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
import SEO from "../components/SEO";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function JobsPage() {
  const [loading, setLoading] = useState(false);
  const { data, error } = useSWR("http://localhost:3000/api/jobs", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <SEO title="Jobs" />
      <Layout color="black">
        <Grid
          fontFamily="Glacial Indifference"
          placeSelf="center"
          mx={{ sm: "10px", md: "20px", lg: "80px" }}
          pt={10}
          color="black"
          templateColumns={{
            sm: "1fr",
            md: "1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr",
          }}
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
