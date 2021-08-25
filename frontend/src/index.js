import { Router } from 'preact-router';
import { h, Fragment, Component, render } from 'preact';
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';

import Nav from './components/nav'
import theme from './styles/theme.js'
import Menu from './components/menu';
import { Home, Error, Moji } from './components/pages'


/** @jsx h */
/** @jsxFrag Fragment */

const appStyles = makeStyles(theme => ({
    "@global": {
        body: {
          backgroundColor: theme.palette.secondary.light
        }
    }
}), { defaultTheme: theme });

const App = () => {
    const classes = appStyles();
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Nav/>
                <Router>
                    <Home path="/"/>
                    <Moji path="/moji"/>
                    <Menu path="/menu"/>
                    <Error type='404' default/>
                </Router>
            </div>
        </ThemeProvider>
    )
};


render(<App />, document.getElementById('root'))
