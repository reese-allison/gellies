import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Beauty_mark(props){
    if(props.orientation != 'back'){
        return (
            <g style={props.style}>
                <circle fill="#000" cx="304.8" cy="394.6" r="3" />
            </g>
        )
    }
}

export default memo(Beauty_mark);
