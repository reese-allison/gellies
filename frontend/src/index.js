import { Router,  Link } from 'preact-router';
import { h, Component, render } from 'preact';
//import { Button } from '@material-ui/core';
import { Button } from 'preact-material-components/Button'


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
    //I need to pull list from server, as well as the individual html's from the server


    render(){
        return <object type="image/svg+xml" data="http://localhost:8000/moji-menu" />
    }
}

render(<App />, document.getElementById('root'))