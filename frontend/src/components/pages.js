
import { h, Fragment, Component} from 'preact';

export const Home = () =>{
    
    /** @jsx h */
    /** @jsxFrag Fragment */
    
    return(
    <div>
        <h1>HOME SCREEN</h1>
    </div>
    )
};

export const Error = ({ type, url }) => {

    return(
        <section class="error">
            <h2>Error</h2>
            <p>It looks like we hit a snag.</p>
            <pre>{url}</pre>
        </section>
        )
};

export class Moji extends Component{
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
