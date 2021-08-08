import { gsap } from 'https://unpkg.com/gsap?module';
import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'
import { Moji } from './moji.js';

gsap.ticker.fps(30);

class Gradient_Moji extends Moji{
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        if (!this.state.setup){
            this.moji = document.getElementById(`moji-${ this.state.id }`);
            this.eyes = document.getElementById(`moji-${ this.state.id }-eyes`);
            this.mouth = document.getElementById(`moji-${ this.state.id }-mouth`);
            this.cheeks = document.getElementById(`moji-${ this.state.id }-cheeks`);
            this.shadow = document.getElementById(`moji-${ this.state.id }-shadow`);
            this.setState({setup: true});

            ['click','ontouchstart'].forEach( evt => {
                this.moji.addEventListener(evt, e => {
                    let gradient_name = prompt('Gradient Name');
                    fetch('/save/', {
                       method: 'post',
                        body: JSON.stringify({
                           'name': gradient_name.toLowerCase(),
                            'html' : document.getElementById(`moji-${ this.state.id }-body-color`).outerHTML
                        })
                    })
                });
            });
        }
    }
}



var main = document.getElementById('main');

render(Array(50).fill(0).map(_ => html`<${Gradient_Moji}/>`), main);
