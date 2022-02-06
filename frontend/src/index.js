import registerServiceWorker from './service-worker';
registerServiceWorker();

import { Router } from 'preact-router';
import { h, Fragment, render } from 'preact';
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'

import Nav from './components/nav';
import Scene from './components/scene';
import Customize from './components/customize';
import Login from './components/login';
import theme from './styles/theme.js';


const backgrounds = ['desert', 'forest', 'volcano', 'glacier']


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
    appStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav/>
            <Container style={{marginTop: '120px'}}>
                <Router>
                    <Customize path='/customize'/>
                    <Login path='/login' />
                    <Error type='404' default/>
                </Router>
            </Container>
        </ThemeProvider>
    )
};

const Error = ({ type, url }) => (
	<section class="error">
		<h2>Error</h2>
		<p>It looks like we hit a snag.</p>
		<pre>{url}</pre>
	</section>
);

render(<App />, document.getElementById('root'));
