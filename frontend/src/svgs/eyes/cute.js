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
                        <ellipse cx="128.7" cy="328" rx="30.9" ry="47.2" fill="#000" />
                        <path d="m110.3 294.3c-6.1 8.1-5.5 8.8-7.0 17.4 10.9 4.4 16.7 4.9 27.9 3.6 1.6-1.9 2.3-3.9 1.9-5.9-5.5-8.9-12.7-12.9-22.8-15.2z" style="fill:#fff;"/>
                        <ellipse cx="139.7" cy="331.1" rx="8.0" ry="11.6" fill="#fff"/>
                    </g>
                </g>
                <g>
                    <g class="inner-eye">
                        <ellipse cx="350.1" cy="328" rx="30.9" ry="47.2" fill="#000" />
                        <path d="m331.7 294.3c-6.1 8.1-5.5 8.8-7.0 17.4 10.9 4.4 16.7 4.9 27.9 3.6 1.6-1.9 2.3-3.9 1.9-5.9-5.5-8.9-12.7-12.9-22.8-15.2z" style="fill:#fff;"/>
                        <ellipse cx="361.1" cy="331.1" rx="8.0" ry="11.6" fill="#fff" />
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
                <path fill="#000" d="m 159.6,328 c 0,26 -13.8,47.2 -30.9,47.2 -17,0 -30.9,-21.1 -30.9,-47.2 3.6,-0.0 0,0 3.6,-0.0 3.5,34.1 18.9,43.0 27.4,43.0 8.5,0 24.1,-10.1 27.2,-42.8 3.4,-0.1 0,0 3.4,-0.1 z" />
                <path fill="#000" d="m 380.9,327.9 c 0,26 -13.8,47.2 -30.9,47.2 -17,0 -30.9,-21.1 -30.9,-47.2 3.6,-10e-4 0,0 3.6,-10e-4 3.5,34.1 18.9,43.0 27.4,43.0 8.5,0 24.1,-10.1 27.2,-42.8 3.4,-0.1 0,0 3.4,-0.1 z" />
            </g>
        )
    }
};

export {
    Eyes, willBlink, Blinking
};

