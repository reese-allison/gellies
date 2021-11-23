import registerServiceWorker from './service-worker';
registerServiceWorker();

import { Router } from 'preact-router';
import { h, Fragment, render } from 'preact';
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/nav';
//import Scene from './components/scene';
import Menu from './components/menu';
import theme from './styles/theme.js';
import Battler from './components/battler';


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
    let anchors = [
        {width: .5, headwear: 'bow_green', pattern: 'whisker', gradient: 'leaf', body: 'teddy', eyes: 'shiny', mouth: 'buck_teeth', orientation: 'back-right', style: {bottom: '5%', left: '11%'}},
        {width: .35, headwear: 'bow_red', gradient: 'lavender', eyes: 'swirl', mouth: 'skeleton', orientation: 'left', style: {bottom: '45%', right: '5%'}}
    ];
    appStyles();
    let background = backgrounds[Math.floor(Math.random()*backgrounds.length)];
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav/>
            <Router>
                <Home path="/"/>
                <Battler anchors={anchors} background={background} path='/moji/' />
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
