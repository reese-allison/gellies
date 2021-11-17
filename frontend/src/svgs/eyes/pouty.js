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
                        <path d="m 100.8,307.8 54.9,24.7 -53.7,26.8 C 94.3,361.6 89.0,354.3 95.9,351.2 L 133.2,332.8 97.6,316.4 c -7.9,-3.6 -4.8,-10.7 2.8,-8.5 z" style="fill:#000;"/>
                    </g>
                </g>
                <g>
                    <g class="outer-eye">
                        <path d="m 371.4,356.8 -54.6,-25.5 54.1,-26.0 c 7.7,-2.0 12.9,5.3 6.0,8.2 l -37.5,17.8 35.2,16.9 c 7.8,3.7 4.7,10.7 -2.9,8.5 z" style="fill:#000;"/>
                    </g>
                </g>
            </g>
        )
    }
};


export {
    Eyes, willBlink, PureComponent as Blinking
};
