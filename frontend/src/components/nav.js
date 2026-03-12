import { h, Fragment } from 'preact';
import { useState } from 'preact/compat';
import MenuRounded from '@mui/icons-material/MenuRounded';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { darken, lighten } from '@mui/material/styles';

import theme from '../styles/theme';

/** @jsx h */
/** @jsxFrag Fragment */

const buttonStyles = {
    color: theme.palette.primary.contrastText,
    fontFamily: `'Grandstander', cursive`,
    fontSize: { xs: '2rem', md: '1.6rem' },
    fontWeight: 'bold',
    textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px',
    textTransform: 'uppercase',
    '&:hover': {
        backgroundColor: 'transparent'
    }
};

export default function Nav() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(isOpen);
    };

    const menuItems = ['customize', 'room'];

    const list = () => (
        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuItems.map((text) => (
                    <ListItemButton key={text} component="a" href={'#/' + text} sx={{ textDecoration: 'none' }}>
                        <Button sx={buttonStyles}>
                            {text.toUpperCase()}
                        </Button>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" sx={{ zIndex: 99 }}>
            <Toolbar sx={{
                minHeight: { xs: 96, md: 64 },
                backgroundImage: `linear-gradient(${darken(theme.palette.primary.main, 0.1)}, ${lighten(theme.palette.primary.main, 0.2)})`
            }}>
                <Box sx={{ flex: 1 }}>
                    <a href="#/customize" style={{ textDecoration: 'none' }}>
                        <Button sx={buttonStyles}>
                            GELLIES
                        </Button>
                    </a>
                </Box>
                <IconButton aria-label="menu" size="large" onClick={toggleDrawer(true)}>
                    <MenuRounded sx={{
                        height: '1.5em',
                        width: '1.5em',
                        color: theme.palette.primary.contrastText
                    }} />
                </IconButton>
            </Toolbar>
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: { background: theme.palette.secondary.main }
                }}
            >
                {list()}
            </Drawer>
        </AppBar>
    );
}
