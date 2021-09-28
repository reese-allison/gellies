import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Hungry(props){
    return (
        <g>
            <path id="moji-{{ moji_id }}-mouth" fill="#000" d="m 281.2,414.4 c 2.0,4.7 -1.5,7.4 -6.5,0.6 -2.3,-3.6 -5.0,-6.8 -5.9,-10.8 -1.2,-3.5 -0.1,-7.2 -4.5,-9.3 -13.5,-8.1 -25.8,-6.0 -37.9,-1.3 -5.3,1.3 -6.6,2.0 -8.5,9.3 -2.2,5.6 -5.5,10.7 -9.2,15.4 -3.1,2.8 -7.0,-0.6 -2.7,-4.6 4.9,-9.0 9.4,-19.4 7.0,-29.9 -1.9,-7.7 -7.6,-13.6 -12.8,-19.4 1.5,-4.9 6.6,-1.5 9.0,1.8 5.3,6.8 9.6,14.8 10.6,23.5 12.6,-7.1 28.7,-9.4 42.2,-3.2 3.0,1.8 6.0,1.4 7.3,-3.4 4.2,-10.1 8.2,-15.0 12.9,-21.1 3.2,-3.2 7.0,-0.1 3.8,4.6 -7.8,9.9 -14.3,20.4 -12.5,31.2 1.2,6.9 4.3,10.3 7.8,16.4 z" />
        </g>
    )
}

export default memo(Hungry);
