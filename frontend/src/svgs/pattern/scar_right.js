import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Scar_right(props){
    if(props.orientation != 'back'){
        return (
            <g style={props.style}>
                <path style="fill:#fff;opacity:.4;" d="m 351.2,253.5 c 3.6,5.6 9.1,12.1 6.2,19.2 -1.4,7.9 -3.0,16.7 1.1,24.2 3.3,7.3 2.8,15.9 -0.4,23.1 -2.2,9.4 3.1,18.1 4.9,27.1 -0.9,8.1 -4.9,15.5 -7.1,23.4 -4.6,13.8 -9.2,27.6 -13.9,41.5 3.9,-22.3 8.8,-44.5 11.3,-67.1 -0.9,-9.5 -5.8,-18.7 -4.3,-28.5 4.6,-7.3 1.0,-16.0 -1.6,-23.3 -2.1,-6.0 -2.4,-12.8 -0.3,-18.9 1.3,-6.9 2.7,-13.9 4.0,-20.8 z" />
            </g>
        )
    }
}

export default memo(Scar_right);