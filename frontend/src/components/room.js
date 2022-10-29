import { h, Fragment, Component, createRef } from 'preact';
import { Box, Container, Grid } from '@material-ui/core';
import { randomNegative, randomRange } from '../common';

import baseStyles from '../styles/base';
import roomStyles from '../styles/room';
import Gelly from './moji';


/** @jsx h */
/** @jsxFrag Fragment */

class Room extends Component{
    constructor(props){
        super(props);
        this.state = {
            moji: {
                moving: false,
                orientation: "front",
                style: {
                    bottom: randomRange(0, 100),
                    left: randomRange(0, 100) * randomNegative(),
                    width: "16em",
                    transition: null
                }
            },
            walkableBox: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        };
        this.refs = {
            moji: createRef(),
            floor: createRef(),
            backWall: createRef(),
            leftWall: createRef(),
            rightWall: createRef(),
            room: createRef()
        };
    }

    handleResize() {
        this.setState({
            walkableBox: {
                top: this.refs.floor.current.getBoundingClientRect().top,
                bottom: this.refs.room.current.getBoundingClientRect().bottom,
                left: this.refs.leftWall.current.getBoundingClientRect().right,
                right: this.refs.rightWall.current.getBoundingClientRect().left
            }
        })

    }

    componentWillUnmount() {
        clearInterval(this.movement_interval)
    }

    componentDidMount() {
        let room = this;
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        clearInterval(this.movement_interval)

        let movement_timeout = () => {
            setTimeout(() => {
                let moji_rect = room.refs.moji.current.base.getBoundingClientRect();
                let moji_width = moji_rect.right - moji_rect.left;
                let moji_height = moji_rect.bottom - moji_rect.top;
                let bottom_limit = room.state.walkableBox.bottom - room.state.walkableBox.top - (moji_height / 2);
                let left_limit = room.state.walkableBox.right - room.state.walkableBox.left - moji_width;
                let bottom = randomRange(0, bottom_limit);
                let left = randomRange(0, left_limit) * randomNegative();
                let horizontal_orientation = left > room.state.moji.style.left;
                let vertical_orientation = bottom > room.state.moji.style.bottom;

                let orientation = 'front';
                if (horizontal_orientation && vertical_orientation) {
                    orientation = 'back-right';
                }
                else if (horizontal_orientation && !vertical_orientation) {
                    orientation = 'right';
                }
                else if (!horizontal_orientation && vertical_orientation) {
                    orientation = 'back-left';
                }
                else if (!horizontal_orientation && !vertical_orientation) {
                    orientation = 'left';
                }
                else {
                    orientation = 'back';
                }

                let left_motion = Math.abs(room.state.moji.style.left - left);
                let bottom_motion = Math.abs(room.state.moji.style.bottom - bottom);
                let difference = Math.ceil(((bottom_motion + left_motion) / 100));
                room.setState({
                    moji: {
                        moving: true,
                        orientation: orientation,
                        style: {
                            bottom: bottom,
                            left: left,
                            width: room.state.moji.style.width,
                            transition: "all " + difference + "s linear"
                        }
                    }
                }, () => {
                    setTimeout(() => {
                        room.setState({
                            moji: {
                                moving: false,
                                orientation: 'front',
                                style: {
                                    bottom: bottom,
                                    left: left,
                                    width: room.state.moji.style.width,
                                }
                            }
                        })
                    }, difference * 1000)
                })
            }, randomRange(0, 5) * 1000);
        }
        movement_timeout()
        this.movement_interval = setInterval(movement_timeout,  10000);
    }

    render() {
        const base_classes = baseStyles();
        const classes = roomStyles();
        let vertical = window.innerHeight > window.innerWidth;
        return (
            <Container>
                <Box m={4} style={{ position: "relative" }}>
                    <Grid container spacing={3} style={{ position: "absolute" }}>
                        <Grid item xs={12}>
                            <Box boxShadow={1} className={ base_classes.box } style={{ position: 'relative' }}>
                                <div ref={ this.refs.room } className={ classes.roomWrapper } style={{ maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh' }}>
                                    <div className={ classes.room }>
                                        <div ref={ this.refs.backWall } style={{ backgroundColor: "lightgreen", backgroundImage: "url(/static/patterns/my-little-plaid-dark.png)" }} className={ classes.backWall + ' ' + classes.wall }></div>
                                        <div ref={ this.refs.leftWall } style={{ backgroundColor: "lightgreen", backgroundImage: "url(/static/patterns/my-little-plaid-dark.png)" }} className={ classes.leftWall + ' ' + classes.wall }></div>
                                        <div ref={ this.refs.rightWall } style={{ backgroundColor: "lightgreen", backgroundImage: "url(/static/patterns/my-little-plaid-dark.png)" }} className={ classes.rightWall + ' ' + classes.wall }></div>
                                        <div ref={ this.refs.floor } style={{ backgroundColor: "#997e38", backgroundImage: "url(/static/patterns/tileable-wood-colored.png)" }} className={ classes.floor }></div>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                        <Gelly
                            eyes={"cat"}
                            ref={this.refs.moji}
                            orientation={this.state.moji.orientation}
                            moving={this.state.moji.moving}
                            style={Object.assign(this.state.moji.style, {
                                right: 0,
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto"
                            })}
                        />
                    </Grid>
                </Box>
            </Container>
        )
    }
}

export default Room;
