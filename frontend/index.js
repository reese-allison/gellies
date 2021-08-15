import { h, Component, render } from 'preact';

class Moji extends Component{
    render(){
        return <object type="image/svg+xml" data="http://localhost:8000/moji-test" />
    }
}

render(<Moji />, document.getElementById('main'))