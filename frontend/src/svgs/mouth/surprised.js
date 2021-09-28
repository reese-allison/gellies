import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Surprised(props){
    return (   
        <g>
            <ellipse id={`moji-${ props.id }-mouth`} fill="#000" cx="240" cy="418" rx="11" ry="5" />
        </g>
    )
}

export default memo(Surprised);