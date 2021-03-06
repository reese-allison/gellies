import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Snaggle(props){
    return (   
        <g>
            <path style="stroke:black;stroke-width:4px;stroke-opacity:1;fill:#fff;" d="m 254.1,417.3 10.1,-19.5 13.5,18.6 z" />
            <path fill="#000" d="m 198.5,422.4 c -4.3,-1.5 -4.0,-5.0 0.6,-7.0 l 1.9,-0.8 41.2,-0.6 c 31.6,-0.5 41.6,-0.5 43.2,-0.2 7.3,1.5 5.3,6.7 -3.4,8.8 -3.3,0.7 -81.3,0.7 -83.5,-0.0 z" />
        </g>
    )
}

export default memo(Snaggle);
