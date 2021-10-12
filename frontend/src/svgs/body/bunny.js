import { h, Fragment } from 'preact';
import { Suspense, memo} from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Bunny(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:.3px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} d="m 435.3,274.2 c 7.4,-41.1 14.2,-83.4 6.9,-125.1 -2.4,-19.4 -12.6,-41.2 -33.0,-46.6 -17.0,-1.7 -29.6,14.2 -36.1,28.1 -11.4,27.7 -9.1,58.7 -8.1,88.1 70.3,55.6 0,0 70.3,55.6 z" />
                <path mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.6;`} stroke-linejoin="round" d="m 435.3,274.2 c 7.4,-41.1 14.2,-83.4 6.9,-125.1 -2.4,-19.4 -12.6,-41.2 -33.0,-46.6 -17.0,-1.7 -29.6,14.2 -36.1,28.1 -11.4,27.7 -9.1,58.7 -8.1,88.1 70.3,55.6 0,0 70.3,55.6 z" />
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:.3px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} d="m 50.4,274.8 c -7.4,-41.1 -14.2,-83.4 -6.9,-125.1 2.4,-19.4 12.6,-41.2 33.0,-46.6 17.0,-1.7 29.6,14.2 36.1,28.1 11.4,27.7 9.1,58.7 8.1,88.1 -70.3,55.6 0,0 -70.3,55.6 z" />
                <path mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.6;`} stroke-linejoin="round" d="m 50.4,274.8 c -7.4,-41.1 -14.2,-83.4 -6.9,-125.1 2.4,-19.4 12.6,-41.2 33.0,-46.6 17.0,-1.7 29.6,14.2 36.1,28.1 11.4,27.7 9.1,58.7 8.1,88.1 -70.3,55.6 0,0 -70.3,55.6 z" />
            </g>
        )
    }

    const Body = () => {
        return (
            <g>
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:.3px;stroke-opacity:1;" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
                <path style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.6;`} stroke-linejoin="round" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
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

export default memo(Bunny);
