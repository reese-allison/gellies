import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js'

const customizeStyles = makeStyles(theme => ({
    roomWrapper: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        perspective: "10em",
        perspectiveOrigin: "50% calc(50% - 2em)",                     
        overflow: "hidden"
    },

    room: {
       transformStyle: "preserve-3d",
    },

    wall: {
        position: "absolute",
        backgroundColor: "white",  
        backgroundSize: "5em 5em",
        backgroundRepeat: "repeat",
        width: "20em",
        height: "20em",
        top: "-16em",
        left:"-10em",
        transform: "translateZ(-10em)",
    },

    leftWall: {                
        left: "-20em",
        transform: "rotateY(-90deg)",
        borderLeft: "2px solid black",
    },

    rightWall: {                
        transform: "rotateY(90deg)",
        left: 0,
        borderRight: "2px solid black",
    },

    floor: {
        backgroundColor: "white",
        backgroundSize: "3em 3em",
        backgroundRepeat: "repeat",
        width: "20em",
        height: "20em",
        top: "1em",
        position: "absolute",
        transform: "translate(-50%, -50%) rotateX(90deg) translateZ(-3.05em)"
    }
}), { defaultTheme: theme });

export default customizeStyles 
