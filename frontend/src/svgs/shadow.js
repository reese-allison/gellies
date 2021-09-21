import { h, Fragment } from 'preact';


/** @jsx h */
/** @jsxFrag Fragment */

export default (props) => {
    return (
        <g>
            <filter id={`shadow-blur-${ props.id }`} x="-100%" y="-100%" height="300%" width="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
            <ellipse id={`moji-${ props.id }-shadow`} cx="245" cy="455" rx="230" ry="45" fill="rgba(0,0,0,.5)" filter={`url(#shadow-blur-${ props.id })`} />
        </g>
    )
}
