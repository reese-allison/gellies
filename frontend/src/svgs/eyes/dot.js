import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Dot(){
    return (
        <g>
            <g>
                <g class="inner-eye">
                    <circle fill="#000" cx="131" cy="324" r="6" />
                </g>
            </g>
            <g>
                <g class="inner-eye">
                    <circle fill="#000" cx="352" cy="324" r="6" />
                </g>
            </g>
        </g>
    )
};

export default memo(Dot);
