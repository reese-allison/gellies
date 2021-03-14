gsap.ticker.fps(30);

function randomRange(min, max) { return Math.random() * (max - min) + min; }
function randomNegative() { return Math.random() < 0.5 ? -1 : 1; }

var ebb_tl = new TimelineMax({repeat:-1, repeatDelay:.5, yoyo:true})
ebb_tl.from('.moji', {
    scale: 1.025,
    duration: 3,
    ease: "linear",
    transformOrigin: "top"
}, randomRange(0, 3));
