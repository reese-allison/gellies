import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Teddy(props){
    return (   
        <g>
            <path d="m 223.9,377.2 c 5.0,-7.7 22.8,-7.8 27.6,0 3.9,6.3 -10.0,19.9 -10.0,19.9 L 232.5,397 c 0,0 -12.5,-13.7 -8.5,-19.7 z" fill={`url(#moji-${ props.id }-body-color)`} />
            <path style="fill:#fff;fill-opacity:.5;stroke:black;stroke-width:4px;stroke-opacity:1;" d="m 223.9,377.2 c 5.0,-7.7 22.8,-7.8 27.6,0 3.9,6.3 -10.0,19.9 -10.0,19.9 L 232.5,397 c 0,0 -12.5,-13.7 -8.5,-19.7 z" />
            <path fill="#000" d="m 207.5,421 c -12,-3.7 -19,-23 -9,-32 15,-2.2 -1.3,18 11,21 11,5.9 20,-3.8 23,-13 l 9.0,0.1 C 243.8,400.3 245.5,405.5 247.5,408 c 6.1,7.3 22,5.4 23,-5.3 -0.1,-10 -0.6,-17 6.6,-16 11,11 -0.5,32 -12,34 -10,4.5 -19,-2.6 -27,-7.9 -9.6,4.1 -15,11 -30,8.7 z" />
        </g>
    )
}

export default memo(Teddy);
