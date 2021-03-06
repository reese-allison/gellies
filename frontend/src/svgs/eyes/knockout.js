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
                        <path d="m 97.4,287.4 28.1,31.1 25.9,-30.9 20.5,13.2 -33.3,29.3 26.9,20.3 -16.2,15.3 L 125.6,343.5 104.4,365.3 87.0,349.7 108.8,330.4 82.0,304.8 Z" style="fill:#000;"/>
                    </g>
                </g>
                <g>
                    <g class="outer-eye">
                        <path d="m 376.4,285.6 -28.1,31.1 -25.9,-30.9 -20.5,13.2 33.3,29.3 -26.9,20.3 16.2,15.3 23.6,-22.2 21.2,21.8 17.4,-15.5 -21.8,-19.3 26.8,-25.5 z" style="fill:#000;"/>
                    </g>
                </g>
            </g>
        )
    }
};

export {
    Eyes, willBlink, PureComponent as Blinking
};

