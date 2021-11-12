import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function Rosy(props){
    if(!props.orientation.includes('back')){
        return (
            <g style={props.style}>
                <ellipse style="fill:#ffaaaa;stroke:#ffaaaa;stroke-opacity:.45;stroke-width:4px;opacity:.9;" cx="109" cy="378" rx="24" ry="14" />
                <ellipse style="fill:#ffaaaa;stroke:#ffaaaa;stroke-opacity:.45;stroke-width:4px;opacity:.9;" cx="374" cy="378" rx="24" ry="14" />
            </g>
        )
    }
}

export default memo(Rosy);