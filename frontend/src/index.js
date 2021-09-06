import { Router } from 'preact-router';
import { h, Fragment, Component, render } from 'preact';
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/nav'
import theme from './styles/theme.js'
import Menu from './components/menu';
import { Home, Moji, Error } from './components/pages'


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
            <CssBaseline />
            <Nav/>
            <Router>
                <Home path="/"/>
                <Moji path="/moji/"/>
                <Menu path="/menu/"/>
                <Build path="/build/"/>
                <Error type='404' default/>
            </Router>
        </ThemeProvider>
    )
};


class Build extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.showBodies();
        console.log("Mounted Build Screen");
    }

    fetch_html(url){
        fetch(url)
        .then(response => {
            return response.text();
        })
        .then(content => {
            this.setState({content: content})
        })
        .catch(function(error){
            console.log(error)
        });
    }

    showBodies() {
        this.fetch_html('/api/build/bodies');  
    }

    showEyes() {
        this.fetch_html('/api/build/eyes');
    }

    showGradients() {
        this.fetch_html('/api/build/gradients');
    }

    showMouths() {
        this.fetch_html('/api/build/mouths');
    }

    showPatterns() {
        this.fetch_html('/api/build/patterns');
    }

    showHats() {
        this.fetch_html('/api/build/hats');       
    }

    render(){
        return (
            <div>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showBodies()}>Bodies</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showEyes()}>Eyes</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showGradients()}>Gradients</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showMouths()}>Mouths</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showPatterns()}>Patterns</h1>
                <h1 style={{cursor: 'pointer', float: 'left', margin: '30px'}} onClick={() => this.showHats()}>Hats</h1>
                <div style="clear: left;" id='selection-grid' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'))
