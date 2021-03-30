// import '../styles/globals.css';
import theme from '../styles/theme';
import { Global } from '@emotion/react';
import fonts from '../styles/font-face';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Global styles={fonts} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
