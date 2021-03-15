import React from 'react';
import { Box, Center, Container, Flex, Text } from '@chakra-ui/layout';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export default function Nav({ children }) {
    return (
        <>
            <Flex
                borderBottom=" 1px solid orange"
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
                <Box>
                    <Text>this is the navbar</Text>
                </Box>
                <Box>
                    <InfoOutlineIcon />
                </Box>
                <Box>
                    <Text>Charity Sign Up</Text>
                </Box>
                <Box>
                    <Text>Volunteer Sign Up</Text>
                </Box>
            </Flex>
        </>
    );
}
