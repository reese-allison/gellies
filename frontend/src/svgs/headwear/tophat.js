import { h, Fragment } from 'preact';
import { PureComponent, forwardRef } from 'preact/compat';


const willRenderFront = () => {
    return true;
}


const willRenderBack = () => {
    return false;
}


/** @jsx h */
/** @jsxFrag Fragment */

class Tophat extends PureComponent{
    constructor(props){
        super(props);
        this.ref = props.forwardRef
        this.state = {
            style: props.style,
            id: props.id
        }
    }

    render(){
        return (
            <g ref={this.ref}>
                <g style={this.state.style}>
                    <linearGradient id={`moji-${ this.state.id }-headwear-color`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                        <stop offset="50%" style="stop-color:rgb(70,70,70);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                    </linearGradient>
                    <filter id={`moji-${ this.state.id }-headwear-shadow-blur`} height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                    </filter>
                    <g>
                        <path id={`moji-headwear-${ this.state.id }-shadow`} fill="rgba(0,0,0,.25)" filter={`url(#moji-${ this.state.id }-headwear-shadow-blur)`} d="m 286.8,181.5 c -23.8,31.5 -81.9,31.3 -104.9,4.9 -21.4,7.9 -17.4,28.9 11.0,38.0 26.4,5.8 54.3,4.3 80.6,-1.3 13.9,-3.1 40.9,-13.5 28.9,-32.0 -3.7,-5.1 -9.6,-8.5 -15.8,-9.5 z" />
                        <path fill={`url(#moji-${ this.state.id }-headwear-color)`} style="stroke:#000;stroke-width:4;stroke-opacity:1;" d="m 279.8,178.2 c 0.8,-20.4 3.5,-37.8 8.7,-57.3 0.4,-1.5 -0.1,-3.1 -1.4,-4.1 -13.9,-10.6 -31.6,-16.4 -50.0,-16.4 -18.3,0 -36.0,5.8 -50.0,16.4 -1.2,0.9 -1.8,2.5 -1.4,4.1 5.1,19.4 7.8,36.9 8.7,57.3 -26.7,-12.4 -39.1,21.6 -4.3,32.5 30.5,9.7 65.0,11.4 94.1,0 34.7,-16.4 23.4,-48.2 -4.3,-32.5 z" />
                        <path style="fill:#f00;stroke:#000;stroke-width:4px;stroke-opacity:1;" d="m 279.8,178.2 c 0.2,-3.7 0.4,-7.4 0.7,-11.2 -36.8,14.7 -53.9,14.1 -87.0,-0.7 0.2,4.0 0.5,8.0 0.8,12.0 19.1,17.4 62.0,18.7 85.4,0 z" />
                    </g>
                </g>
            </g>
        )
    }
}

export {
    Tophat as Headwear, willRenderFront, willRenderBack
};
