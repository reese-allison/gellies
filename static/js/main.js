import { gsap } from 'https://unpkg.com/gsap?module';
import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { Moji } from './moji.js';

gsap.ticker.fps(30);

var main = document.getElementById('main');

render(Array(50).fill(0).map(_ => html`<${Moji}/>`), main);
