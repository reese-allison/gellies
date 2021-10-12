import { h, Fragment } from 'preact';
import { PureComponent } from 'preact/compat';


const willBlink = () => {
    return true;
}


/** @jsx h */
/** @jsxFrag Fragment */

class Eyes extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            style: props.style,
            id: props.id
        }
    }

    render(){
        return (
            <g style={this.state.style}>
                <g>
                    <g class="inner-eye">
                        <circle fill="#000" cx="131" cy="324" r="6" />
                    </g>
                </g>
                <g>
                    <g class="inner-eye">
                        <circle fill="#000" cx="352" cy="324" r="6" />
                    </g>
                </g>
            </g>
        )
    }
};

class Blinking extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <g></g>
        )
    }
};

export {
    Eyes, willBlink, Blinking
};

