function randomRange(min, max) { return Math.random() * (max - min) + min; }
function randomNegative() { return Math.random() < 0.5 ? -1 : 1; }

export { randomNegative, randomRange }
