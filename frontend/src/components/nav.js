import { h, Fragment} from 'preact';
import { Link } from 'preact-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'

import navBarStyles from '../styles/nav'

const Nav = () => {
    const classes = navBarStyles();

    /** @jsx h */
    /** @jsxFrag Fragment */

    return(
        <AppBar>
            <Toolbar className={classes.navBar}>
                <Link activeClassName="active" href="/">
                    <Button className={classes.navBarButton}>
                        Home
                    </Button>
                </Link>
                <Link activeClassName="active" href="/moji">
                    <Button className={classes.navBarButton}>
                        Moji
                    </Button >
                </Link>
                <Link activeClassName="active" href="/menu">
                    <Button className={classes.navBarButton}>
                        Menu
                    </Button>
                </Link>
                <Link activeClassName="active" href="/build">
                    <Button className={classes.navBarButton}>
                        Build
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Nav
