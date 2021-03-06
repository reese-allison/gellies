import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Bored(props){
    return (
        <g>
            <path id="moji-{{ moji_id }}-mouth" fill="#000" d="m 197.6,391.5 c -3.4,-1.2 -3.1,-3.9 0.4,-5.5 l 1.5,-0.6 32.7,-0.5 c 25.1,-0.4 33.1,-0.4 34.3,-0.2 5.8,1.2 4.2,5.3 -2.7,7.0 -2.6,0.6 -64.6,0.6 -66.4,-0.0 z" />
        </g>
    )
}

export default memo(Bored);
