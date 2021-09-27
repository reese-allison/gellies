
import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Water(props){
    return (
        <radialGradient id={`moji-${ props.id }-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
            <stop offset="0" stop-color="rgb(0,230,255)" stop-opacity=".99" fx="0%" fy="0%">
                <animate attributeName="stop-color" values="rgb(0,230,255);rgb(0,170,255);rgb(0,110,255);rgb(0,170,255);rgb(0,230,255);" dur="5s" repeatCount="indefinite"/>
            </stop>
            <stop offset=".5" stop-color="rgb(0,200,255)" stop-opacity=".99">
                <animate attributeName="stop-color" values="rgb(0,170,255);rgb(0,110,255);rgb(0,170,255);rgb(0,230,255);rgb(0,170,255);" dur="5s" repeatCount="indefinite"/>
            </stop>
            <stop offset="1" stop-color="rgb(0,170,240)" stop-opacity=".99">
                <animate attributeName="stop-color" values="rgb(0,110,255);rgb(0,170,255);rgb(0,230,255);rgb(0,170,255);rgb(0,110,255);" dur="5s" repeatCount="indefinite"/>
            </stop>
        </radialGradient>
    )
}

export default memo(Water);











