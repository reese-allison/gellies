import registerServiceWorker from './service-worker';
registerServiceWorker();

import { Router } from 'preact-router';
import { h, Fragment, render } from 'preact';
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/nav';
import Scene from './components/scene';
import Menu from './components/menu';
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
        {width: .6, headwear: 'bow_green', pattern: 'whisker', gradient: 'pear', body: 'teddy', eyes: 'shiny', mouth: 'buck_teeth', orientation: 'right', style: {bottom: '2%', left: '1%'}},
        {width: .25, headwear: 'bow_red', gradient: 'lavender', eyes: 'swirl', mouth: 'skeleton', orientation: 'left', style: {bottom: '40%', right: '0%'}}
    ];
    appStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav/>
            <Router>
                <Home path="/"/>
                <Scene anchors={anchors} width="100%" background="beach" path="/moji/"/>
                <Menu path='/menu'/>
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
