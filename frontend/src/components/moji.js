import { h, Fragment, Component } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

class Moji extends Component{
    constructor(props){
        super(props)
        this.state = {
            orientation: props.orientation
        };
    }

    render(){
        let url = `/api/moji/?orientation=${this.state.orientation}`
        return (
            <object width="100%" height="100%" type="image/svg+xml" data={url} />
        )
    }
}

export default Moji;
