import { h, Fragment, Component, createRef } from 'preact';
import { lazy, Suspense } from 'preact/compat';
import { v4 as uuid } from 'uuid';
import gsap from "gsap";
import { randomNegative, randomRange } from '../common'

import Shadow from '../svgs/shadow'
import Clip from '../svgs/clip'


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
        super(props);

        let random = props.id === undefined ? true : false;
        this.busy = false;
        this.animations = {
            ebb: null,
            eyes: null
        }
        this.refs = {
            moji: createRef(),
            shadow: createRef(),
            headwear: null
        }
        this.state = {
            random: random,
            id: random ? uuid() : props.id,
            components: {
                orientation: props.orientation,
                gradient: props.gradient,
                body: props.body,
                eyes: props.eyes,
                pattern: props.pattern,
                mouth: props.mouth,
                headwear: props.headwear,
            }
        };

        this.bounce = this.bounce.bind(this);
        this.jump = this.jump.bind(this);
        this.onClick = this.onClick.bind(this);

        this.eyesMounted = this.eyesMounted.bind(this);
        this.headwearMounted = this.headwearMounted.bind(this);
    }

    bounce(){
        if(this.busy){
            return;
        }
        this.busy = true;
        this.animations.ebb.pause();
        let bounce_tl = gsap.timeline({ onReverseComplete: ()=>{
            this.animations.ebb.resume();
            this.busy = false;
        }});

        bounce_tl.to(this.refs.moji.current, {
            duration: .3,
            transformOrigin: "50% 100%",
            scaleX: 1.1,
            scaleY: 0.8,
            ease: "power1.inOut",
            onComplete: () => {
                bounce_tl.reverse();
            }
        }, 0).to(this.refs.headwear.base, {
            duration: .3,
            y: 65,
            ease: "power1.inOut",
            onComplete: () => {
                bounce_tl.reverse();
            }
        }, 0)
        .to(this.refs.shadow.current, {
            duration: .3,
            transformOrigin: "50% 50%",
            scale: 1.1,
            onComplete: () => {
                bounce_tl.reverse();
            }
        }, 0);
    }

    jump(){
        if(this.busy){
            return;
        }
        this.busy = true;
        this.animations.ebb.pause();
        let second_bounce_tl = gsap.timeline({ paused: true, onReverseComplete: ()=>{
            this.animations.ebb.resume();
            this.busy = false;
        }});

        let jump_tl = gsap.timeline({ paused: true, onReverseComplete: ()=>{
            second_bounce_tl.resume();
        }});

        let first_bounce_tl = gsap.timeline({ onReverseComplete: ()=>{
            jump_tl.resume();
        }});

        second_bounce_tl.to(this.refs.moji.current, {
            duration: .3,
            transformOrigin: "50% 100%",
            scaleX: 1.1,
            scaleY: 0.8,
            ease: "power1.inOut",
            onComplete: () => {
                second_bounce_tl.reverse();
            }
        }, 0)
        .to(this.refs.headwear.base, {
            duration: .3,
            y: (Math.random() > .3) ? 65 : -20,
            ease: "power1.inOut",
            onComplete: () => {
                second_bounce_tl.reverse();
            }
        }, 0)
        .to(this.refs.shadow.current, {
            duration: .3,
            transformOrigin: "50% 50%",
            scale: 1.1,
            onComplete: () => {
                second_bounce_tl.reverse();
            }
        }, 0);

        first_bounce_tl.to(this.refs.moji.current, {
            duration: .3,
            transformOrigin: "50% 100%",
            scaleX: 1.05,
            scaleY: 0.9,
            ease: "power1.inOut",
            onComplete: () => {
                first_bounce_tl.reverse();
            }
        }, 0)
        .to(this.refs.headwear.base, {
            duration: .3,
            y: 32,
            ease: "power1.inOut",
            onComplete: () => {
                first_bounce_tl.reverse();
            }
        }, 0)
        .to(this.refs.shadow.current, {
            duration: .3,
            transformOrigin: "50% 50%",
            scale: 1.05,
            onComplete: () => {
                first_bounce_tl.reverse();
            }
        }, 0);

        jump_tl.to(this.refs.moji.current, {
            duration: .2,
            y: -100,
            onComplete: () => {
                jump_tl.reverse();
            }
        }, 0)
        .to(this.refs.shadow.current, {
            duration: .2,
            transformOrigin: "50% 50%",
            scale: .9,
            opacity: .65,
            onComplete: () => {
                jump_tl.reverse();
            }
        }, 0)
        .to(this.refs.headwear.base, {
            duration: .2,
            y: -100,
            transformOrigin: "50% 50%",
            onComplete: () => {
                jump_tl.reverse();
            }
        }, 0);
    }

    eyesMounted(el){
        if(el === null){
            if(this.animations.eyes != null){
                this.animations.eyes.kill();
            }
        }
        else{
            const q = gsap.utils.selector(el.base);
            let eye_animations = gsap.set(eye_movement, {
                onRepeat: eye_movement, 
                onRepeatParams: [q('.inner-eye')], 
                repeat: -1, 
                repeatDelay: 4
            });
            this.animations.eyes = eye_animations;
        }
    }

    setupEbb(){
        if(this.refs.moji != null && this.refs.shadow != null && this.animations.ebb === null){
            let ebb = gsap.timeline({repeat:-1, repeatDelay:.5, yoyo:true});
            let range = randomRange(0, 2);
            ebb.add(
                gsap.to(this.refs.moji.current, {
                    scale: 1.03,
                    duration: 2,
                    ease: "linear",
                    transformOrigin: "top"
                }), range
            );
            ebb.add(
                gsap.to(this.refs.shadow.current, {
                    scale: 1.03,
                    duration: 2,
                    ease: "linear",
                    transformOrigin: "top"
                }), range
            );
            this.animations.ebb = ebb;
        }
    }

    headwearMounted(el){
        this.refs.headwear = el
    }

    componentDidMount(){
        this.setupEbb();
    }

    componentWillUnmount(){
        if(this.animations.eyes != null){
            this.animations.eyes.kill();
        }
        if(this.animations.ebb != null){
            this.animations.ebb.kill();
        }
    }

    onClick(e){
        e.preventDefault();
        if(Math.random() > .3){
            this.bounce();
        }
        else{
            this.jump();
        }
    }

    render(){
        const Body = this.state.components.body ? lazy(() => import(`../svgs/body/${this.state.components.body}`)) : Component;
        const Eyes = this.state.components.eyes ? lazy(() => import(`../svgs/eyes/${this.state.components.eyes}`)) : Component;
        const Gradient = this.state.components.gradient ? lazy(() => import(`../svgs/gradient/${this.state.components.gradient}`)) : Component;
        const Mouth = this.state.components.mouth ? lazy(() => import(`../svgs/mouth/${this.state.components.mouth}`)) : Component;
        const Headwear = this.state.components.headwear ? lazy(() => import(`../svgs/headwear/${this.state.components.headwear}`)) : Component;

        return (
            <svg width="100%" height="100%" fill="none" viewBox="-50 -50 600 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <Suspense>
                        <Gradient id={this.state.id} />
                    </Suspense>
                    <Clip id={this.state.id} />
                </defs>
                <g ref={this.refs.shadow}>
                    <Shadow id={this.state.id} />
                </g>
                <g ref={this.refs.moji} onClick={this.onClick}>
                    <Suspense>
                        <Body id={this.state.id} />
                    </Suspense>
                    <g clip-path={`url(#body-clip-${ this.state.id })`}>
                        <Suspense>
                            <Eyes id={this.state.id} ref={this.eyesMounted} />
                        </Suspense>
                        <Suspense>
                            <Mouth />
                        </Suspense>
                    </g>
                </g>
                <Suspense ref={this.headwearMounted}>
                    <Headwear id={this.state.id} />
                </Suspense>
            </svg>
        );
    }
}

export default Moji;
