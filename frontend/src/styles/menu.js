import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js'

const menuStyles = makeStyles(theme => ({
    menuButton: {
        color: theme.palette.primary.contrastText,
        fontFamily: `'Grandstander', cursive;`,
        fontSize: '1.3rem',
        fontWeight: 'bold',
        textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px;',
        WebkitFontSmoothing: true,
    }
}), { defaultTheme: theme });

export default menuStyles 
