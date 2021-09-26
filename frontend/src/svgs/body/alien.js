import { h, Fragment } from 'preact';
import { Suspense } from 'preact/compat';
import { maybeLoadTemplate } from '../../common';


/** @jsx h */
/** @jsxFrag Fragment */

export default (props) => {
    const Pattern = maybeLoadTemplate('pattern', props.pattern);

    const RightEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path fill={`url(#moji-${ props.id }-body-color)`} d="m 418.9,255.2 -11.4,-4.1 c -32.0,-70.6 6.1,-88.8 33.5,-55.5 l -1.0,8.6 c -37.4,-42.4 -51.4,5.2 -21.1,50.9 z" />
                <path style="fill:#000;fill-opacity:.25;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 418.9,255.2 -11.4,-4.1 c -32.0,-70.6 6.1,-88.8 33.5,-55.5 l -1.0,8.6 c -37.4,-42.4 -51.4,5.2 -21.1,50.9 z" />
                <ellipse style="stroke:black;stroke-width:.25px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} cx="442.6" cy="193.7" rx="24.8" ry="24.4" />
                <ellipse style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} cx="442.6" cy="193.7" rx="24.8" ry="24.4" />
            </g>
        )
    }

    const LeftEar = (attrs) => {
        return (
            <g style={attrs.style}>
                <path fill={`url(#moji-${ props.id }-body-color)`} d="m 67.6,258.4 11.4,-4.1 C 111.2,183.7 72.9,165.4 45.5,198.8 l 1.0,8.6 c 37.4,-42.4 51.4,5.2 21.1,50.9 z" />
                <path style="fill:#000;fill-opacity:.25;stroke:black;stroke-width:.25px;stroke-opacity:1;" d="m 67.6,258.4 11.4,-4.1 C 111.2,183.7 72.9,165.4 45.5,198.8 l 1.0,8.6 c 37.4,-42.4 51.4,5.2 21.1,50.9 z" />
                <ellipse style="stroke:black;stroke-width:.25px;stroke-opacity:1;" fill={`url(#moji-${ props.id }-body-color)`} cx="42.9" cy="200.4" rx="24.8" ry="24.4" />
                <ellipse style={`stroke:url(#moji-${ props.id }-body-color);stroke-width:3px;stroke-opacity:.65;`} cx="42.9" cy="200.4" rx="24.8" ry="24.4" />
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
