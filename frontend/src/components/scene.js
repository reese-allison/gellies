import { h, Fragment, Component, createRef } from 'preact';
import { debounce } from '@material-ui/core';

import Moji from './moji';
import sceneStyles from '../styles/scene'


/** @jsx h */
/** @jsxFrag Fragment */

class Scene extends Component{
    constructor(props){
        super(props);
        this.ref = createRef();
        this.state = {
            rendered: false,
            width: props.width,
            anchors: props.anchors,
            background: props.background
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
        const classes = sceneStyles();
        return (
            <div className={classes.scene}>
                <div ref={this.ref} style={{ position: 'relative', width: this.state.width }}>
                    {this.state.anchors.map((x, i) => {
                        let moji_style = {}
                        Object.assign(moji_style, x.style);
                        moji_style.width = x.width * this.state.moji_width + 'px';
                        moji_style.height = x.width * this.state.moji_width + 'px';
                        return(
                            <div style={Object.assign({position: 'absolute'}, moji_style)}>
                                <Moji 
                                    eyes={x.eyes} 
                                    mouth={x.mouth} 
                                    gradient={x.gradient} 
                                    body={x.body} 
                                    orientation={x.orientation}
                                    headwear={x.headwear}
                                    pattern={x.pattern}
                                    id={x.id}
                                />
                            </div>
                        );
                    })}
                    <img style={{ width: '100%' }} src={`/static/backgrounds/${this.state.background}.gif`} />
                </div>
            </div>
        )
    }
}

export default Scene;
