import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js'

const customizeStyles = makeStyles(theme => ({
    menuButton: {
        color: theme.palette.primary.contrastText,
        fontFamily: `'Grandstander', cursive;`,
        fontSize: '1.3rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.6rem',
        },
        fontWeight: 'bold',
        textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px;',
        WebkitFontSmoothing: true,
    },
    noScrollBar: {
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    thinScrollBar: {
        '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px'
        },
    }
}), { defaultTheme: theme });

export default customizeStyles 
