import { Router,  Link } from 'preact-router';
import { h, Fragment, Component, render } from 'preact';
import Button from '@material-ui/core/Button'

/** @jsx h */
/** @jsxFrag Fragment */

const App = () => (
    <div class="app">
        <Nav/>
        <Router>
            <Home path="/"/>
            <Moji path="/moji"/>
            <Menu path="/menu"/>
            <Error type='404' default/>
        </Router>
    </div>
);

const Nav = () => (
    <nav style="background-color: #d24dff; height: 5%"> 
        <Link activeClassName="active" href="/">
            <Button>
                Home
            </Button>
        </Link>
        <Link activeClassName="active" href="/moji">
            <Button>
                MOJI
            </Button>
        </Link>
        <Link activeClassName="active" href="/menu">
            <Button>
                MENU
            </Button>
        </Link>
    </nav>
);

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
        return <object type="image/svg+xml" data="http://localhost:8000/moji-test" />
    }
}

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.fetch_html('http://localhost:8000/moji-menu');
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

render(<App />, document.getElementById('root'))