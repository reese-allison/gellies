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
                <path mask={`url(#body-mask-${ props.id })`} style="fill:#000;fill-opacity:.5;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 389.3,255.1 c -9.4,-5.9 -5.2,-18.9 0.9,-25.6 7.0,-8.0 17.7,-23.6 4.2,-31.0 -9.5,-4.0 -18.6,-10.0 -23.4,-19.6 -6.6,-11.9 -9.4,-29.5 1.2,-39.9 12.6,-12.8 23.0,6.4 16.7,18.1 -5.9,11.3 4.1,31.9 17.8,23.0 7.1,-11.0 -2.5,-25.3 3.9,-36.3 15.8,-7.8 17.7,15.4 16.1,25.7 -4.7,14.6 11.6,30.5 22.9,16.0 6.9,-15.6 -7.7,-30.2 -6.4,-46.0 1.1,-10.2 18.2,-13.0 21.9,-2.8 11.3,18.7 9.6,43.4 -0.0,62.4 -13.4,17.6 -40.7,5.0 -55.1,21.3 -6.1,11.1 -11.6,23.0 -19.7,33.1 z" />
                <path mask={`url(#body-mask-${ props.id })`} fill={`url(#moji-${ props.id }-body-color)`} d="m 389.3,255.1 c -9.4,-5.9 -5.2,-18.9 0.9,-25.6 7.0,-8.0 17.7,-23.6 4.2,-31.0 -9.5,-4.0 -18.6,-10.0 -23.4,-19.6 -6.6,-11.9 -9.4,-29.5 1.2,-39.9 12.6,-12.8 23.0,6.4 16.7,18.1 -5.9,11.3 4.1,31.9 17.8,23.0 7.1,-11.0 -2.5,-25.3 3.9,-36.3 15.8,-7.8 17.7,15.4 16.1,25.7 -4.7,14.6 11.6,30.5 22.9,16.0 6.9,-15.6 -7.7,-30.2 -6.4,-46.0 1.1,-10.2 18.2,-13.0 21.9,-2.8 11.3,18.7 9.6,43.4 -0.0,62.4 -13.4,17.6 -40.7,5.0 -55.1,21.3 -6.1,11.1 -11.6,23.0 -19.7,33.1 z" />
               
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} style="fill:#000;fill-opacity:.5;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 88.9,252.8 c 9.4,-5.9 5.2,-18.9 -0.9,-25.6 -7.0,-8.0 -17.7,-23.6 -4.2,-31.0 9.5,-4.0 18.6,-10.0 23.4,-19.6 6.6,-11.9 9.4,-29.5 -1.2,-39.9 -12.6,-12.8 -23.0,6.4 -16.7,18.1 5.9,11.3 -4.1,31.9 -17.8,23.0 -7.1,-11.0 2.5,-25.3 -3.9,-36.3 -15.8,-7.8 -17.7,15.4 -16.1,25.7 4.7,14.6 -11.6,30.5 -22.9,16.0 -6.9,-15.6 7.7,-30.2 6.4,-46.0 -1.1,-10.2 -18.2,-13.0 -21.9,-2.8 -11.3,18.7 -9.6,43.4 0.0,62.4 13.4,17.6 40.7,5.0 55.1,21.3 6.1,11.1 11.6,23.0 19.7,33.1 z" />
                <path mask={`url(#body-mask-${ props.id })`} fill={`url(#moji-${ props.id }-body-color)`} d="m 88.9,252.8 c 9.4,-5.9 5.2,-18.9 -0.9,-25.6 -7.0,-8.0 -17.7,-23.6 -4.2,-31.0 9.5,-4.0 18.6,-10.0 23.4,-19.6 6.6,-11.9 9.4,-29.5 -1.2,-39.9 -12.6,-12.8 -23.0,6.4 -16.7,18.1 5.9,11.3 -4.1,31.9 -17.8,23.0 -7.1,-11.0 2.5,-25.3 -3.9,-36.3 -15.8,-7.8 -17.7,15.4 -16.1,25.7 4.7,14.6 -11.6,30.5 -22.9,16.0 -6.9,-15.6 7.7,-30.2 6.4,-46.0 -1.1,-10.2 -18.2,-13.0 -21.9,-2.8 -11.3,18.7 -9.6,43.4 0.0,62.4 13.4,17.6 40.7,5.0 55.1,21.3 6.1,11.1 11.6,23.0 19.7,33.1 z" />
            </g>
        )
    }

    const Body = () => {
        return (
            <g>
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                <path style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                <g clip-path={`url(#body-clip-${ props.id })`}>
                    <Suspense>
                        <Pattern style={props.style} />
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
                    <Body orientation={props.orientation} />
                    <LeftEar style="transform:scale(1.05);transform-origin:center left;" />
                </g>
            )
        }
        else if (props.orientation === 'left'){
            return (
                <g>
                    <LeftEar style="transform:scale(.95);transform-origin:center;" />
                    <Body orientation={props.orientation} />
                    <RightEar style="transform:scale(1.05);transform-origin:center right;" />
                </g>
            )
        }
        else if (props.orientation === 'back'){
            return (
                <g>
                    <Body orientation={props.orientation} />
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
                    <Body orientation={props.orientation} />
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
