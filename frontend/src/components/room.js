import { h, Fragment, Component, createRef } from 'preact';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { randomNegative, randomRange } from '../common';

import theme from '../styles/theme';
import Gelly from './moji';

/** @jsx h */
/** @jsxFrag Fragment */

// Styles converted from makeStyles to objects for MUI v5
const styles = {
    box: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 30,
        overflow: "hidden"
    },
    roomWrapper: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        perspective: "15em",
        perspectiveOrigin: "50% calc(50% - 8em)",
        overflow: "hidden"
    },
    room: {
        transformStyle: "preserve-3d"
    },
    wall: {
        position: "absolute",
        backgroundColor: "white",
        backgroundSize: "5em 5em",
        backgroundRepeat: "repeat",
        width: "20em",
        height: "20em",
        top: "-16em",
        left: "-10em",
        transform: "translateZ(-10em)"
    },
    leftWall: {
        left: "-20em",
        transform: "rotateY(-90deg)",
        borderLeft: "2px solid black"
    },
    rightWall: {
        transform: "rotateY(90deg)",
        left: 0,
        borderRight: "2px solid black"
    },
    floor: {
        backgroundColor: "white",
        backgroundSize: "3em 3em",
        backgroundRepeat: "repeat",
        width: "20em",
        height: "20em",
        top: "1em",
        position: "absolute",
        transform: "translate(-50%, -50%) rotateX(90deg) translateZ(-3.05em)"
    }
};

class Room extends Component {
    constructor(props) {
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

        // Bind methods and store reference for proper cleanup
        this.handleResize = this.handleResize.bind(this);

        // Track mounted state to prevent memory leaks
        this._isMounted = false;
        this.movement_interval = null;
        this.resize_timeout = null;
    }

