gsap.ticker.fps(30);

import { Moji } from './moji.js';

const h = preact.h;
const render = preact.render;
const html = htm.bind(h);

var main = document.getElementById('main');

render(html`
    <${Moji} id="100" />
    <${Moji} id="101" />
    <${Moji} id="200" />
    <${Moji} id="300" />
`, main);
