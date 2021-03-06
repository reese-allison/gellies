import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Knockout(props){
    return (
        <g>
            <path d="m 269.7,421.6 c 3.5,6.4 -3.8,18.7 -11.2,18.9 -7.6,0.1 -16.2,-12.6 -12.5,-19.4 3.8,-6.8 19.8,-6.4 23.7,0.5 z" fill="url(#moji-{{ moji_id }}-body-color)" />
            <path style="fill:#fff;fill-opacity:.5;stroke:black;stroke-width:4px;stroke-opacity:1;" d="m 269.7,421.6 c 3.5,6.4 -3.8,18.7 -11.2,18.9 -7.6,0.1 -16.2,-12.6 -12.5,-19.4 3.8,-6.8 19.8,-6.4 23.7,0.5 z" />
            <path fill="#000" d="m 196.0,422.4 c -4.8,-2.9 -5.8,-4.2 0.6,-7.0 l 1.9,-0.8 c 40.7,0.0 40.8,0.0 84.4,-0.9 13.3,3.6 10.2,8.8 -3.4,8.8 -39.2,-0.0 -39.5,-0.9 -83.5,-0.0 z" />
        </g>
    )
}

export default memo(Knockout);
