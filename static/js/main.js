import { gsap } from 'https://unpkg.com/gsap?module';
import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { Moji } from './moji.js';

gsap.ticker.fps(30);

var main = document.getElementById('main');

render(html`
    <${Moji} id="100" />
    <${Moji} id="101" />
    <${Moji} id="200" />
    <${Moji} id="300" />
    <${Moji} id="302" />
`, main);
