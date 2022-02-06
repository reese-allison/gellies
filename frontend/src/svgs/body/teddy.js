import { h, Fragment } from 'preact';
import { Suspense, memo } from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Teddy(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <ellipse mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:2px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} cx="396.4" cy="214.5" rx="58.9" ry="57.1" />
                <ellipse stroke-linejoin="round" mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.75;`} cx="396.4" cy="214.5" rx="58.9" ry="57.1" />
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <ellipse mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:2px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} cx="84.4" cy="211.3" rx="58.9" ry="57.1" />
                <ellipse stroke-linejoin="round" mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.75;`} cx="84.4" cy="211.3" rx="58.9" ry="57.1" />
    
            </g>
        )
    }

    const Body = () => {
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

    const Gelly = () => {
        if(props.orientation.includes('right')){
            return (
                <g>
                    <RightEar style="transform:scale(.95);transform-origin:center;" />
                    <Body />
                    <LeftEar style="transform:scale(1.05);transform-origin:center left;" />
                </g>
            )
        }
        else if (props.orientation.includes('left')){
            return (
                <g>
                    <LeftEar style="transform:scale(.95);transform-origin:center;" />
                    <Body />
                    <RightEar style="transform:scale(1.05);transform-origin:center right;" />
                </g>
            )
        }
        else if (props.orientation === 'back'){
            return (
                <g>
                    <Body />
                    <RightEar />
                    <LeftEar />
                </g>
            )  
        }
        else{
            return (
                <g>
                    <RightEar />
                    <LeftEar />
                    <Body />
                </g>
            )
        }
    }

    return (
        <g>
            <Gelly />
        </g>
    )
}

export default memo(Teddy);

