import { html, Component } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { TimelineMax } from 'https://unpkg.com/gsap?module';
import { randomRange } from './common.js';
import { Draggable } from './drag.js';

const ebb_tl = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true});

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
        document.getElementById(`moji-${ this.props.id }`).addEventListener("click", ()=>{
            document.getElementById(`moji-${ this.props.id }-mouth-open`).classList.remove('hidden');
        });
        Draggable(`moji-${ this.props.id }-svg`)
    }

    render(){
        if(this.state.moji){
            return html`<div innerHTML=${this.state.moji}></div>`
        }
    }
}

export{ Moji }
