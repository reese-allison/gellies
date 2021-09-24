import { h, Fragment } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

export default (props) => {
    return (
        <radialGradient id={`moji-${ props.id }-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
            <stop offset="0" stop-color="rgb(255,255,255)" stop-opacity=".70" fx="0%" fy="0%"></stop>
            <stop offset="1" stop-color="rgb(220,220,220)" stop-opacity=".70"></stop>
        </radialGradient>
    )
}
