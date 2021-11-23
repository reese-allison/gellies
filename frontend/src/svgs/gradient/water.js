
import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Water(props){
    return (
        <radialGradient id={`moji-${ props.id }-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
            <stop offset="0" stop-color="rgb(0,255,255)" stop-opacity=".99" fx="0%" fy="0%">
                <animate attributeName="stop-color" values="rgb(0,255,255);rgb(0,205,255);rgb(0,255,255);" dur="3s" repeatCount="indefinite"/>
            </stop>
            <stop offset=".5" stop-color="rgb(0,205,255)" stop-opacity=".99">
                <animate attributeName="stop-color" values="rgb(0,205,255);rgb(0,165,255);rgb(0,205,255);" dur="3s" repeatCount="indefinite"/>
            </stop>
            <stop offset="1" stop-color="rgb(0,165,255)" stop-opacity=".99">
                <animate attributeName="stop-color" values="rgb(0,165,255);rgb(0,125,255);rgb(0,165,255);" dur="3s" repeatCount="indefinite"/>
            </stop>
        </radialGradient>
    )
}

export default memo(Water);











