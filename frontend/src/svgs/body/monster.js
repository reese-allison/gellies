import { h, Fragment } from 'preact';
import { Suspense, memo } from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Monster(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path fill={`url(#moji-${ props.id }-monster-body-color)`} style="stroke:#4D4D4D;stroke-width:2" d="m 471.5,251.0 -54.1,8.2 0.9,12.5 54.1,-1.1 z" />
                <path fill={`url(#moji-${ props.id }-monster-body-color)`} style="stroke:#4D4D4D;stroke-width:2" d="m 496.6,232.8 -30.1,2.2 4.0,53.7 30.1,-2.2 z" />
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                    <path fill={`url(#moji-${ props.id }-monster-body-color)`} style="stroke:#4D4D4D;stroke-width:2" d="m 16.2,251.0 54.1,8.2 -0.9,12.5 -54.1,-1.1 z" />
                    <path fill={`url(#moji-${ props.id }-monster-body-color)`} style="stroke:#4D4D4D;stroke-width:2" d="m -8.8,232.8 30.1,2.2 -4.0,53.7 -30.1,-2.2 z" />
            </g>
        )
    }

    const Body = () => {
        return (
            <g>
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:2px;stroke-opacity:1;" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
                <path style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.75;`} stroke-linejoin="round" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
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
            <radialGradient id={`moji-${ props.id }-monster-body-color`} fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
                <stop offset="0" stop-color="rgb(180,180,180)" stop-opacity="1" fx="0%" fy="0%"></stop>
                <stop offset="1" stop-color="rgb(140,140,140)" stop-opacity="1"></stop>
            </radialGradient>
            <Gelly />
        </g>
    )
}

export default memo(Monster);
