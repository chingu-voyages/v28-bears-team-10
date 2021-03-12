import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    orange: "#FF6700",
    blue: "#268ED0",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
