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

        this.state = {
            id: this.props.id ? this.props.id : 0,
            setup: false,
            states: ['chewing', 'bouncing', 'jumping'],
            active: []
        };

        this.active = this.active.bind(this);
        this.inactive = this.inactive.bind(this);

        this.bounce = this.bounce.bind(this);
        this.jump = this.jump.bind(this);
        this.busy = this.busy.bind(this);

        this.ebb = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true});
    }

    componentDidMount(){
        fetch(`/moji/${this.state.id ? this.state.id : 0}`, {method: 'GET'})
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            this.setState({
                id: json.id,
                moji: json.html
            });
        }
        .bind(this));
    }

    componentWillUnmount(){
        this.eye_movement.kill();
    }

    componentDidUpdate(){
        if (!this.state.setup){
            this.moji = document.getElementById(`moji-${ this.state.id }`);
            this.eyes = document.getElementById(`moji-${ this.state.id }-eyes`);
            this.mouth = document.getElementById(`moji-${ this.state.id }-mouth`);
            this.cheeks = document.getElementById(`moji-${ this.state.id }-cheeks`);
            this.shadow = document.getElementById(`moji-${ this.state.id }-shadow`);
            this.ebb.add(gsap.from(this.moji, {
                scale: 1.03,
                duration: 2,
                ease: "linear",
                transformOrigin: "top"
            }), randomRange(0, 2));
    
            let inner_eyes = document.querySelectorAll(`#moji-${ this.state.id } .inner-eye`);
            this.eye_movement = gsap.set(eye_movement, {onRepeat: eye_movement, onRepeatParams: [inner_eyes], repeat: -1, repeatDelay: 2});
            this.setState({setup: true});

            ['click','ontouchstart'].forEach( evt => {
                this.moji.addEventListener(evt, e => {
                    // if(Math.random() > .25){
                    //     if(!this.busy()){
                    //         this.bounce();
                    //     }
                    // }
                    // else{
                    //     if(!this.busy()){
                    //         this.jump();
                    //     }
                    // }
                    let gradient_name = prompt('Gradient Name');
                    fetch('/save/', {
                        method: 'post',
                        body: JSON.stringify({
                            'name': gradient_name.toLowerCase(),
                            'html' : document.getElementById(`moji-${ this.state.id }-body-color`).outerHTML
                        })
                    })
                });
            });
        }
    }

    active(state, callback){
        if (!this.state.active.includes(state)){
            this.setState({active: [...this.state.active, state]}, ()=>{
                this.ebb.pause();
                if (callback){
                    callback();
                }
            });
        }
    }

    inactive(state, callback){
        if (this.state.active.includes(state)){
            this.setState({active: this.state.active.filter(item => item !== state)}, ()=>{
                if(this.state.active.length === 0){
                    this.ebb.resume();
                    if (callback){
                        callback();
                    }
                }
            });
        }
    }

    bounce(){
        this.active('bouncing', ()=>{
            let bounce_tl = new TimelineMax({ onReverseComplete: ()=>{
                this.inactive('bouncing');
            }});
    
            bounce_tl.to(this.moji, .3, {
                transformOrigin: "50% 100%",
                scaleX: 1.1,
                scaleY: 0.8,
                ease: "power1.inOut",
                onComplete: () => {
                    bounce_tl.reverse();
                }
            })
        });
    }

    jump(){
        this.active('jumping', ()=>{
            let second_bounce_tl = new TimelineMax({ paused: true, onReverseComplete: ()=>{
                this.inactive('jumping');
            }});

            let jump_tl = new TimelineMax({ paused: true, onReverseComplete: ()=>{
                second_bounce_tl.resume();
            }});

            let first_bounce_tl = new TimelineMax({ onReverseComplete: ()=>{
                jump_tl.resume();
            }});

            second_bounce_tl.to(this.moji, .3, {
                transformOrigin: "50% 100%",
                scaleX: 1.1,
                scaleY: 0.8,
                ease: "power1.inOut",
                onComplete: () => {
                    second_bounce_tl.reverse();
                }
            })

            first_bounce_tl.to(this.moji, .3, {
                transformOrigin: "50% 100%",
                scaleX: 1.05,
                scaleY: 0.9,
                ease: "power1.inOut",
                onComplete: () => {
                    first_bounce_tl.reverse();
                }
            });

            jump_tl.to(this.moji, .2, {
                y: -200,
                onComplete: () => {
                    jump_tl.reverse();
                }
            }, 0)
            .to(this.shadow, .2, {
                y: 200,
                transformOrigin: "50% 50%",
                scaleX: 1.075,
                scaleY: 1.075,
                opacity: .5,
                onComplete: () => {
                    jump_tl.reverse();
                }
            }, 0);
        });
    }

    busy(){
        return this.state.active.length != 0;
    }

    render(){
        if(this.state.moji){
            return html`<div style="display:inline;" innerHTML=${this.state.moji}></div>`
        }
    }
}

export { Moji }
