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
                    <g class="outer-eye">
                        <circle style="fill:#fff;stroke:#000;stroke-width:4px;" cx="349.8" cy="332.1" r="35.2" />
                    </g>
                    <g class="inner-eye">
                        <circle fill="#000" cx="350" cy="332" r="12" />
                    </g>
                </g>
                <g>
                    <g class="outer-eye">
                        <circle style="fill:#fff;stroke:#000;stroke-width:4px;" cx="121.4" cy="331.9" r="35.2" />
                    </g>
                    <g class="inner-eye">
                        <circle fill="#000" cx="121" cy="332" r="12" />
                    </g>
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
                <path fill="#000" d="m 84.1,331.9 c 0,20.5 16.6,37.1 37.2,37.1 20.5,0 37.1,-16.6 37.1,-37.1 m -4,0 c 0,18.3 -14.8,33.1 -33.1,33.1 -18.3,0 -33.2,-14.8 -33.2,-33.1" />
                <path fill="#000" d="m 312.5,332.0 c 0,20.5 16.6,37.1 37.2,37.1 20.5,0 37.1,-16.6 37.1,-37.1 m -4,0 c 0,18.3 -14.8,33.1 -33.1,33.1 -18.3,0 -33.2,-14.8 -33.2,-33.1" />
            </g>
        )
    }
};

export {
    Eyes, willBlink, Blinking
};



