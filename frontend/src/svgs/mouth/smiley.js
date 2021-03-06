import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Smiley(props){
    return (   
        <g>   
            <path id={`moji-${ props.id }-mouth`} fill="#000" d="m 259.4,392.2 c 2.7,16.8 -3.7,36.8 -22.3,35.9 -21.0,1.3 -26.7,-22.7 -22.6,-35.1 5.3,-9.7 8.6,5.7 8.8,12.9 1.4,15.0 23.0,15.3 25.8,-0.4 0.9,-7.9 6.1,-21.9 10.2,-13.1 z" />
        </g>
    )
}

export default memo(Smiley);

