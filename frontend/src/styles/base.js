import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js'

const baseStyles = makeStyles(theme => ({
    box: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 30,
        overflow: "hidden"
    },
}), { defaultTheme: theme });

export default baseStyles 
