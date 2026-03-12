import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { lighten, darken } from '@mui/material/styles';

let theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    scrollbarColor: '#472836 !important',
                    scrollbarWidth: 'thin !important',
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px'
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#472836',
                        borderRadius: '20px'
                    }
                }
            }
        }
    },
    spacing: 5,
    palette: {
        success: {
            main: '#42FFD8'
        },
        error: {
            main: '#F7523B'
        },
        primary: {
            main: '#3E517A'
        },
        secondary: {
            main: '#faf1b1'
        },
        tertiary: {
            main: '#472836'
        },
        contrastThreshold: 3,
        tonalOffset: 0.4
    },
    typography: {
        h1: {
            fontFamily: `'Grandstander', cursive`
        },
        h2: {
            fontFamily: `'Grandstander', cursive`
        },
        h3: {
            fontFamily: `'Grandstander', cursive`
        },
        h4: {
            fontFamily: `'Grandstander', cursive`
        },
        fontFamily: `'Glory', sans-serif`
    }
});

theme = responsiveFontSizes(theme);
theme.palette.tertiary.light = lighten(theme.palette.tertiary.main, theme.palette.tonalOffset);
theme.palette.tertiary.dark = darken(theme.palette.tertiary.main, theme.palette.tonalOffset);

export default theme;
