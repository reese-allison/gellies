function randomRange(min, max) { 
    return Math.random() * (max - min) + min;
}


function randomNegative() {
    return Math.random() < 0.5 ? -1 : 1; 
}


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


class Moji {
    constructor(id){
        this.id = id
        this.busy = false;

        this.moji = document.getElementById(`moji-${ this.id }`);
        this.mouth = document.getElementById(`moji-${ this.id }-mouth`);
        this.shadow = document.getElementById(`moji-${ this.id }-shadow`);
        this.hat = document.getElementById(`moji-${ this.id }-hat`);

        let inner_eyes = document.querySelectorAll(`#moji-${ this.id } .inner-eye`);
        this.eye_movement = gsap.set(eye_movement, {onRepeat: eye_movement, onRepeatParams: [inner_eyes], repeat: -1, repeatDelay: 4});

        this.ebb = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true});
        let _range = randomRange(0, 2);
        this.ebb.add(
            gsap.to(this.moji, {
                scale: 1.03,
                duration: 2,
                ease: "linear",
                transformOrigin: "top"
            }), _range
        );
        this.ebb.add(
            gsap.to(this.hat, {
                duration: 2,
                y: 3,
                ease: "linear",
            }), _range
        );

        this.moji.addEventListener('click', e => {
            e.preventDefault();
            if(Math.random() > .3){
                this.bounce();
            }
            else{
                this.jump();
            }
        })
    }

    bounce(){
        if (this.busy){
            return;
        }
        this.active();
        let bounce_tl = new TimelineMax({ onReverseComplete: ()=>{
            this.inactive();
        }});

        bounce_tl.to(this.moji, .3, {
            transformOrigin: "50% 100%",
            scaleX: 1.1,
            scaleY: 0.8,
            ease: "power1.inOut",
            onComplete: () => {
                bounce_tl.reverse();
            }
        }, 0).to(this.hat, .3, {
            y: 65,
            ease: "power1.inOut",
            onComplete: () => {
                bounce_tl.reverse();
            }
        }, 0)
        .to(this.shadow, .3, {
            transformOrigin: "50% 50%",
            scale: 1.04,
            onComplete: () => {
                bounce_tl.reverse();
            }
        }, 0);
    }

    jump(){
        if (this.busy){
            return;
        }
        this.active();
        let second_bounce_tl = new TimelineMax({ paused: true, onReverseComplete: ()=>{
            this.inactive();
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
        }, 0)
        .to(this.hat, .3, {
            y: (Math.random() > .3) ? 65 : -20,
            ease: "power1.inOut",
            onComplete: () => {
                second_bounce_tl.reverse();
            }
        }, 0)
        .to(this.shadow, .3, {
            transformOrigin: "50% 50%",
            scale: 1.04,
            onComplete: () => {
                second_bounce_tl.reverse();
            }
        }, 0);

        first_bounce_tl.to(this.moji, .3, {
            transformOrigin: "50% 100%",
            scaleX: 1.05,
            scaleY: 0.9,
            ease: "power1.inOut",
            onComplete: () => {
                first_bounce_tl.reverse();
            }
        }, 0)
        .to(this.hat, .3, {
            y: 32,
            ease: "power1.inOut",
            onComplete: () => {
                first_bounce_tl.reverse();
            }
        }, 0)
        .to(this.shadow, .3, {
            transformOrigin: "50% 50%",
            scale: 1.02,
            onComplete: () => {
                first_bounce_tl.reverse();
            }
        }, 0);

        jump_tl.to(this.moji, .2, {
            y: -100,
            onComplete: () => {
                jump_tl.reverse();
            }
        }, 0)
        .to(this.shadow, .2, {
            transformOrigin: "50% 50%",
            scale: .9,
            opacity: .65,
            onComplete: () => {
                jump_tl.reverse();
            }
        }, 0)
        .to(this.hat, .2, {
            y: -100,
            transformOrigin: "50% 50%",
            onComplete: () => {
                jump_tl.reverse();
            }
        }, 0);
    }

    active(){
        this.busy = true;
        this.ebb.pause();
    }

    inactive(){
        this.busy = false;
        this.ebb.resume();
    }
}
