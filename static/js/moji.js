import { html, Component } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { gsap, TimelineMax } from 'https://unpkg.com/gsap?module';
import { randomRange, randomNegative } from './common.js';


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

        this.active = false;
        this.chew = this.chew.bind(this);
        this.bounce = this.bounce.bind(this);
        this.ebb = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true});
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
        this.eye_movement.kill();
    }

    componentDidUpdate(){
        this.moji = document.getElementById(`moji-${ this.props.id }`);
        this.eyes = document.getElementById(`moji-${ this.props.id }-eyes`);
        this.mouth = document.getElementById(`moji-${ this.props.id }-mouth`);
        this.cheeks = document.getElementById(`moji-${ this.props.id }-cheeks`);
        this.ebb.add(gsap.from(this.moji, {
            scale: 1.03,
            duration: 2,
            ease: "linear",
            transformOrigin: "top"
        }), randomRange(0, 2));

        let inner_eyes = document.querySelectorAll(`#moji-${ this.props.id } .inner-eye`);
        this.eye_movement = gsap.set(eye_movement, {onRepeat: eye_movement, onRepeatParams: [inner_eyes], repeat: -1, repeatDelay: 2});

        // // Test chewing on click
        // this.moji.addEventListener("click", e => {
        //     if(!this.active){
        //         this.chew().play();
        //     }
        // });

        // // Test bounce on click
        // this.moji.addEventListener("click", e => {
        //     if(!this.active){
        //         this.bounce().play();
        //     }
        // });

        // Test jump on click
        this.moji.addEventListener("click", e => {
            if(!this.active){
                this.jump().play();
            }
        });
    }

    chew(){
        this.active = true;
        let chew_tl = new TimelineMax({paused: true, repeat: 4, yoyo:true, onComplete: () => {
            gsap.to(this.mouth, {y: 0, duration: 1})
            gsap.fromTo(this.mouth, {scale: 0.85, transformOrigin: "center"}, {scale: 1, duration:1, transformOrigin: "center"}, 0)
            gsap.to(this.cheeks, {y: 0, duration: 1, onComplete: () => {
                this.eyes.style.clipPath = null
                this.active = false;
            }})
        }});
        this.eyes.style.clipPath = `url(#moji-${ this.props.id }-cheeks)`;
        chew_tl.to(this.mouth, {y: -5}, 0)
        chew_tl.to(this.mouth, {scale: 0.85, transformOrigin: "center"}, 0)
        chew_tl.to(this.cheeks, {y: -30}, 0);

        return chew_tl;
    }

    open_mouth(){

    }

    bounce(){
        this.active = true;
        this.ebb.pause();
        let bounce_tl = new TimelineMax({paused: true, onReverseComplete: ()=>{
            this.active = false;
            this.ebb.resume();
        }});

        bounce_tl.to(this.moji, .4, {
            transformOrigin: "50% 100%",
            scaleX: 1.1,
            scaleY: 0.8,
            ease: "power1.inOut",
            onComplete: () => {
                bounce_tl.reverse();
            }
        })

        return bounce_tl;
    }

    // TODO don't let child animation calls resume ebbing prematurely if part of an animation group
    jump(){
        this.active = true;
        this.ebb.pause();
        let jump_tl = new TimelineMax({paused: true, onComplete: ()=>{
            this.active = false;
            this.ebb.resume();
        }});

        jump_tl.add(this.bounce().play());

        return jump_tl;
    }

    render(){
        if(this.state.moji){
            return html`<div style="display: inline;" innerHTML=${this.state.moji}></div>`
        }
    }
}

export { Moji }
