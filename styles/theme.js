import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                overflowX: 'hidden',
                color: props.colorMode === 'light' ? 'white' : 'black',
                bg: props.colorMode === 'light' ? 'white' : 'black'
            }
        })
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        orange: '#FF6700',
        blue: '#268ED0'
    },
    fonts: {
        body: "'Glacial Indifference Regular', sans-serif",
        heading: "'Glacial Indifference Bold', sans-serif"
    }
});

export default theme;
