gsap.ticker.fps(30);

function randomRange(min, max) { return Math.random() * (max - min) + min; }
function randomNegative() { return Math.random() < 0.5 ? -1 : 1; }

// gsap.set(eye_movement, {onRepeat: eye_movement, repeat: -1, repeatDelay: 2.5});
// function eye_movement(){
//     Array.from(document.getElementsByClassName('slime')).forEach((s)=>{
//         let eye_movement_delay = randomRange(0, 2);
//         let x = randomRange(4, 8) * randomNegative();
//         let y = randomRange(4, 8) * randomNegative();
//         Array.from(s.querySelectorAll('.left-eye-inner, .right-eye-inner')).forEach((e)=>{
//             gsap.to(e, {
//                 x:x,
//                 y:y,
//                 delay: eye_movement_delay,
//                 duration: .5
//             });
//         });
//     })
// }

var ebb_tl = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true})
ebb_tl.from('.moji', {
    scale: 1.025,
    duration: 3,
    ease: "linear",
    transformOrigin: "top"
}, randomRange(0, 3));
