import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Bone(props){
    return (
        <radialGradient id={`moji-${ props.id }-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
            <stop offset="0" stop-color="rgb(241,240,201)" stop-opacity=".99" fx="0%" fy="0%"></stop>
            <stop offset="1" stop-color="rgb(192,202,145)" stop-opacity=".99"></stop>
        </radialGradient>
    )
}

export default memo(Bone);






