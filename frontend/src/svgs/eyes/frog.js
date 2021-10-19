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
                <path fill="#000" d="m 173.7,328.8 c 0,30.2 -22.1,54.8 -49.4,54.8 -27.2,0 -49.3,-24.5 -49.3,-54.8 l 4.6,0.0 c 3.3,39.9 31.1,50.0 44.7,50.0 13.6,0 42.4,-12.0 45.0,-50.1 L 173.7,328.9 Z" />
                <path fill="#000" d="m 398.2,329.7 c 0,30.2 -22.1,54.8 -49.4,54.8 -27.2,0 -49.4,-24.5 -49.4,-54.8 l 4.6,0.0 c 3.3,39.9 31.1,50.0 44.7,50.0 13.6,0 42.4,-12.0 45.0,-50.1 l 4.3,0.0 z" />
            </g>
        )
    }
};

export {
    Eyes, willBlink, Blinking
};
