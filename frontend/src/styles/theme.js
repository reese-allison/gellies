import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

var theme = createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '*': {
            'scrollbar-color': '#472836 !important',
            'scrollbar-width': 'thin !important',
            'scroll-behavior': 'smooth',
            '&::-webkit-scrollbar': {
                width: '8px',
                height: '8px'
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#472836',
                borderRadius: '20px',
                '-webkit-border-radius': '20px'
            },
          },
        },
      },
    },
    status:{
      error: '#F7523B' 
    },
    palette: {
      primary: {
        main: '#3E517A'
      },
      secondary: {
        main: '#FCF5C7',
      },
      contrastThreshold: 3,
      tonalOffset: 0.4,
    },
    typography: {
        h1: {
          fontFamily: `'Grandstander', cursive;`
        },
        h2: {
          fontFamily: `'Grandstander', cursive;`
        },
        h3: {
          fontFamily: `'Grandstander', cursive;`
        },
        h4: {
          fontFamily: `'Grandstander', cursive;`
        },
        fontFamily: `'Glory', sans-serif;`,
    },
});
theme = responsiveFontSizes(theme);

export default theme
