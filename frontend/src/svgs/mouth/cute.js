import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Cute(props){
    return (
        <g>
            <path fill="#000" d="m207.5 421c-12-3.7-19-23-9-32 15-2.2-1.3 18 11 21 11 5.9 20-3.8 23-13 7.7-8.8 11 6 15 11 6.1 7.3 22 5.4 23-5.3-.1-10-.6-17 6.6-16 11 11-.5 32-12 34-10 4.5-19-2.6-27-7.9-9.6 4.1-15 11-30 8.7z" />
        </g>
    )
}

export default memo(Cute);
