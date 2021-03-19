import { html, Component } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { gsap, TimelineMax } from 'https://unpkg.com/gsap?module';
// import { Draggable } from 'https://unpkg.com/gsap/Draggable?module';
// gsap.registerPlugin(Draggable);

import { randomRange, randomNegative } from './common.js';

const ebb_tl = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true});


function eye_movement(inner_eyes){
    let eye_movement_delay = randomRange(0, 2);
    let x = randomRange(0, 4) * randomNegative();
    let y = randomRange(0, 4) * randomNegative();
    Array.from(inner_eyes).forEach((e)=>{
        gsap.to(e, {
            x:x,
            y:y,
            delay: eye_movement_delay,
            duration: .5
        });
    });
}


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

    componentWillUnmount(){
        ebb_tl.remove(this.ebb);
        this.eyes.kill();
    }

    componentDidUpdate(){
        this.ebb = gsap.from(`#moji-${ this.props.id }`, {
            scale: 1.03,
            duration: 2,
            ease: "linear",
            transformOrigin: "top"
        });
        ebb_tl.add(this.ebb, randomRange(0, 2));

        let inner_eyes = document.querySelectorAll(`#moji-${ this.props.id } .inner-eye`);
        this.eyes = gsap.set(eye_movement, {onRepeat: eye_movement, onRepeatParams: [inner_eyes], repeat: -1, repeatDelay: 2.5});
    }

    render(){
        if(this.state.moji){
            return html`<div style="display: inline;" innerHTML=${this.state.moji}></div>`
        }
    }
}

export{ Moji }
