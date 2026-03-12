import { h, Fragment } from 'preact';
import { Suspense, PureComponent, lazy } from 'preact/compat';
import { v4 as uuid } from 'uuid';
import gsap from "gsap";
import { randomNegative, randomRange, maybeLoadTemplate } from '../common';

import Shadow from '../svgs/shadow';
import Clip from '../svgs/clip';

import DefaultBody from '../svgs/default-body';
import DefaultEyes from '../svgs/default-eyes';
import DefaultGradient from '../svgs/default-gradient';


function eyeMovement(inner_eyes){
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

class Gelly extends PureComponent{
    constructor(props){
        super(props);
        // Generate ID if not provided (don't mutate props)
        const id = props.id === null ? uuid() : props.id;

        this.busy = false;
        this.animations = {
            ebb: null,
            eyes: null
        }
        this.refs = {
            blinking: null,
            eyes: null,
            moji: null,
            shadow: null,
            headwearBack: null,
            headwearFront: null
        }
        // Cache for loaded modules to avoid re-importing on every render
        this._loadedHeadwear = null;
        this._loadedEyes = null;
        this.state = {
            id: id,
            style: props.style,
            moving: false,
            orientation: props.orientation,
            animations: props.animations,
            click: props.animations === false ? false : props.click,
            gradient: props.gradient,
            body: props.body,
            eyes: props.eyes,
            pattern: props.pattern,
            mouth: props.mouth,
            headwear: props.headwear,
            willRenderBack: ()=>{false},
            willRenderFront: ()=>{false},
            willBlink: ()=>{false},
        };

        this.bounce = this.bounce.bind(this);
        this.jump = this.jump.bind(this);
        this.hop = this.hop.bind(this);
        this.onClick = this.onClick.bind(this);

        this.eyesMounted = this.eyesMounted.bind(this);
        this.mojiMounted = this.mojiMounted.bind(this);
        this.shadowMounted = this.shadowMounted.bind(this);
        this.blinkMounted = this.blinkMounted.bind(this);
        this.headwearBackMounted = this.headwearBackMounted.bind(this);
        this.headwearFrontMounted = this.headwearFrontMounted.bind(this);
    }

    bounce(){
        if(this.busy){
            return;
        }
        this.busy = true;
        this.state.animations && this.animations.ebb.pause();

        // Use timeline onComplete instead of individual onComplete callbacks
        let bounce_tl = gsap.timeline({
            onComplete: () => {
                bounce_tl.reverse();
            },
            onReverseComplete: () => {
                this.state.animations && this.animations.ebb.resume();
                this.busy = false;
                if (this.state.moving) {
                    this.hop();
                }
            }
        });

        bounce_tl.to(this.refs.moji, {
            duration: .3,
            transformOrigin: "bottom center",
            scaleX: 1.1,
            scaleY: 0.8,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.headwearBack, {
            duration: .3,
            y: 65,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.headwearFront, {
            duration: .3,
            y: 65,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.shadow, {
            duration: .3,
            transformOrigin: "center",
            scale: 1.1
        }, 0);
    }

    jump(){
        if(this.busy){
            return;
        }
        this.busy = true;
        this.state.animations && this.animations.ebb.pause();

        // Calculate headwear y values once to ensure consistency
        const headwearY = (Math.random() > .3) ? 65 : -20;

        let second_bounce_tl = gsap.timeline({
            paused: true,
            onComplete: () => { second_bounce_tl.reverse(); },
            onReverseComplete: () => {
                this.state.animations && this.animations.ebb.resume();
                this.busy = false;
                if (this.state.moving) {
                    this.hop();
                }
            }
        });

        let jump_tl = gsap.timeline({
            paused: true,
            onComplete: () => { jump_tl.reverse(); },
            onReverseComplete: () => { second_bounce_tl.resume(); }
        });

        let first_bounce_tl = gsap.timeline({
            onComplete: () => { first_bounce_tl.reverse(); },
            onReverseComplete: () => { jump_tl.resume(); }
        });

        second_bounce_tl.to(this.refs.moji, {
            duration: .3,
            transformOrigin: "bottom center",
            scaleX: 1.1,
            scaleY: 0.8,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.headwearBack, {
            duration: .3,
            y: headwearY,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.headwearFront, {
            duration: .3,
            y: headwearY,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.shadow, {
            duration: .3,
            transformOrigin: "center",
            scale: 1.1
        }, 0);

        first_bounce_tl.to(this.refs.moji, {
            duration: .3,
            transformOrigin: "bottom center",
            scaleX: 1.05,
            scaleY: 0.9,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.headwearBack, {
            duration: .3,
            y: 32,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.headwearFront, {
            duration: .3,
            y: 32,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.shadow, {
            duration: .3,
            transformOrigin: "center",
            scale: 1.05
        }, 0);

        jump_tl.to(this.refs.moji, {
            duration: .2,
            y: -100
        }, 0)
        .to(this.refs.shadow, {
            duration: .2,
            transformOrigin: "center",
            scale: .9,
            opacity: .65
        }, 0)
        .to(this.refs.headwearBack, {
            duration: .2,
            y: -100,
            transformOrigin: "center"
        }, 0)
        .to(this.refs.headwearFront, {
            duration: .2,
            y: -100,
            transformOrigin: "center"
        }, 0);
    }

    hop(){
        if(this.busy){
            return;
        }
        this.busy = true;
        this.state.animations && this.animations.ebb.pause();

        let second_bounce_tl = gsap.timeline({
            paused: true,
            onComplete: () => { second_bounce_tl.reverse(); },
            onReverseComplete: () => {
                this.state.animations && this.animations.ebb.resume();
                this.busy = false;
                if (this.state.moving) {
                    this.hop();
                }
            }
        });

        let hop_tl = gsap.timeline({
            onComplete: () => { hop_tl.reverse(); },
            onReverseComplete: () => { second_bounce_tl.resume(); }
        });

        second_bounce_tl.to(this.refs.moji, {
            duration: .2,
            transformOrigin: "bottom center",
            scaleX: 1.05,
            scaleY: 0.9,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.shadow, {
            duration: .2,
            transformOrigin: "center",
            scale: 1.05
        }, 0)
        .to(this.refs.headwearBack, {
            duration: .2,
            y: 32,
            ease: "power1.inOut"
        }, 0)
        .to(this.refs.headwearFront, {
            duration: .2,
            y: 32,
            ease: "power1.inOut"
        }, 0);

        hop_tl.to(this.refs.moji, {
            duration: .15,
            y: -50
        }, 0)
        .to(this.refs.shadow, {
            duration: .15,
            transformOrigin: "center",
            scale: .95,
            opacity: .80
        }, 0)
        .to(this.refs.headwearBack, {
            duration: .15,
            y: -50
        }, 0)
        .to(this.refs.headwearFront, {
            duration: .15,
            y: -50
        }, 0);
    }

    eyesMounted(el){
        if(el === null){
            clearInterval(this.blink_interval);
            this.refs.eyes = null;
            if(this.state.animations && this.animations.eyes != null){
                this.animations.eyes.kill();
            }
        }
        else{
            this.refs.eyes = el.base;
            if(this.state.animations){
                this.setupEyes();
                this.setupBlink();
            }
        }
    }

    blinkMounted(el){
        if (el === null){
            clearInterval(this.blink_interval);
            this.refs.blinking = null;
        }
        else{
            this.refs.blinking = el.base;
            this.setupBlink();
        }
    }

    setupEyes(){
        const q = gsap.utils.selector(this.refs.eyes);
        const innerEyes = q('.inner-eye');

        // Use gsap.delayedCall for repeating eye movement instead of gsap.set
        const scheduleEyeMovement = () => {
            if (!this.refs.eyes) return; // Stop if component unmounted
            eyeMovement(innerEyes);
            this.animations.eyes = gsap.delayedCall(4, scheduleEyeMovement);
        };

        // Start the first eye movement after initial delay
        this.animations.eyes = gsap.delayedCall(randomRange(0, 3), scheduleEyeMovement);
    }

    setupBlink(){
        if(this.state.willBlink() && this.refs.blinking != null && this.refs.eyes != null){
            this.refs.eyes.style.display = '';
            this.refs.blinking.style.display = 'none';
            clearInterval(this.blink_interval);

            let moji = this;
            this.blink_interval = setInterval(() => {
                moji.refs.eyes.style.display = 'none';
                moji.refs.blinking.style.display = '';
                setTimeout(function () {
                    moji.refs.eyes.style.display = '';
                    moji.refs.blinking.style.display = 'none';
                }, 150);
            }, randomRange(6, 10) * 1000);
        }
    }

    shadowMounted(el){
        if(el === null){
            if(this.state.animations && this.animations.ebb != null){
                this.animations.ebb.kill();
            }
        }
        else if(this.state.animations){
            this.refs.shadow = el;
            this.setupEbb();
        }
    }

    mojiMounted(el){
        if(el === null){
            if(this.state.animations && this.animations.ebb != null){
                this.animations.ebb.kill();
            }
        }
        else if(this.state.animations){
            this.refs.moji = el;
            this.setupEbb();
        }
    }

    setupEbb(){
        if(this.refs.moji != null && this.refs.shadow != null){
            let ebb = gsap.timeline({repeat:-1, repeatDelay:.5, yoyo:true});
            let range = randomRange(0, 2);
            ebb.add(
                gsap.to(this.refs.moji, {
                    scale: 1.03,
                    duration: 2,
                    ease: "linear",
                    transformOrigin: "top"
                }), range
            );
            ebb.add(
                gsap.to(this.refs.shadow, {
                    scale: 1.03,
                    duration: 2,
                    ease: "linear",
                    transformOrigin: "top"
                }), range
            );
            this.animations.ebb = ebb;
        }
    }

    headwearBackMounted(el){
        this.refs.headwearBack = el
    }

    headwearFrontMounted(el){
        this.refs.headwearFront = el
    }

    componentWillUnmount(){
        if(this.animations.eyes != null){
            this.animations.eyes.kill();
        }
        if(this.animations.ebb != null){
            this.animations.ebb.kill();
        }
        clearInterval(this.blink_interval);
    }

    componentWillReceiveProps(nextProps){
        const updateable_props = ['orientation', 'body', 'eyes', 'gradient', 'mouth', 'pattern', 'headwear', 'moving', 'style'];
        const filtered = Object.keys(nextProps)
          .filter(key => updateable_props.includes(key))
          .reduce((obj, key) => {
            obj[key] = nextProps[key];
            return obj;
          }, {});
        this.setState(filtered, () => {
            if (filtered.moving) {
                this.hop();
            }
        });
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
        const Gradient = maybeLoadTemplate('gradient', this.state.gradient);
        const Body = maybeLoadTemplate('body', this.state.body);
        const Mouth = maybeLoadTemplate('mouth', this.state.mouth);
        let Eyes = DefaultEyes;
        let Headwear = PureComponent;
        let Blinking = PureComponent;

        if(this.state.headwear != undefined){
            // Only import if headwear changed to avoid re-importing on every render
            if(this._loadedHeadwear !== this.state.headwear){
                this._loadedHeadwear = this.state.headwear;
                import(`../svgs/headwear/${this.state.headwear}`).then(module => {
                    this.setState({
                        willRenderBack: module.willRenderBack,
                        willRenderFront: module.willRenderFront
                    })
                })
            }
            Headwear = lazy(() => import(`../svgs/headwear/${this.state.headwear}`).then(module => ({ default: module.Headwear })));
        }

        if(this.state.eyes != undefined){
            // Only import if eyes changed to avoid re-importing on every render
            if(this._loadedEyes !== this.state.eyes){
                this._loadedEyes = this.state.eyes;
                import(`../svgs/eyes/${this.state.eyes}`).then(module => {
                    this.setState({
                        willBlink: module.willBlink,
                    })
                });
            }
            Eyes = lazy(() => import(`../svgs/eyes/${this.state.eyes}`).then(module => ({ default: module.Eyes })));
            Blinking = lazy(() => import(`../svgs/eyes/${this.state.eyes}`).then(module => ({ default: module.Blinking })));
        }


        let moji_style = '';
        let orientation_style = '';
        let orientation_headwear_style = '';
        let current_orientation = this.state.orientation || 'front';

        // Back-facing orientations need the headwear group flipped
        const headwearGroupStyle = current_orientation.includes('back')
            ? "transform:scale(-1, 1);transform-origin:39.75% 0%;"
            : "";

        if(current_orientation === 'left' || current_orientation === 'back-right'){
            moji_style = "transform:scale(.96, 1);transform-origin:center top;";
            orientation_style = "transform: translate(-40px, 0);";
            orientation_headwear_style = "transform: skew(1deg, -1deg) scale(-1, 1);transform-origin:39.75% 0%;";
        }
        else if(current_orientation === 'right' || current_orientation === 'back-left'){
            moji_style = "transform:scale(.96, 1);transform-origin:center top;";
            orientation_style = "transform: translate(50px, 0);";
            orientation_headwear_style = "transform: skew(1deg, -1deg);";
        }

        return (
            <div style={this.state.style}>
            <svg style={moji_style} width="100%" height="100%" fill="none" viewBox="-50 -50 600 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <Suspense fallback={<DefaultGradient />}>
                        <Gradient id={this.state.id} />
                    </Suspense>
                    <Clip id={this.state.id} />
                </defs>
                <g ref={this.shadowMounted}>
                    <Shadow id={this.state.id} />
                </g>
                <g style={headwearGroupStyle}>
                    <g ref={this.headwearBackMounted}>
                        {this.state.willRenderBack(current_orientation) ?
                        <Suspense><Headwear style={orientation_headwear_style} id={this.state.id} /></Suspense> :
                        <PureComponent />}
                    </g>
                </g>
                <g style={current_orientation.includes('back') ? "transform:scale(-1, 1);transform-origin:39.75% 0%;" : ""}>
                    {current_orientation.includes('back') ?
                    <g ref={this.mojiMounted} onClick={this.state.click ? this.onClick : null}>
                        <g style={orientation_style} clip-path={`url(#body-clip-${ this.state.id })`}>
                            <Suspense>
                                <Blinking style={{display: 'none'}} ref={this.blinkMounted} />
                            </Suspense>
                            <Suspense fallback={<DefaultEyes />}>
                                <Eyes id={this.state.id} ref={this.eyesMounted} />
                            </Suspense>
                            <Suspense>
                                <Mouth />
                            </Suspense>
                        </g>
                        <Suspense fallback={<DefaultBody />}>
                            <Body style={orientation_style} id={this.state.id} orientation={current_orientation} pattern={this.state.pattern} />
                        </Suspense>
                    </g> :
                    <g ref={this.mojiMounted} onClick={this.state.click ? this.onClick : null}>
                        <Suspense fallback={<DefaultBody />}>
                            <Body style={orientation_style} id={this.state.id} orientation={current_orientation} pattern={this.state.pattern} />
                        </Suspense>
                        <g style={orientation_style} clip-path={`url(#body-clip-${ this.state.id })`}>
                            <Suspense>
                                <Blinking style={{display: 'none'}} ref={this.blinkMounted} />
                            </Suspense>
                            <Suspense fallback={<DefaultEyes />}>
                                <Eyes id={this.state.id} ref={this.eyesMounted} />
                            </Suspense>
                            <Suspense>
                                <Mouth orientation={current_orientation} />
                            </Suspense>
                        </g>
                    </g>}
                </g>
                <g style={headwearGroupStyle}>
                    <g ref={this.headwearFrontMounted}>
                        {this.state.willRenderFront(current_orientation) ?
                        <Suspense><Headwear style={orientation_headwear_style} id={this.state.id} /></Suspense> :
                        <PureComponent />}
                    </g>
                </g>
            </svg>
            </div>
        );
    }
}

Gelly.defaultProps = {
    id: null,
    click: true,
    animations: true,
};

export default Gelly;
