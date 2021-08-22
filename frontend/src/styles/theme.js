import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
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

export default theme
