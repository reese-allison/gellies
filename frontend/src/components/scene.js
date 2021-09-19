import { h, Fragment, Component, createRef } from 'preact';
import { debounce } from '@material-ui/core';

import Moji from './moji';


/** @jsx h */
/** @jsxFrag Fragment */

class Scene extends Component{
    constructor(props){
        super(props);
        this.ref = createRef();
        this.state = {
            rendered: false,
            width: props.width,
            background: props.background,
            anchors: props.anchors
        };

        this.handleResize = debounce(this.handleResize.bind(this), 250);
    }

    handleResize(){
        this.setState({
            moji_width: this.ref.current.offsetWidth
        });
    }

    componentDidMount(){
        this.setState({rendered: true}, ()=>{
            this.setState({
                moji_width: this.ref.current.offsetWidth
            });
            window.addEventListener('resize', this.handleResize);
        })
    }

    render(){
        return (
            <div>
                <div ref={this.ref} style={{ position: 'relative', width: this.state.width }}>
                    {this.state.anchors.map((x, i) => {
                        let moji_style = {}
                        Object.assign(moji_style, x.style);
                        moji_style.width = x.width * this.state.moji_width + 'px';
                        moji_style.height = x.width * this.state.moji_width + 'px';
                        return(
                            <div style={Object.assign({position: 'absolute'}, moji_style)}>
                                <Moji orientation={x.orientation} id={x.id}/>
                            </div>
                        );
                    })}
                    <img style={{ width: '100%' }} src={ this.state.background } />
                </div>
            </div>
        )
    }
}

export default Scene;
