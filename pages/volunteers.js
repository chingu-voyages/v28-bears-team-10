import React from "react";
import useSWR from "swr";
import { Grid } from "@chakra-ui/layout";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function VolunteersPage() {
  const { data, error } = useSWR("http://localhost:3000/api/users", fetcher);

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
          {/* @todo filter only users with userType volunteer */}
          {data.map((user) => {
            return <Profile key={user._id} profile={user} />;
          })}
        </Grid>
      </Layout>
    </>
  );
}
