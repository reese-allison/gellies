import { h, Fragment, Component, createRef } from 'preact';
import { Grid, Container, Box, debounce } from '@material-ui/core';

import theme from '../styles/theme';
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
            anchors: props.anchors,
            background: props.background
        };

        this.handleResize = debounce(this.handleResize.bind(this), 250);
    }

    handleResize(){
        this.setState({}, ()=>{
            this.setState({
                moji_width: this.ref.current.offsetWidth
            })
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
        let vertical = window.innerHeight > window.innerWidth;
        return (
            <Container>
                <Box m={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={vertical ? 12 : 6}>
                            <div className={classes.scene}>
                                <div ref={this.ref} style="aspect-ratio: 1 / 1;width: 100%;position: relative;">
                                    <video style={{ width: '100%', borderRadius: 30, backgroundColor: theme.palette.secondary.main }} playsinline autoplay muted loop>
                                        <source type="video/mp4" src={`/static/backgrounds/${this.state.background}.mp4`} />
                                    </video>
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
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={vertical ? 12 : 6} style={{borderRadius: 30}}>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        )
    }
}

export default Scene;
