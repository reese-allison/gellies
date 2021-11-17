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
            <g>
                <g class="inner-eye">
                    <circle style="stroke:black;stroke-width:4px;stroke-opacity:1;" fill="#fff" cx="121" cy="332" r="12" />
                </g>
                <g class="inner-eye">
                    <circle style="stroke:black;stroke-width:4px;stroke-opacity:1;" fill="#fff" cx="350" cy="332" r="12" />
                </g>
            </g>
        )
    }
};

class Blinking extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            style: props.style
        }
    }

    render(){
        return (
            <g style={this.state.style}>
                <path fill="#000" d="m 107,332 c 0,7.7 6.2,14 14,14 7.7,0 14,-6.2 14,-14 m -4,0 c 0,5.5 -4.4,10 -10,10 -5.5,0 -10,-4.4 -10,-10" />
                <path fill="#000" d="m 339.1,331.3 c 0,7.8 6.4,14.2 14.2,14.2 7.8,0 14.2,-6.4 14.2,-14.2 m -4.0,0 c 0,5.6 -4.5,10.1 -10.1,10.1 -5.6,0 -10.1,-4.5 -10.1,-10.1" />
            </g>
        )
    }
};

export {
    Eyes, willBlink, Blinking
};
