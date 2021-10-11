import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Freckle(props){
    if(props.orientation != 'back'){
        return (
            <g style={props.style}>
                <circle style="fill:#000;fill-opacity:.3;" cx="143.4" cy="403.0" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="135.3" cy="390.5" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="126.3" cy="402.4" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="119.2" cy="388.5" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="151.9" cy="390.7" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="339.4" cy="403.3" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="347.5" cy="390.7" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="356.5" cy="402.6" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="363.6" cy="388.8" r="2" /> 
                <circle style="fill:#000;fill-opacity:.3;" cx="330.9" cy="390.9" r="2" />
            </g>
        )
    }
}

export default memo(Freckle);
