import { makeStyles, darken, lighten} from '@material-ui/core/styles';
import theme from './theme.js'

const navBarStyles = makeStyles(theme => ({
    navBar: {
        backgroundImage: `linear-gradient(${darken(theme.palette.primary.main, .1)}, ${lighten(theme.palette.primary.main, .2)});`
    },
    navBarButton: {
        color: theme.palette.primary.contrastText,
        fontFamily: `'Grandstander', cursive;`,
        fontSize: '1.75rem',
        fontWeight: 'bold',
        textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px;',
        WebkitFontSmoothing: true,
    },
    navBarLink: {
        textDecoration: 'none'
    }
}), { defaultTheme: theme });

export default navBarStyles 