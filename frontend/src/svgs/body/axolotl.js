import { h, Fragment } from 'preact';
import { Suspense, memo } from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

function Axolotl(props){
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:.25px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} d="m482.2 195-72.9 59.8-54.5-23.4 4.2-97.2 27.8 45.6 36.6-30.1 9.4 48.4z" />
                <path mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} stroke-linejoin="round" d="m482.2 195-72.9 59.8-54.5-23.4 4.2-97.2 27.8 45.6 36.6-30.1 9.4 48.4z" />         
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path mask={`url(#body-mask-${ props.id })`} style="stroke:black;stroke-width:.25px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} d="m3.9 198 72.9 59.8 54.5-23.4-4.2-97.2-27.8 45.6-36.6-30.1-9.4 48.4z" />
                <path mask={`url(#body-mask-${ props.id })`} style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} stroke-linejoin="round" d="m3.9 198 72.9 59.8 54.5-23.4-4.2-97.2-27.8 45.6-36.6-30.1-9.4 48.4z" />
            </g>
        )
    }

    const Body = () => {
        return (
            <g>
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                <path style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} stroke-linejoin="round" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
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

export default memo(Axolotl);
