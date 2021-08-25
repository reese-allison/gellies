
import { h, Fragment, Component, render } from 'preact';

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
        return (
            <div>
                <object type="image/svg+xml" data="/api/moji-test/" />
                <object type="image/svg+xml" data="/api/moji-test/" />
                <object type="image/svg+xml" data="/api/moji-test/" />
            </div>
        )
    }
}

export {
    Home,
    Error,
    Moji
}
