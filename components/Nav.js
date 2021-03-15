import React from 'react';
import { Box, Center, Container, Flex } from '@chakra-ui/layout';

export default function Nav({ children }) {
    return (
        <>
            <Flex
                bg="blue"
                pos="fixed"
                top={0}
                w="90vw"
                height="100px"
                direction="row"
                align="center"
                justify="space-between">
                <Box>this is the navbar</Box>
                <Box>this is the navbar</Box>
                <Box>this is the navbar</Box>
                <Box>this is the navbar</Box>
            </Flex>
        </>
    );
}
