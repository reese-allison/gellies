import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Frown(props){
    return (
        <g>
            <path id="moji-{{ moji_id }}-mouth" fill="#000" d="m 213.8,425.3 c -2.6,-16.9 4.1,-36.7 22.6,-35.6 21.0,-1.1 26.5,22.9 22.2,35.4 -5.4,9.6 -8.6,-5.8 -8.7,-13.0 -1.2,-15.0 -22.9,-15.6 -25.8,0.2 -1.0,7.8 -6.3,21.9 -10.3,13.0 z" />
        </g>
    )
}

export default memo(Frown);
