import registerServiceWorker from './service-worker';
registerServiceWorker();

import { Router } from 'preact-router';
import { h, Fragment, render } from 'preact';
import { useEffect, useState } from 'preact/compat'
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core'

import Gelly from './components/moji';
import Nav from './components/nav';
// import Scene from './components/scene';
import Customize from './components/customize';
import Login from './components/login';
import theme from './styles/theme.js';


/** @jsx h */
/** @jsxFrag Fragment */

const appStyles = makeStyles(theme => ({
    "@global": {
        body: {
          backgroundColor: theme.palette.secondary.light
        }
    },
}), { defaultTheme: theme });

const App = () => {
    const classes = appStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav/>
            <Router>
                <Home path="/"/>
                <Customize path='/customize'/>
                <Login path='/login' />
                <Error type='404' default/>
            </Router>
        </ThemeProvider>
    )
};

const Home = () => {
    const [state, setState] = useState({});

    useEffect(()=>{
        const randomGelly = () => {
            ['eyes', 'mouth', 'gradient', 'body', 'headwear', 'pattern'].map((comp, idx)=>{
                import(`./svgs/${comp}/index`).then(item => {
                    let parts = Object.keys( item );
                    if(['headwear', 'pattern'].includes(comp)){
                        parts.push(undefined);
                    }
                    let random_part = parts[Math.floor(Math.random()*parts.length)];
                    let new_state = {}
                    new_state[comp] = random_part;
                    setState(s => { return {...s, ...new_state} })
                });
            });
        }
        randomGelly();
        let interval = setInterval(randomGelly, 3000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return(
        <Box>
            <Gelly 
                eyes={state.eyes}
                mouth={state.mouth}
                gradient={state.gradient}
                body={state.body}
                headwear={state.headwear}
                pattern={state.pattern}
            />
        </Box>
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
