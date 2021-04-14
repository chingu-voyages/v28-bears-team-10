import React from "react";
import useSWR from "swr";
import { Grid } from "@chakra-ui/layout";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import SEO from "../components/SEO";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function VolunteersPage() {
  const { data, error } = useSWR(
    "https://v28-bears-team-10-kappa.vercel.app/api/users",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <SEO title="Volunteers" />
      <Layout color="black">
        <Grid
          placeSelf="center"
          pt={10}
          color="black"
          fontFamily="Glacial Indifference"
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={5}
        >
          {data
            .filter((user) => user.userType === "volunteer")
            .map((user) => {
              return <Profile key={user._id} profile={user} />;
            })}
        </Grid>
      </Layout>
    </>
  );
}
