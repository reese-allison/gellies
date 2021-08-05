import { gsap } from 'https://unpkg.com/gsap?module';
import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { Moji } from './moji.js';

gsap.ticker.fps(30);

var main = document.getElementById('main');

var Mojihtml = function() {
    var m_string = html`
    <${Moji} />
    `
    var conocate = []
    for (let i = 0; i <= 40; i++){
        conocate.push(m_string)
    }
    return(conocate)
}
render(html`${Mojihtml()}`, main);