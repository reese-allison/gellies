import { Router } from 'preact-router';
import { h, Fragment, Component, render } from 'preact';
import { ThemeProvider, makeStyles} from '@material-ui/core/styles';

import Nav from './components/nav'
import theme from './styles/theme.js'


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
                    <Build path="/build/"/>
                    <Error type='404' default/>
                </Router>
            </div>
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

class Moji extends Component{
    render(){
        return <object type="image/svg+xml" data="http://localhost/api/moji-test/" />
    }
}

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.fetch_html('http://localhost/api/moji-menu/');
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

    render(){
        return (
            // THIS IS DANGEROUS! TO REDUCE XSS ATTACKS, WE NEED TO SANITIZE this.state.content (See DomPurify)
            <div id='menu' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        )
    }

}

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
        console.log("onclicked");
        this.fetch_html('http://localhost/api/build/bodies');  
        this.updateSelectionGrid();
    }

    showEyes() {
        console.log("onclicked");
        this.fetch_html('http://localhost/api/build/eyes');
        this.updateSelectionGrid();
    }

    showGradients() {
        console.log("onclicked");
        this.fetch_html('http://localhost/api/build/gradients');
        this.updateSelectionGrid();
    }

    showMouths() {
        console.log("onclicked");
        this.fetch_html('http://localhost/api/build/mouths');
        this.updateSelectionGrid();
    }

    updateSelectionGrid() {
        document.querySelector("#selection-grid").dangerouslySetInnerHTML=({ __html: this.state.content });
    }

    render(){
        return (
            <div>
                <h1>Placeholder</h1>
                <h1 style="cursor: pointer" onClick={() => this.showBodies()}>Bodies</h1>
                <h1 style="cursor: pointer" onClick={() => this.showEyes()}>Eyes</h1>
                <h1 style="cursor: pointer" onClick={() => this.showGradients()}>Gradients</h1>
                <h1 style="cursor: pointer" onClick={() => this.showMouths()}>Mouths</h1>
                <div id='selection-grid' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'))
