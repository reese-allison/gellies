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
                <defs>
                    <clipPath id={`frog-eye-left-clip-${ this.state.id }`}>
                        <ellipse cx="124.3" cy="328.9" rx="49.4" ry="54.8"/>
                    </clipPath>
                    <clipPath id={`frog-eye-right-clip-${ this.state.id }`}>
                        <ellipse cx="348.9" cy="329.7" rx="49.4" ry="54.8"/>
                    </clipPath>
                </defs>
                <g>    
                    <g class="outer-eye">
                        <ellipse cx="124.3" cy="328.9" rx="49.4" ry="54.8" fill="#000"/>
                        <ellipse fill="#d6ff20" cx="124.3" cy="335.7" rx="38.3" ry="42.0"/>
                    </g>
                    <g clip-path={`url(#frog-eye-left-clip-${ this.state.id })`}>
                        <g class="inner-eye">
                            <path fill="#000" d="M 97.4,329.9 H 148.4 c 1.6,0 3,1.3 3,3 v 6.6 c 0,1.6 -1.3,3 -3,3 H 97.4 c -1.6,0 -3,-1.3 -3,-3 v -6.6 c 0,-1.6 1.3,-3 3,-3 z" />
                        </g>
                    </g>
                </g>
                <g>
                    <g class="outer-eye">
                        <ellipse cx="348.9" cy="329.7" rx="49.4" ry="54.8" fill="#000"/>
                        <ellipse fill="#d6ff20" cx="348.9" cy="336.5" rx="38.3" ry="42.0"/>
                    </g>
                    <g clip-path={`url(#frog-eye-right-clip-${ this.state.id })`}>
                        <g class="inner-eye">
                            <path fill="#000" d="m 324.1,330.0 h 50.9 c 1.6,0 3,1.3 3,3 v 6.6 c 0,1.6 -1.3,3 -3,3 h -50.9 c -1.6,0 -3,-1.3 -3,-3 v -6.6 c 0,-1.6 1.3,-3 3,-3 z" />
                        </g>
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
                <path fill="#000" d="m173.7 328.9c0 30.27-22.12 54.8-49.4 54.8-27.28 0-49.4-24.53-49.4-54.8 0-30.27 22.45 40.67 49.73 40.67 27.28 0 49.07-70.93 49.07-40.67z" />
                <path fill="#000" d="m398.3 329.7c0 30.27-22.12 54.8-49.4 54.8-27.28 0-49.4-24.53-49.4-54.8 0-30.27 22.45 41 49.73 41 27.28 0 49.07-71.26 49.07-41z" />
            </g>
        )
    }
};

export {
    Eyes, willBlink, Blinking
};
