import { h, Fragment} from 'preact';
import { Link } from 'preact-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import navBarStyles from '../styles/nav';


/** @jsx h */
/** @jsxFrag Fragment */

const Nav = () => {
    const classes = navBarStyles();
    return(
        <AppBar position="static">
            <Toolbar className={classes.navBar}>
                <Link style={{ flex: 1 }} className={classes.navBarLink} activeClassName="active" href="/">
                    <Button className={classes.navBarButton}>
                        MOJI
                    </Button>
                </Link>
                <Link style={{ marginRight: 30 }} className={classes.navBarLink} activeClassName="active" href="/moji">
                    <Button className={classes.navBarButton}>
                        RANDOM
                    </Button >
                </Link>
                <Link style={{ marginRight: 30 }} className={classes.navBarLink} activeClassName="active" href="/menu">
                    <Button className={classes.navBarButton}>
                        MENU
                    </Button>
                </Link>
                <Link style={{ marginRight: 30 }} className={classes.navBarLink} activeClassName="active" href="/login">
                    <Button className={classes.navBarButton}>
                        LOGIN
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Nav;
