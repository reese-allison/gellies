import { makeStyles, darken, lighten} from '@material-ui/core/styles';
import theme from './theme.js'

const pageStyles = makeStyles(theme => ({
    pageCenter:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageHeader: {
        color: theme.palette.primary.contrastText,
        fontFamily: `'Grandstander', cursive;`,
        fontSize: '2.4rem',
        fontWeight: 'bold',
        textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px;',
        WebkitFontSmoothing: true,
    },
    
    pageError: {
        color: lighten(theme.status.error, .4),
        fontFamily: `'Grandstander', cursive;`,
        fontSize: '2.4rem',
        fontWeight: 'bold',
        textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px;',
        WebkitFontSmoothing: true,
    },
    pageButton:{
        width: '80%',
        backgroundImage: `radial-gradient(farthest-corner at 40px 40px, ${darken(theme.palette.primary.main, .1)}, ${lighten(theme.palette.primary.main, .2)});`,
        color: theme.palette.primary.contrastText,
        fontFamily: `'Grandstander', cursive;`,
        fontSize: '1.6rem',
        fontWeight: 'bold',
        textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px;',
        WebkitFontSmoothing: true,
    },
    pageMenu:{
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    }
}), { defaultTheme: theme });

export default pageStyles
