import { h, Fragment } from 'preact';
import { Suspense, memo } from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Alien(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path style='stroke-width:2px;stroke-opacity:1;stroke:black;' fill={`url(#moji-${ props.id }-body-color)`} d="m 418.9,255.2 -11.4,-4.1 c -32.0,-70.6 6.1,-88.8 33.5,-55.5 l -1.0,8.6 c -37.4,-42.4 -51.4,5.2 -21.1,50.9 z" />
                <path style={`fill:#000;fill-opacity:.25;stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.5;`} d="m 418.9,255.2 -11.4,-4.1 c -32.0,-70.6 6.1,-88.8 33.5,-55.5 l -1.0,8.6 c -37.4,-42.4 -51.4,5.2 -21.1,50.9 z" />
                <ellipse style="stroke:black;stroke-width:2px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} cx="442.6" cy="193.7" rx="24.8" ry="24.4" />
                <ellipse style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.75;`} cx="442.6" cy="193.7" rx="24.8" ry="24.4" />
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path style='stroke-width:2px;stroke-opacity:1;stroke:black;' fill={`url(#moji-${ props.id }-body-color)`} d="m 67.6,258.4 11.4,-4.1 C 111.2,183.7 72.9,165.4 45.5,198.8 l 1.0,8.6 c 37.4,-42.4 51.4,5.2 21.1,50.9 z" />
                <path style={`fill:#000;fill-opacity:.25;stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.5;`} d="m 67.6,258.4 11.4,-4.1 C 111.2,183.7 72.9,165.4 45.5,198.8 l 1.0,8.6 c 37.4,-42.4 51.4,5.2 21.1,50.9 z" />
                <ellipse style="stroke:black;stroke-width:2px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} cx="42.9" cy="200.4" rx="24.8" ry="24.4" />
                <ellipse style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.75;`} cx="42.9" cy="200.4" rx="24.8" ry="24.4" />
            </g>
        )
    }

    const Body = () => {
        return (
            <g>
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:2px;stroke-opacity:1;" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
                <path style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:2px;stroke-opacity:.75;`} d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
                <g clip-path={`url(#body-clip-${ props.id })`}>
                    <Suspense>
                        <Pattern id={props.id} style={props.style} orientation={props.orientation} />
                    </Suspense>
                </g>
            </g>
        )
    }

    const Moji = () => {
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
            <Moji />
        </g>
    )
}

export default memo(Alien);
