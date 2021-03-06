import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Buck_teeth(props){
    return (
        <g>
            <path style="stroke:black;stroke-width:4px;stroke-opacity:1;fill:#fff" d="m 215.6,414.8 0.2,24.9 h 24.0 l 1.2,-26.6 z" />
            <path style="stroke:black;stroke-width:4px;stroke-opacity:1;fill:#fff" d="m 266.5,414.5 -0.2,20.1 h -24.0 l -1.2,-21.4 z" />
            <path fill="#000" d="m 195.3,420.3 c -7.0,-2.2 -5.6,-9.9 3.2,-10.8 l 40.7,0.7 c 31.6,0.5 42.2,-1.9 43.7,-1.6 7.3,1.5 11.6,8.6 2.8,10.7 -35.3,-7.1 -59.3,-5.6 -90.5,1.0 z" />
        </g>
    )
}

export default memo(Buck_teeth);
