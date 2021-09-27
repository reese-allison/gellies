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
                <path fill={`url(#moji-${ props.id }-body-color)`} style="stroke:black;stroke-width:.35px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
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

export default memo(Cat);
