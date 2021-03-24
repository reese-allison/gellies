import { html, Component } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { gsap, TimelineMax } from 'https://unpkg.com/gsap?module';
import { randomRange, randomNegative } from './common.js';

const ebb_tl = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true});


function eye_movement(inner_eyes){
    let eye_movement_delay = randomRange(0, 1);
    let x = randomRange(0, 4) * randomNegative();
    let y = randomRange(0, 4) * randomNegative();
    Array.from(inner_eyes).forEach((e)=>{
        gsap.to(e, {
            x:x,
            y:y,
            delay: eye_movement_delay,
            duration: 0.50
        });
    });
}


class Moji extends Component {
    constructor(props){
        super(props);

        this.chewing = false;
        this.chew = this.chew.bind(this);
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
        this.eye_movement.kill();
    }

    componentDidUpdate(){
        this.moji = document.getElementById(`moji-${ this.props.id }`);
        this.eyes = document.getElementById(`moji-${ this.props.id }-eyes`);
        this.mouth = document.getElementById(`moji-${ this.props.id }-mouth`);
        this.cheeks = document.getElementById(`moji-${ this.props.id }-cheeks`);
        this.ebb = gsap.from(this.moji, {
            scale: 1.03,
            duration: 2,
            ease: "linear",
            transformOrigin: "top"
        });
        ebb_tl.add(this.ebb, randomRange(0, 2));

        let inner_eyes = document.querySelectorAll(`#moji-${ this.props.id } .inner-eye`);
        this.eye_movement = gsap.set(eye_movement, {onRepeat: eye_movement, onRepeatParams: [inner_eyes], repeat: -1, repeatDelay: 2});

        // Test chewing on click
        this.moji.addEventListener("click", e => {
            if(!this.chewing){
                this.chew();
            }
        });
    }

    chew(){
        this.chewing = true;
        let chew_tl = new TimelineMax({repeat: 4, yoyo:true, onComplete: () => {
            gsap.to(this.mouth, {y: 0, duration: 1})
            gsap.fromTo(this.mouth, {scale: 0.85, transformOrigin: "center"}, {scale: 1, duration:1, transformOrigin: "center"}, 0)
            gsap.to(this.cheeks, {y: 0, duration: 1, onComplete: () => {
                this.eyes.style.clipPath = null
                this.chewing = false;
            }})
        }});
        this.eyes.style.clipPath = `url(#moji-${ this.props.id }-cheeks)`;
        chew_tl.to(this.mouth, {y: -5}, 0)
        chew_tl.to(this.mouth, {scale: 0.85, transformOrigin: "center"}, 0)
        chew_tl.to(this.cheeks, {y: -30}, 0);
    }

    render(){
        if(this.state.moji){
            return html`<div style="display: inline;" innerHTML=${this.state.moji}></div>`
        }
    }
}

export{ Moji }
