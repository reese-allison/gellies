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
                        <path fill="#000" d="m 100.3,312.7 c 19.7,0 39.5,0 59.3,0 -1.0,1.3 -2.1,2.7 -3.2,4.0 0.5,1.4 4.0,3.3 2.2,4.5 -2.3,1.1 -4.6,2.3 -6.9,3.5 2.6,1.3 5.2,2.7 7.8,4.0 -19.7,0 -39.5,0 -59.3,0 0.7,-1.6 4.4,-3.2 2.8,-5.1 -1.4,-1.2 -3.8,-3.4 -0.6,-3.9 2.2,-0.9 4.5,-1.8 6.7,-2.8 -2.9,-1.4 -5.9,-2.9 -8.9,-4.4 z" />
                    </g>
                </g>
                <g>
                    <g class="outer-eye">
                        <path fill="#000" d="m 380.6,312.5 h -59.3 l 3.2,4.0 -3.2,4.0 7.8,4.0 -7.8,4.0 h 59.3 l -3.6,-4.1 3.6,-3.9 -8.9,-3.7 z" />
                    </g>
                </g>
            </g>
        )
    }
};

export {
    Eyes, willBlink, PureComponent as Blinking
};
