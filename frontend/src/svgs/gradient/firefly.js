import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Firefly(props){
    return (
        <radialGradient id={`moji-${ props.id }-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
            <stop offset="0" stop-color="rgb(241,217,68)" stop-opacity=".99" fx="0%" fy="0%">
                <animate attributeName="offset" values="0;.35;0;.35;0;0" keyTimes="0;.1;.2;.3;.4;1" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="stop-color" values="rgb(241,217,68);rgb(245,228,119);rgb(241,217,68);rgb(245,228,119);rgb(241,217,68);rgb(241,217,68);" keyTimes="0;.1;.2;.3;.4;1" dur="6s" repeatCount="indefinite"/>
            </stop>
            <stop offset="1" stop-color="rgb(177,154,11)" stop-opacity=".99">
                <animate attributeName="stop-color" values="rgb(177,154,11);rgb(222,193,13);rgb(177,154,11);rgb(222,193,13);rgb(177,154,11);rgb(177,154,11);" keyTimes="0;.1;.2;.3;.4;1" dur="6s" repeatCount="indefinite"/>
            </stop>
        </radialGradient>
    )
}

export default memo(Firefly);



