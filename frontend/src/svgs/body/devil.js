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

export default memo(Devil);
