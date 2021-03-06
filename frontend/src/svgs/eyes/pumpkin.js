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
                    <g class="inner-eye">
                        <path d="m 115.1,372.4 c -10.5,-1.5 -24.9,-1.2 -30.6,-12.1 -4.2,-12.9 0.9,-26.6 6.2,-38.5 6.7,-13.2 15.5,-26.8 29.3,-33.5 9.6,-3.2 18.2,5.0 24.0,11.6 4.4,4.6 -8.9,3.2 -11.3,7.6 -8.2,5.0 -9.8,17.4 -2.3,23.9 8.1,8.2 21.2,8.8 31.4,4.4 6.2,3.0 3.5,14.0 4.2,20.3 -1.1,9.4 -10.9,13.3 -19.2,14.4 -10.4,2.0 -21.1,2.0 -31.7,1.6 z" fill="#000"/>
                    </g>
                </g>
                <g>
                    <g class="inner-eye">
                        <path d="m 339.5,374.2 c -10.5,-1.5 -24.9,-1.2 -30.6,-12.1 -4.2,-12.9 0.9,-26.6 6.2,-38.5 6.7,-13.2 15.5,-26.8 29.3,-33.5 9.6,-3.2 18.2,5.0 24.0,11.6 4.4,4.6 -8.9,3.2 -11.3,7.6 -8.2,5.0 -9.8,17.4 -2.3,23.9 8.1,8.2 21.2,8.8 31.4,4.4 6.2,3.0 3.5,14.0 4.2,20.3 -1.1,9.4 -10.9,13.3 -19.2,14.4 -10.4,2.0 -21.1,2.0 -31.7,1.6 z" fill="#000"/>
                    </g>
                </g>
            </g>
        )
    }
};

export {
    Eyes, willBlink, PureComponent as Blinking
};
