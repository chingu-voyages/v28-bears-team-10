import React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import { Container, Flex } from '@chakra-ui/react';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="" />
                <meta
                    name="description"
                    content="Chinu.io project - an app that connects charities and volunteers to help with digital products andissues"
                />
            </Head>
            <Flex
                maxW="100%"
                h="100vh"
                bg="red.100"
                display="flex"
                my="0"
                mx="auto"
                justify="center"
                align="center">
                <Nav />
                {children}
            </Flex>
        </>
    );
}
