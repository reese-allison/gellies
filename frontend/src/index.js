import { h, Fragment, render } from 'preact';
import { useEffect, useState } from 'preact/compat';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Nav from './components/nav';
import Customize from './components/customize';
import Room from './components/room';
import theme from './styles/theme.js';

/** @jsx h */
/** @jsxFrag Fragment */

// Get path from hash
const getHashPath = () => {
    const hash = window.location.hash;
    return hash ? hash.substring(1) : '/customize';
};

const App = () => {
    const [currentPath, setCurrentPath] = useState(getHashPath());

    // Shared gelly customization state
    const [gellyConfig, setGellyConfig] = useState({
        eyes: null,
        mouth: null,
        gradient: null,
        body: null,
        headwear: null,
        pattern: null
    });

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(getHashPath());
        };

        window.addEventListener('hashchange', handleHashChange);

        // Redirect to customize if no hash
        if (!window.location.hash) {
            window.location.hash = '#/customize';
        }

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Render the correct component based on path
    const renderPage = () => {
        if (currentPath === '/room') {
            return <Room gellyConfig={gellyConfig} />;
        }
        return <Customize gellyConfig={gellyConfig} setGellyConfig={setGellyConfig} />;
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: theme.palette.secondary.light,
                paddingTop: 0,
                marginTop: 0
            }}>
                <Nav />
                {renderPage()}
            </Box>
        </ThemeProvider>
    );
};

document.title = "Gellies";
render(<App />, document.getElementById('root'));
