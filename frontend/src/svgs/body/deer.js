import { h, Fragment } from 'preact';
import { Suspense, memo } from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Deer(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} fill={`url(#moji-${ props.id }-body-color)`} d="m 389.3,255.1 c -9.4,-5.9 -5.2,-18.9 0.9,-25.6 7.0,-8.0 17.7,-23.6 4.2,-31.0 -9.5,-4.0 -18.6,-10.0 -23.4,-19.6 -6.6,-11.9 -9.4,-29.5 1.2,-39.9 12.6,-12.8 23.0,6.4 16.7,18.1 -5.9,11.3 4.1,31.9 17.8,23.0 7.1,-11.0 -2.5,-25.3 3.9,-36.3 15.8,-7.8 17.7,15.4 16.1,25.7 -4.7,14.6 11.6,30.5 22.9,16.0 6.9,-15.6 -7.7,-30.2 -6.4,-46.0 1.1,-10.2 18.2,-13.0 21.9,-2.8 11.3,18.7 9.6,43.4 -0.0,62.4 -13.4,17.6 -40.7,5.0 -55.1,21.3 -6.1,11.1 -11.6,23.0 -19.7,33.1 z" />
                <path mask={`url(#body-mask-${ props.id })`} style="fill:#000;fill-opacity:.5;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 389.3,255.1 c -9.4,-5.9 -5.2,-18.9 0.9,-25.6 7.0,-8.0 17.7,-23.6 4.2,-31.0 -9.5,-4.0 -18.6,-10.0 -23.4,-19.6 -6.6,-11.9 -9.4,-29.5 1.2,-39.9 12.6,-12.8 23.0,6.4 16.7,18.1 -5.9,11.3 4.1,31.9 17.8,23.0 7.1,-11.0 -2.5,-25.3 3.9,-36.3 15.8,-7.8 17.7,15.4 16.1,25.7 -4.7,14.6 11.6,30.5 22.9,16.0 6.9,-15.6 -7.7,-30.2 -6.4,-46.0 1.1,-10.2 18.2,-13.0 21.9,-2.8 11.3,18.7 9.6,43.4 -0.0,62.4 -13.4,17.6 -40.7,5.0 -55.1,21.3 -6.1,11.1 -11.6,23.0 -19.7,33.1 z" />               
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} fill={`url(#moji-${ props.id }-body-color)`} d="m 88.9,252.8 c 9.4,-5.9 5.2,-18.9 -0.9,-25.6 -7.0,-8.0 -17.7,-23.6 -4.2,-31.0 9.5,-4.0 18.6,-10.0 23.4,-19.6 6.6,-11.9 9.4,-29.5 -1.2,-39.9 -12.6,-12.8 -23.0,6.4 -16.7,18.1 5.9,11.3 -4.1,31.9 -17.8,23.0 -7.1,-11.0 2.5,-25.3 -3.9,-36.3 -15.8,-7.8 -17.7,15.4 -16.1,25.7 4.7,14.6 -11.6,30.5 -22.9,16.0 -6.9,-15.6 7.7,-30.2 6.4,-46.0 -1.1,-10.2 -18.2,-13.0 -21.9,-2.8 -11.3,18.7 -9.6,43.4 0.0,62.4 13.4,17.6 40.7,5.0 55.1,21.3 6.1,11.1 11.6,23.0 19.7,33.1 z" />
                <path mask={`url(#body-mask-${ props.id })`} style="fill:#000;fill-opacity:.5;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 88.9,252.8 c 9.4,-5.9 5.2,-18.9 -0.9,-25.6 -7.0,-8.0 -17.7,-23.6 -4.2,-31.0 9.5,-4.0 18.6,-10.0 23.4,-19.6 6.6,-11.9 9.4,-29.5 -1.2,-39.9 -12.6,-12.8 -23.0,6.4 -16.7,18.1 5.9,11.3 -4.1,31.9 -17.8,23.0 -7.1,-11.0 2.5,-25.3 -3.9,-36.3 -15.8,-7.8 -17.7,15.4 -16.1,25.7 4.7,14.6 -11.6,30.5 -22.9,16.0 -6.9,-15.6 7.7,-30.2 6.4,-46.0 -1.1,-10.2 -18.2,-13.0 -21.9,-2.8 -11.3,18.7 -9.6,43.4 0.0,62.4 13.4,17.6 40.7,5.0 55.1,21.3 6.1,11.1 11.6,23.0 19.7,33.1 z" />
            </g>
        )
    }

    const Body = () => {
        return (
            <g>
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
                <path style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} d="m 461.5,342.6 c 0.5,94.0 -62.2,138.6 -224.6,139.0 -159.7,0.3 -212.9,-44.6 -212.9,-137.6 0,-91.9 95.8,-161.6 216.1,-161.6 132.5,0 220.9,68.3 221.4,160.2 z" />
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

export default memo(Deer);
