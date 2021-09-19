import { h, Fragment, Component } from 'preact';
import { v4 as uuid } from 'uuid';
import gsap from "gsap";
import { randomNegative, randomRange, createURI } from '../common'


// TODO ADD FPS OPTION FOR USERS
gsap.ticker.fps(30);


function eye_movement(inner_eyes){
    let eye_movement_delay = randomRange(0, 3);
    let x = randomRange(0, 5) * randomNegative();
    let y = randomRange(0, 5) * randomNegative();
    Array.from(inner_eyes).forEach((e)=>{
        gsap.to(e, {
            x:x,
            y:y,
            delay: eye_movement_delay,
            duration: 0.50
        });
    });
}


/** @jsx h */
/** @jsxFrag Fragment */

class Moji extends Component{
    constructor(props){
        super(props)

        let random = props.id === undefined ? true : false;
        this.state = {
            random: random,
            id: random ? uuid() : props.id,
            orientation: props.orientation,
            elements: {},
            busy: false,
            ebb: null
        };

        this.bounce = this.bounce.bind(this);
        this.jump = this.jump.bind(this);
    }

    bounce(){
        if(this.state.busy){
            return;
        }
        this.setState({ busy: true }, ()=>{
            this.state.ebb.pause();
            let bounce_tl = gsap.timeline({ onReverseComplete: ()=>{
                this.state.ebb.resume();
                this.setState({ busy: false });
            }});
    
            bounce_tl.to(this.state.elements.moji, {
                duration: .3,
                transformOrigin: "50% 100%",
                scaleX: 1.1,
                scaleY: 0.8,
                ease: "power1.inOut",
                onComplete: () => {
                    bounce_tl.reverse();
                }
            }, 0).to(this.state.elements.headwear, {
                duration: .3,
                y: 65,
                ease: "power1.inOut",
                onComplete: () => {
                    bounce_tl.reverse();
                }
            }, 0)
            .to(this.state.elements.shadow, {
                duration: .3,
                transformOrigin: "50% 50%",
                scale: 1.1,
                onComplete: () => {
                    bounce_tl.reverse();
                }
            }, 0);
        });
    }

    jump(){
        if(this.state.busy){
            return;
        }
        this.setState({ busy: true }, ()=>{
            this.state.ebb.pause();
            let second_bounce_tl = gsap.timeline({ paused: true, onReverseComplete: ()=>{
                this.state.ebb.resume();
                this.setState({ busy: false });
            }});

            let jump_tl = gsap.timeline({ paused: true, onReverseComplete: ()=>{
                second_bounce_tl.resume();
            }});

            let first_bounce_tl = gsap.timeline({ onReverseComplete: ()=>{
                jump_tl.resume();
            }});

            second_bounce_tl.to(this.state.elements.moji, {
                duration: .3,
                transformOrigin: "50% 100%",
                scaleX: 1.1,
                scaleY: 0.8,
                ease: "power1.inOut",
                onComplete: () => {
                    second_bounce_tl.reverse();
                }
            }, 0)
            .to(this.state.elements.headwear, {
                duration: .3,
                y: (Math.random() > .3) ? 65 : -20,
                ease: "power1.inOut",
                onComplete: () => {
                    second_bounce_tl.reverse();
                }
            }, 0)
            .to(this.state.elements.shadow, {
                duration: .3,
                transformOrigin: "50% 50%",
                scale: 1.1,
                onComplete: () => {
                    second_bounce_tl.reverse();
                }
            }, 0);

            first_bounce_tl.to(this.state.elements.moji, {
                duration: .3,
                transformOrigin: "50% 100%",
                scaleX: 1.05,
                scaleY: 0.9,
                ease: "power1.inOut",
                onComplete: () => {
                    first_bounce_tl.reverse();
                }
            }, 0)
            .to(this.state.elements.headwear, {
                duration: .3,
                y: 32,
                ease: "power1.inOut",
                onComplete: () => {
                    first_bounce_tl.reverse();
                }
            }, 0)
            .to(this.state.elements.shadow, {
                duration: .3,
                transformOrigin: "50% 50%",
                scale: 1.05,
                onComplete: () => {
                    first_bounce_tl.reverse();
                }
            }, 0);

            jump_tl.to(this.state.elements.moji, {
                duration: .2,
                y: -100,
                onComplete: () => {
                    jump_tl.reverse();
                }
            }, 0)
            .to(this.state.elements.shadow, {
                duration: .2,
                transformOrigin: "50% 50%",
                scale: .9,
                opacity: .65,
                onComplete: () => {
                    jump_tl.reverse();
                }
            }, 0)
            .to(this.state.elements.headwear, {
                duration: .2,
                y: -100,
                transformOrigin: "50% 50%",
                onComplete: () => {
                    jump_tl.reverse();
                }
            }, 0);
        });
    }

    componentDidMount(){
        window.addEventListener('onobjectload', (event)=>{
            if (this.state.id === event.detail.id){
                let id = event.detail.id
                let svg_document = event.detail.document
        
                let moji = svg_document.getElementById(`moji-${ id }`);
                let mouth = svg_document.getElementById(`moji-${ id }-mouth`);
                let shadow = svg_document.getElementById(`moji-${ id }-shadow`);
                let headwear = svg_document.getElementById(`moji-${ id }-headwear`);
                let inner_eyes = svg_document.querySelectorAll(`#moji-${ id } .inner-eye`);
        
                gsap.set(eye_movement, {onRepeat: eye_movement, onRepeatParams: [inner_eyes], repeat: -1, repeatDelay: 4});
        
                let ebb = gsap.timeline({repeat:-1, repeatDelay:.5, yoyo:true});
                let range = randomRange(0, 2);
                ebb.add(
                    gsap.to(moji, {
                        scale: 1.03,
                        duration: 2,
                        ease: "linear",
                        transformOrigin: "top"
                    }), range
                );
                ebb.add(
                    gsap.to(shadow, {
                        scale: 1.03,
                        duration: 2,
                        ease: "linear",
                        transformOrigin: "top"
                    }), range
                );
                ebb.add(
                    gsap.to(headwear, {
                        duration: 2,
                        y: 3,
                        ease: "linear"
                    }), range
                );
        
                this.setState({
                    elements: {
                        moji: moji,
                        mouth: mouth,
                        shadow: shadow,
                        headwear: headwear
                    },
                    ebb: ebb
                })
                moji.addEventListener('click', e => {
                    e.preventDefault();
                    if(Math.random() > .3){
                        this.bounce();
                    }
                    else{
                        this.jump();
                    }
                })
            }
        })
    }

    render(){
        let url = ``;
        if(this.state.random){
            url = createURI('/api/random-moji/', {
                orientation: this.state.orientation,
                moji_id: this.state.id
            })
        }
        else{
            url = `#TODO ADD ROUTE FOR SAVED MOJIS WHEN DONE`
        }
        return (
            <object typemustmatch={true} width="100%" height="100%" type="image/svg+xml" data={url} />
        )
    }
}

export default Moji;
