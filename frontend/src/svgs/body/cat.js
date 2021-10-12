import { h, Fragment } from 'preact';
import { Suspense , memo } from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Cat(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:.35px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} d="m 450.3,161.3 c -63.5,2.9 -83.5,18.5 -114.7,48.2 l 89.2,79.0 c 32.3,-49.3 36.8,-94.9 25.4,-127.2 z" />
                <path mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} stroke-linejoin="round" d="m 450.3,161.3 c -63.5,2.9 -83.5,18.5 -114.7,48.2 l 89.2,79.0 c 32.3,-49.3 36.8,-94.9 25.4,-127.2 z" />    
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
              <path mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:.35px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} d="m 32.2,164.0 c 63.5,2.9 83.5,18.5 114.7,48.2 L 57.7,291.3 C 25.3,242.0 20.8,196.4 32.2,164.0 Z" />
              <path mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} stroke-linejoin="round" d="m 32.2,164.0 c 63.5,2.9 83.5,18.5 114.7,48.2 L 57.7,291.3 C 25.3,242.0 20.8,196.4 32.2,164.0 Z" />
            </g>
        )
    }

    const Body = () => {
        return (
            <g>
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:.35px;stroke-opacity:1;" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
                <path style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} stroke-linejoin="round" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
                <g clip-path={`url(#body-clip-${ props.id })`}>
                    <Suspense>
                        <Pattern id={props.id} style={props.style} orientation={props.orientation} />
                    </Suspense>
                </g>
            </g>
        )
    }

    const Moji = () => {
        if(props.orientation === 'right'){
            return (
                <g>
                    <RightEar style="transform:scale(.95);transform-origin:center;" />
                    <Body />
                    <LeftEar style="transform:scale(1.05);transform-origin:center left;" />
                </g>
            )
        }
        else if (props.orientation === 'left'){
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
            <Moji />
        </g>
    )
}

export default memo(Cat);
