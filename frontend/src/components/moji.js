import { h, Fragment, Component } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

class Moji extends Component{
    render(){
        return (
            <object width="100%" height="100%" type="image/svg+xml" data="/api/moji-test/" />
        )
    }
}

export default Moji;
