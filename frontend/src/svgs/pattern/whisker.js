import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Whisker(props){
    if(props.orientation.includes('back')){
        return (
            <g style={"transform:scale(-1, 1);transform-origin:39.75% 0%;"}>
                <g style={props.style}>
                    <path style="fill:#000;fill-opacity:.1;" d="M -18.1,432.0 C 130.9,379.1 131.4,378.9 -21.1,397.0 Z" />
                    <path style="fill:#000;fill-opacity:.1;" d="M 41.8,489.6 C 127.3,371.7 127.3,372.0 1.2,468.0 Z" />
                    <path style="fill:#000;fill-opacity:.1;" d="M 501.9,430.7 C 352.8,377.8 352.2,377.5 504.9,395.7 Z" />
                    <path style="fill:#000;fill-opacity:.1;" d="M 441.9,488.2 C 356.3,370.4 356.3,370.7 482.5,466.6 Z" />
                </g>
            </g>
        )
    }
    else{
        return (
            <g style={props.style}>
                <path style="fill:#000;fill-opacity:.1;" d="M -18.1,432.0 C 130.9,379.1 131.4,378.9 -21.1,397.0 Z" />
                <path style="fill:#000;fill-opacity:.1;" d="M 41.8,489.6 C 127.3,371.7 127.3,372.0 1.2,468.0 Z" />
                <path style="fill:#000;fill-opacity:.1;" d="M 501.9,430.7 C 352.8,377.8 352.2,377.5 504.9,395.7 Z" />
                <path style="fill:#000;fill-opacity:.1;" d="M 441.9,488.2 C 356.3,370.4 356.3,370.7 482.5,466.6 Z" />
            </g>
        )
    }
}

export default memo(Whisker);