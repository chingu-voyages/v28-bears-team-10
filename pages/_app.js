// import '../styles/globals.css';
import theme from '../styles/theme';
import { Global } from '@emotion/react';
import fonts from '../styles/font-face';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <ChakraProvider theme={theme}>
                <Global styles={fonts} />
                <Component {...pageProps} />
            </ChakraProvider>
        </UserProvider>
    );
}

export default MyApp;
