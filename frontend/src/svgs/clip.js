import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Clip(props){
    return (
        <clipPath id={`body-clip-${ props.id }`}>
            <path d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
        </clipPath>
    )
}

export default memo(Clip);
