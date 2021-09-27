import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function rand_rgb(max, min){
    return Math.floor(Math.random() * (max - min) + min)
}

function Random(props){
    let red = rand_rgb(255,80)
    let green = rand_rgb(255,80)
    let blue = rand_rgb(255,80)
    let red2 = red - rand_rgb(80,10)
    let green2 = green - rand_rgb(80,10)
    let blue2 = blue - rand_rgb(80,10)

    return (
        <radialGradient id={`moji-${ props.id }-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
            <stop offset="0%" style={`stop-color:rgb(${ red },${ green },${ blue });stop-opacity:.95;`} fx="0%" fy="0%" />
            <stop offset="100%" style={`stop-color:rgb(${ red2 },${ green2 },${ blue2 });stop-opacity:.95;`} />
        </radialGradient>
    )
}

export default memo(Random);










