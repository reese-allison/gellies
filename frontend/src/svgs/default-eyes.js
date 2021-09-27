import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function DefaultEyes(){
    return (
        <g>
            <g>
                <g class="inner-eye">
                    <circle fill="#fff" cx="131" cy="324" r="6" />
                </g>
            </g>
            <g>
                <g class="inner-eye">
                    <circle fill="#fff" cx="352" cy="324" r="6" />
                </g>
            </g>
        </g>
    )
};

export default memo(DefaultEyes);
