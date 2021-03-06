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
                <g class="outer-eye">
                    <path style="fill:#000;stroke:#000;stroke-width:2;" d="m 120.7,371.2 c -29.5,-0.6 -50.7,-37.4 -36.3,-63.4 11.9,-24.4 49.9,-28.4 66.8,-7.1 13.5,15 9.7,41.5 -7.8,51.7 -12,7.8 -30.3,5 -37.6,-8 -7.2,-10.2 -4.1,-25.8 7.3,-31.6 9.4,-6 24.4,5.4 19.4,15.9 -0.7,10.2 -16.3,3.6 -8,-4.6 -9.4,-7.8 -14.8,8.6 -5.2,15.2 11.8,6 24.9,1.4 26.5,-10.9 4,-17.5 -14.2,-34.4 -31.4,-30.2 -18.3,2.9 -29.6,23.5 -24.7,41 4,20 26.1,31.2 45.2,27.8 4.9,-0.2 14.1,-4.7 16.2,-5.6 -8.2,7.3 -19.6,10.3 -30.4,9.8 z" />
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 119 328" to="360 119 328" dur="15s" repeatCount="indefinite"/>
                </g>
                <g class="outer-eye">
                    <path style="fill:#000;stroke:#000;stroke-width:2;" d="m 351.4,286.5 c 29.6,0.6 50.8,37.4 36.4,63.4 -11.9,24.4 -50,28.4 -66.9,7.1 -13.5,-15 -9.7,-41.5 7.8,-51.7 12,-7.8 30.3,-5 37.6,8 7.3,10.2 4.1,25.8 -7.3,31.6 -9.4,6 -24.4,-5.4 -19.4,-15.9 0.7,-10.2 16.3,-3.6 8,4.6 9.4,7.8 14.8,-8.6 5.2,-15.2 -11.8,-6 -24.9,-1.4 -26.5,10.9 -4,17.5 14.2,34.4 31.4,30.2 18.4,-2.9 29.7,-23.5 24.8,-41 -4,-20 -26.2,-31.2 -45.3,-27.8 -4.9,0.2 -14.1,4.7 -16.2,5.6 8.2,-7.3 19.6,-10.3 30.4,-9.8 z" />
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 352 328" to="360 352 328" dur="15s" repeatCount="indefinite"/>
                </g>
            </g>
        )
    }
};


export {
    Eyes, willBlink, PureComponent as Blinking
};
