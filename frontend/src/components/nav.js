import { h, Fragment } from 'preact';
import { useState } from 'preact/compat';
import { Link } from 'preact-router';
import { MenuRounded } from '@material-ui/icons';
import { AppBar, Button, Toolbar, IconButton, List, ListItem, Box, Drawer } from '@material-ui/core';

import navBarStyles from '../styles/nav';


/** @jsx h */
/** @jsxFrag Fragment */

export default function Nav (props){
    const classes = navBarStyles();
    const [state, setState] = useState({
        open: false,
    });
    
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ open: open });
    };
    
    const list = () => {
        let ui = props.is_authenticated ? ['room', 'customize', 'logout'] : ['login'];
        return (
            <Box
                sx="auto"
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {ui.map((text, index) => (
                        <ListItem button key={text} className={classes.navBarLink} href={text === 'logout' ? 'api/logout' : text} component={Link}>
                            <Button className={classes.navBarButton}>
                                {text.toUpperCase()}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Box>
        )
    };
    let vertical = window.innerHeight > window.innerWidth;
    return(
        <AppBar style={{ zIndex: 99 }} position="sticky">
            <Toolbar className={classes.navBar}>
                <div style={{ flex: 1 }} className={classes.navBarLink} activeClassName="active">
                    <Link className={classes.navBarLink} href='/'>
                        <Button className={classes.navBarButton}>
                            GELLIES
                        </Button>
                    </Link>
                </div>
                <IconButton onClick={toggleDrawer(true)} aria-label="menu">
                    <MenuRounded className={classes.navBarButton} style={{height: '1.5em', width: '1.5em'}} />
                </IconButton>
            </Toolbar>
            <Drawer
                anchor="right"
                classes={{ 
                    paper: classes.navBarDrawer
                }}
                open={state.open}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </AppBar>
    )
};
