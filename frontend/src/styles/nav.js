import { makeStyles} from '@material-ui/core/styles';
import theme from './theme.js'

const navBarStyles = makeStyles(theme => ({
    navBar: {
        backgroundColor: theme.palette.primary.main
    },
    navBarButton: {
        color: theme.palette.primary.contrastText      
    }
}), { defaultTheme: theme });

export default navBarStyles 
