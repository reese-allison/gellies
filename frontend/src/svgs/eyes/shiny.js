import { h, Fragment } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

export default (props) => {
    return (
        <g>
            <defs>
                <clipPath id={`circle-eye-left-clip-${ props.id}`}>
                    <ellipse cx="125" cy="329.8" rx="49.4" ry="54.8"/>
                </clipPath>
                <clipPath id={`circle-eye-right-clip-${ props.id }`}>
                    <ellipse cx="349.6" cy="330.6" rx="49.4" ry="54.8"/>
                </clipPath>
            </defs>
            <g>
                <g class="outer-eye">
                    <ellipse cx="125" cy="329.8" rx="49.4" ry="54.8" fill="#000"/>
                </g>
                <g clip-path={`url(#circle-eye-left-clip-${ props.id })`}>
                    <g class="inner-eye">
                        <ellipse fill="#fff" cx="124.9" cy="336.6" rx="38.3" ry="42.0"/>
                        <path style="stroke:black;stroke-width:4px;stroke-opacity:1;" fill="#fff" d="m 106.3,332.1 c -5.0,3.4 -13.1,4.8 -17.5,-0.3 -4.7,-6.5 -1.9,-15.1 1.1,-21.6 5.6,-12.2 16.0,-23.1 29.5,-26.3 6.3,-0.7 12.2,5.6 10.9,12.0 -1.3,15.1 -11.5,28.5 -24.2,36.3 z" />
                    </g>
                </g>
            </g>
            <g>
                <g class="outer-eye">
                    <ellipse cx="349.6" cy="330.6" rx="49.4" ry="54.8" fill="#000"/>
                </g>
                <g clip-path={`url(#circle-eye-right-clip-${ props.id })`}>
                    <g class="inner-eye">
                        <ellipse fill="#fff" cx="349.5" cy="337.5" rx="38.3" ry="42.0"/>
                        <path style="stroke:black;stroke-width:4px;stroke-opacity:1;" fill="#fff" d="m 330.9,333.0 c -6.3,5.0 -19.2,4.2 -19.7,-5.7 -1.2,-11.5 5.7,-22.1 12.9,-30.5 5.9,-6.2 13.9,-12.3 22.9,-11.9 7.6,1.3 9.1,10.2 7.3,16.5 -2.9,13.0 -12.1,24.6 -23.5,31.5 z" />
                    </g>
                </g>
            </g>
        </g>
    )
};