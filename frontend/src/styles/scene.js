import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js'

const sceneStyles = makeStyles(theme => ({
    scene: {
        userSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitUserSelect: 'none'
    },
}), { defaultTheme: theme });

export default sceneStyles 
