import React from 'react';
import { Box, Center, Container, Flex, Text, Spacer } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Nav({ children }) {
    return (
        <>
            <Flex
                borderBottom=" 2px solid orange"
                pos="fixed"
                top={0}
                w="100vw"
                height="70px"
                direction="row"
                align="center"
                justify="space-between"
                color="black"
                px="2%">
                <Box>
                    <Text>Logo Container</Text>
                </Box>

                <Spacer />
                {/* <Spacer /> */}
                <Tooltip label="Coming Soon" aria-label="A tooltip">
                    <Box mx="5px">
                        <InfoOutlineIcon w={6} h={6} />
                    </Box>
                </Tooltip>

                <Tooltip label="Coming Soon" aria-label="A tooltip">
                    <Box
                        mx="5px"
                        as="button"
                        borderRadius="md"
                        bg="blue"
                        color="white"
                        px={2}
                        h={10}>
                        <Text p="0" fontWeight="600">
                            CHARITY SIGN UP
                        </Text>
                    </Box>
                </Tooltip>
                <Link href={'/volunteer/signup'}>
                    <Box
                        mx="5px"
                        as="button"
                        borderRadius="md"
                        bg="orange"
                        color="white"
                        px={2}
                        h={10}>
                        <Text fontWeight="600">VOLUNTEER SIGN UP</Text>
                    </Box>
                </Link>
            </Flex>
        </>
    );
}
