import { h, Fragment } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

export default (props) => {
    return (
        <g>
            <defs>
                <clipPath id={`frog-eye-left-clip-${ props.id }`}>
                    <ellipse cx="124.3" cy="328.9" rx="49.4" ry="54.8"/>
                </clipPath>
                <clipPath id={`frog-eye-right-clip-${ props.id }`}>
                    <ellipse cx="348.9" cy="329.7" rx="49.4" ry="54.8"/>
                </clipPath>
            </defs>
            <g>    
                <g class="outer-eye">
                    <ellipse cx="124.3" cy="328.9" rx="49.4" ry="54.8" fill="#000"/>
                    <ellipse fill="#d6ff20" cx="124.3" cy="335.7" rx="38.3" ry="42.0"/>
                </g>
                <g clip-path={`url(#frog-eye-left-clip-${ props.id })`}>
                    <g class="inner-eye">
                        <path fill="#000" d="M 97.4,329.9 H 148.4 c 1.6,0 3,1.3 3,3 v 6.6 c 0,1.6 -1.3,3 -3,3 H 97.4 c -1.6,0 -3,-1.3 -3,-3 v -6.6 c 0,-1.6 1.3,-3 3,-3 z" />
                    </g>
                </g>
            </g>
            <g>
                <g class="outer-eye">
                    <ellipse cx="348.9" cy="329.7" rx="49.4" ry="54.8" fill="#000"/>
                    <ellipse fill="#d6ff20" cx="348.9" cy="336.5" rx="38.3" ry="42.0"/>
                </g>
                <g clip-path={`url(#frog-eye-right-clip-${ props.id })`}>
                    <g class="inner-eye">
                        <path fill="#000" d="m 324.1,330.0 h 50.9 c 1.6,0 3,1.3 3,3 v 6.6 c 0,1.6 -1.3,3 -3,3 h -50.9 c -1.6,0 -3,-1.3 -3,-3 v -6.6 c 0,-1.6 1.3,-3 3,-3 z" />
                    </g>
                </g>
            </g>
        </g>
    )
};


