import { h, Fragment } from 'preact';
import { PureComponent } from 'preact/compat';


const willBlink = () => {
    return false;
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
                        <path fill="#000" d="m 83.9,337.3 c 9.1,-10.7 29.2,-12.6 41.9,-5.0 11.5,4.3 25.2,2.2 35.8,-2.9 8.7,2.1 -0.6,10.9 -6.5,11.2 -9.3,2.8 -20.0,3.2 -29.0,-0.6 -8.9,-3.5 -20.2,-6.7 -29.5,-2.2 -4.5,2.6 -13.9,9.7 -12.6,-0.3 z" />
                    </g>
                </g>
                <g>
                    <g class="outer-eye">
                        <path fill="#000" d="m 308.5,335.8 c 9.1,-10.7 29.2,-12.6 41.9,-5.0 11.5,4.3 25.2,2.2 35.8,-2.9 8.7,2.1 -0.6,10.9 -6.5,11.2 -9.3,2.8 -20.0,3.2 -29.0,-0.6 -8.9,-3.5 -20.2,-6.7 -29.5,-2.2 -4.5,2.6 -13.9,9.7 -12.6,-0.3 z" />
                    </g>
                </g>
            </g>
        )
    }
};

export {
    Eyes, willBlink, PureComponent as Blinking
};
