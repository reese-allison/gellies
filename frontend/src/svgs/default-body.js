import { h, Fragment } from 'preact';
import { Suspense } from 'preact/compat';
import { maybeLoadTemplate } from '../common';
import { memo } from 'preact/compat';


/** @jsx h */
/** @jsxFrag Fragment */

function DefaultBody(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    return (
        <g>
            <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:2px;stroke-opacity:1;" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
            <path stroke-linejoin="round" style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.75;`} d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
            <g clip-path={`url(#body-clip-${ props.id })`}>
                <Suspense>
                    <Pattern id={props.id} style={props.style} orientation={props.orientation} />
                </Suspense>
            </g>
        </g>
    )
}

export default memo(DefaultBody);
