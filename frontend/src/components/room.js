import { h, Fragment, Component, createRef } from 'preact';
import { Box, Container, Grid } from '@material-ui/core';

import baseStyles from '../styles/base';
import roomStyles from '../styles/room';


/** @jsx h */
/** @jsxFrag Fragment */

class Room extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const base_classes = baseStyles();
        const classes = roomStyles();
        return (
            <Container>
                <Box m={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box boxShadow={1} className={ base_classes.box } style={{ position: 'relative' }}>
                                <div class={classes.roomWrapper}>
                                    <div class={ classes.room }>
                                        <div class={ classes.backWall + ' ' + classes.wall }></div>
                                        <div class={ classes.leftWall + ' ' + classes.wall }></div>
                                        <div class={ classes.rightWall + ' ' + classes.wall }></div>
                                        <div class={ classes.floor }></div>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        )
    }
}

export default Room;
