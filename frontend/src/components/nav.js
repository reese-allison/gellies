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
                <Link className={classes.navBarLink} activeClassName="active" href="/menu">
                    <Button className={classes.navBarButton}>
                        MENU
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Nav
