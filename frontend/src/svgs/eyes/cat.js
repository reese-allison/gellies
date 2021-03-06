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
                    <clipPath id={`cat-eye-left-clip-${ this.state.id }`}>
                        <ellipse cx="124.3" cy="328.9" rx="49.4" ry="54.8"/>
                    </clipPath>
                    <clipPath id={`cat-eye-right-clip-${ this.state.id}`}>
                        <ellipse cx="348.9" cy="329.7" rx="49.4" ry="54.8"/>
                    </clipPath>
                </defs>
                <g>    
                    <g class="outer-eye">
                        <ellipse cx="124.3" cy="328.9" rx="49.4" ry="54.8" fill="#000"/>
                        <ellipse fill="#f6ea00" cx="124.3" cy="335.7" rx="38.3" ry="42.0"/>
                    </g>
                    <g clip-path={`url(#cat-eye-left-clip-${ this.state.id})`}>
                        <g class="inner-eye">
                            <ellipse cx="128.1" cy="327" rx="30.9" ry="47.2" fill="#000"/>
                            <path d="m109.6 293.3c-6.1 8.1-5.5 8.8-7.0 17.4 10.9 4.4 16.7 4.9 27.9 3.6 1.6-1.9 2.3-3.9 1.9-5.9-5.5-8.9-12.7-12.9-22.8-15.2z" fill="#fff"/>
                            <ellipse cx="139" cy="330.2" rx="8.0" ry="11.6" fill="#fff"/>
                        </g>
                    </g>
                </g>
                <g>
                    <g class="outer-eye">
                        <ellipse cx="348.9" cy="329.7" rx="49.4" ry="54.8" fill="#000"/>
                        <ellipse fill="#f6ea00" cx="348.9" cy="336.5" rx="38.3" ry="42.0"/>
                    </g>
                    <g clip-path={`url(#cat-eye-right-clip-${ this.state.id})`}>
                        <g class="inner-eye">
                            <ellipse cx="349.5" cy="327" rx="30.9" ry="47.2" fill="#000"/>
                            <path d="m331 293.3c-6.1 8.1-5.5 8.8-7.0 17.4 10.9 4.4 16.7 4.9 27.9 3.6 1.6-1.9 2.3-3.9 1.9-5.9-5.5-8.9-12.7-12.9-22.8-15.2z" fill="#fff"/>
                            <ellipse cx="360.4" cy="330.2" rx="8.0" ry="11.6" fill="#fff"/>
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
