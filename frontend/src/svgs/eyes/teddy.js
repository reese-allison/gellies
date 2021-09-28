import { h, Fragment } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

export default () => {
    return (
        <g>
            <g class="inner-eye">
                <circle style="stroke:black;stroke-width:4px;stroke-opacity:1;" fill="#fff" cx="121" cy="332" r="12" />
            </g>
            <g class="inner-eye">
                <circle style="stroke:black;stroke-width:4px;stroke-opacity:1;" fill="#fff" cx="350" cy="332" r="12" />
            </g>
        </g>
    )
};
