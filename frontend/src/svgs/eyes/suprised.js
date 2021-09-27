import { h, Fragment } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

export default () => {
    return (
        <g>
            <g>
                <g class="outer-eye">
                    <circle style="fill:#fff;stroke:#000;stroke-width:4px;" cx="349.8" cy="332.1" r="35.2" />
                </g>
                <g class="inner-eye">
                    <circle fill="#000" cx="350" cy="332" r="12" />
                </g>
            </g>
            <g>
                <g class="outer-eye">
                    <circle style="fill:#fff;stroke:#000;stroke-width:4px;" cx="121.4" cy="331.9" r="35.2" />
                </g>
                <g class="inner-eye">
                    <circle fill="#000" cx="121" cy="332" r="12" />
                </g>
            </g>
        </g>
    )
};
