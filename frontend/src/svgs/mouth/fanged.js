import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Fanged(props){
    return (
        <g>
            <path style="stroke:black;stroke-width:4px;stroke-opacity:1;fill:#fff;" d="m 281.0,419.1 -11.2,18.9 -12.5,-19.4 z" />
            <path style="stroke:black;stroke-width:4px;stroke-opacity:1;fill:#fff;" d="m 202.3,419.2 11.2,18.9 12.5,-19.4 z" />
            <path fill="#000" d="m 196.0,422.4 c -4.8,-2.9 -5.8,-4.2 0.6,-7.0 l 1.9,-0.8 c 40.7,0.0 40.8,0.0 84.4,-0.9 13.3,3.6 10.2,8.8 -3.4,8.8 -39.2,-0.0 -39.5,-0.9 -83.5,-0.0 z" />
        </g>
    )
}

export default memo(Fanged);