    handleResize() {
        if (!this._isMounted) return;

        if (this.refs.floor.current && this.refs.room.current &&
            this.refs.leftWall.current && this.refs.rightWall.current) {
            const floorRect = this.refs.floor.current.getBoundingClientRect();
            const roomRect = this.refs.room.current.getBoundingClientRect();
            const leftWallRect = this.refs.leftWall.current.getBoundingClientRect();
            const rightWallRect = this.refs.rightWall.current.getBoundingClientRect();

            // Validate that getBoundingClientRect returned valid values
            if (roomRect.bottom > 0 && rightWallRect.left > 0) {
                this.setState({
                    walkableBox: {
                        top: floorRect.top,
                        bottom: roomRect.bottom,
                        left: leftWallRect.right,
                        right: rightWallRect.left
                    }
                });
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        if (this.movement_interval) {
            clearInterval(this.movement_interval);
            this.movement_interval = null;
        }
        if (this.resize_timeout) {
            clearTimeout(this.resize_timeout);
            this.resize_timeout = null;
        }
        window.removeEventListener('resize', this.handleResize);
    }

    componentDidMount() {
        this._isMounted = true;
        const room = this;
        window.addEventListener('resize', this.handleResize);

        // Delay initial resize to ensure DOM is ready
        this.resize_timeout = setTimeout(() => {
            if (this._isMounted) this.handleResize();
        }, 100);

        // Clear any existing interval (safety check for strict mode)
        if (this.movement_interval) {
            clearInterval(this.movement_interval);
        }

        let movement_timeout = () => {
            setTimeout(() => {
                if (!room.refs.moji.current?.base) return;

                // Ensure walkableBox is fully initialized (all 4 boundaries must be valid)
                const { walkableBox } = room.state;
                const isWalkableBoxValid = walkableBox.top !== 0 || walkableBox.bottom !== 0 ||
                                           walkableBox.left !== 0 || walkableBox.right !== 0;
                if (!isWalkableBoxValid || (walkableBox.bottom === 0 && walkableBox.right === 0)) {
                    room.handleResize();
                    return; // Skip this cycle, try again next interval
                }

                let moji_rect = room.refs.moji.current.base.getBoundingClientRect();
                let moji_width = moji_rect.right - moji_rect.left;
                let moji_height = moji_rect.bottom - moji_rect.top;
                let bottom_limit = walkableBox.bottom - walkableBox.top - (moji_height / 2);
                let left_limit = walkableBox.right - walkableBox.left - moji_width;

                // Skip if bounds are invalid
                if (bottom_limit <= 0 || left_limit <= 0) return;

                // Generate new position, ensuring minimum movement distance
                let currentBottom = room.state.moji.style.bottom;
                let currentLeft = room.state.moji.style.left;
                let bottom, left;
                let attempts = 0;
                const MIN_MOVEMENT = 30; // Minimum pixels to move

                do {
                    bottom = randomRange(0, bottom_limit);
                    left = randomRange(0, left_limit) * randomNegative();
                    attempts++;
                } while (
                    attempts < 5 &&
                    Math.abs(bottom - currentBottom) + Math.abs(left - currentLeft) < MIN_MOVEMENT
                );
                let horizontal_orientation = left > room.state.moji.style.left;
                let vertical_orientation = bottom > room.state.moji.style.bottom;

                let orientation = 'front';
                if (horizontal_orientation && vertical_orientation) {
                    orientation = 'back-right';
                } else if (horizontal_orientation && !vertical_orientation) {
                    orientation = 'right';
                } else if (!horizontal_orientation && vertical_orientation) {
                    orientation = 'back-left';
                } else if (!horizontal_orientation && !vertical_orientation) {
                    orientation = 'left';
                } else {
                    orientation = 'back';
                }

                let left_motion = Math.abs(currentLeft - left);
                let bottom_motion = Math.abs(currentBottom - bottom);
                let difference = Math.max(1, Math.ceil((bottom_motion + left_motion) / 100));
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
                        });
                    }, difference * 1000);
                });
            }, randomRange(0, 5) * 1000);
        };
        movement_timeout();
        this.movement_interval = setInterval(movement_timeout, 10000);
    }

    render() {
        const { gellyConfig } = this.props;
        let vertical = window.innerHeight > window.innerWidth;
        return (
            <Container style={{ marginTop: '100px' }}>
                <Box m={4} style={{ position: "relative" }}>
                    <Grid container spacing={3} style={{ position: "absolute" }}>
                        <Grid item xs={12}>
                            <Box boxShadow={1} style={{ ...styles.box, position: 'relative' }}>
                                <div ref={this.refs.room} style={{ ...styles.roomWrapper, maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh' }}>
                                    <div style={styles.room}>
                                        <div ref={this.refs.backWall} style={{ ...styles.wall, backgroundColor: "lightgreen", backgroundImage: "url(static/patterns/my-little-plaid-dark.png)" }}></div>
                                        <div ref={this.refs.leftWall} style={{ ...styles.wall, ...styles.leftWall, backgroundColor: "lightgreen", backgroundImage: "url(static/patterns/my-little-plaid-dark.png)" }}></div>
                                        <div ref={this.refs.rightWall} style={{ ...styles.wall, ...styles.rightWall, backgroundColor: "lightgreen", backgroundImage: "url(static/patterns/my-little-plaid-dark.png)" }}></div>
                                        <div ref={this.refs.floor} style={{ ...styles.floor, backgroundColor: "#997e38", backgroundImage: "url(static/patterns/tileable-wood-colored.png)" }}></div>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                        <Gelly
                            ref={this.refs.moji}
                            eyes={gellyConfig?.eyes}
                            mouth={gellyConfig?.mouth}
                            gradient={gellyConfig?.gradient}
                            body={gellyConfig?.body}
                            headwear={gellyConfig?.headwear}
                            pattern={gellyConfig?.pattern}
                            orientation={this.state.moji.orientation}
                            moving={this.state.moji.moving}
                            style={Object.assign({}, this.state.moji.style, {
                                right: 0,
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto"
                            })}
                        />
                    </Grid>
                </Box>
            </Container>
        );
    }
}

export default Room;
