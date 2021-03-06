import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Cat(props){
    return (
        <g>
            <path d="m 223.9,357.0 h 27.6 l -11.9,17.8 -5.4,-0.1 z" fill={`url(#moji-${ props.id }-body-color)`} />
            <path style="fill:#fff;fill-opacity:.5;stroke:black;stroke-width:4px;stroke-opacity:1;" d="m 223.9,357.0 h 27.6 l -11.9,17.8 -5.4,-0.1 z" />
            <path fill="#000" d="m 213.8,418.3 17.5,-29.6 c 0.6,-0.8 2.1,-13.3 2.5,-13.7 0.8,-0.8 4.8,-0.5 5.6,-0.0 0.4,0.3 1.5,12.8 2.2,13.5 l 17.4,30.1 c 1.8,4.7 -4.7,7.7 -7.3,3.5 l -15.6,-25.3 -15.0,23.5 c -3.3,4.7 -9.5,2.7 -7.5,-1.9 z" />    
        </g>
    )
}

export default memo(Cat);
