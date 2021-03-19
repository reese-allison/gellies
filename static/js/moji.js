import { html, Component } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { gsap, TimelineMax } from 'https://unpkg.com/gsap?module';
import { Draggable } from 'https://unpkg.com/gsap/Draggable?module';
import { randomRange } from './common.js';

const ebb_tl = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true});
gsap.registerPlugin(Draggable);

class Moji extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch(`/moji/${this.props.id}`, {method: 'GET'})
        .then(function(response){
            return response.text();
        })
        .then(function(html){
            this.setState({moji: html});
        }.bind(this));
    }

    componentDidUpdate(){
        ebb_tl.from(`#moji-${ this.props.id }`, {
            scale: 1.025,
            duration: 3,
            ease: "linear",
            transformOrigin: "top"
        }, randomRange(0, 3));
        Draggable.create(`#moji-${ this.props.id }-svg`, {trigger: `#moji-${ this.props.id }`});
    }

    render(){
        if(this.state.moji){
            return html`<div innerHTML=${this.state.moji}></div>`
        }
    }
}

export{ Moji }
