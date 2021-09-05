import { Router } from 'preact-router';
import { h, Fragment, Component, render } from 'preact';
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/nav';
import Build from './components/build';
import Scene from './components/scene';
import theme from './styles/theme.js';


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
    let anchors = [
        {width: .2, style: {bottom: '4%', left: '5%'}},
        {width: .08, style: {bottom: '44%', right: '12%'}}
    ];
    const classes = appStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav/>
            <Router>
                <Home path="/"/>
                <Scene anchors={anchors} width="100%" background="/static/images/beach.gif" path="/moji/"/>
                <Build path="/build/"/>
                <Error type='404' default/>
            </Router>
        </ThemeProvider>
    )
};

const Home = () =>(
    <div>
        <h1>HOME SCREEN</h1>
    </div>
);

const Error = ({ type, url }) => (
	<section class="error">
		<h2>Error</h2>
		<p>It looks like we hit a snag.</p>
		<pre>{url}</pre>
	</section>
);

render(<App />, document.getElementById('root'));
