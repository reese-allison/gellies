import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#197BBD'
      },
      secondary: {
        main: '#FCF5C7',
      },
      contrastThreshold: 3,
      tonalOffset: 0.4,
    },
    typography: {
        fontFamily: `'Jellee', 'Arial Bold', sans-serif`,
    },
});

export default theme
