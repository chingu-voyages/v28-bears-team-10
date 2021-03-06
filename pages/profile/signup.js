import { Container, Heading, Flex } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import Signup from "../../components/Signup";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import SEO from "../../components/SEO";

export default withPageAuthRequired(function SignupPage() {
  return (
    <>
      <SEO title="Signup" />
      <Layout>
        <Container maxW="container.lg">
          <Flex justify="center" mb={5} mt={5}>
            <Heading color="black">Create your Volunteer Profile!</Heading>
          </Flex>
          <Signup />
        </Container>
      </Layout>
    </>
  );
});
