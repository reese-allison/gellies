import { h, Fragment } from 'preact';
import { Suspense, memo} from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Devil(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} fill={`url(#moji-${ props.id }-body-color)`} d="m 387.8,227.6 c 17.5,18.6 35.1,37.2 52.7,55.8 23.7,-24.0 36.8,-59.9 29.2,-93.5 -4.2,-18.8 -20.1,-32.7 -37.5,-39.4 -15.7,-6.6 -32.7,-9.6 -48.5,-16.1 -7.1,0.2 3.5,5.9 5.5,7.4 13.6,9.8 28.7,19.8 36.0,35.7 4.0,11.3 -2.7,23.2 -10.3,31.4 -7.4,8.1 -16.3,15.5 -27.1,18.7 z" />
                <path mask={`url(#body-mask-${ props.id })`} style="fill:#000;fill-opacity:.5;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 387.8,227.6 c 17.5,18.6 35.1,37.2 52.7,55.8 23.7,-24.0 36.8,-59.9 29.2,-93.5 -4.2,-18.8 -20.1,-32.7 -37.5,-39.4 -15.7,-6.6 -32.7,-9.6 -48.5,-16.1 -7.1,0.2 3.5,5.9 5.5,7.4 13.6,9.8 28.7,19.8 36.0,35.7 4.0,11.3 -2.7,23.2 -10.3,31.4 -7.4,8.1 -16.3,15.5 -27.1,18.7 z" />
    
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} fill={`url(#moji-${ props.id }-body-color)`} d="M 99.9,230.6 C 82.3,249.2 64.7,267.9 47.1,286.5 23.3,262.4 10.3,226.5 17.8,192.9 c 4.2,-18.8 20.1,-32.7 37.5,-39.4 15.7,-6.6 32.7,-9.6 48.5,-16.1 7.1,0.2 -3.5,5.9 -5.5,7.4 -13.6,9.8 -28.7,19.8 -36.0,35.7 -4.0,11.3 2.7,23.2 10.3,31.4 7.4,8.1 16.3,15.5 27.1,18.7 z" />
                <path mask={`url(#body-mask-${ props.id })`} style="fill:#000;fill-opacity:.5;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="M 99.9,230.6 C 82.3,249.2 64.7,267.9 47.1,286.5 23.3,262.4 10.3,226.5 17.8,192.9 c 4.2,-18.8 20.1,-32.7 37.5,-39.4 15.7,-6.6 32.7,-9.6 48.5,-16.1 7.1,0.2 -3.5,5.9 -5.5,7.4 -13.6,9.8 -28.7,19.8 -36.0,35.7 -4.0,11.3 2.7,23.2 10.3,31.4 7.4,8.1 16.3,15.5 27.1,18.7 z" />
   
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

export default memo(Devil);
