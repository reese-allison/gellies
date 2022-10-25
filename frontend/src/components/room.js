import { h, Fragment, Component } from 'preact';
import { Box, Container, Grid } from '@material-ui/core';

import baseStyles from '../styles/base';
import roomStyles from '../styles/room';
import Gelly from './moji';


/** @jsx h */
/** @jsxFrag Fragment */

class Room extends Component{
    constructor(props){
        super(props);
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
                                <div className={ classes.roomWrapper } style={{ maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh' }}>
                                    <div className={ classes.room }>
                                        <div style={{ backgroundColor: "lightgreen", backgroundImage: "url(/static/patterns/my-little-plaid-dark.png)" }} className={ classes.backWall + ' ' + classes.wall }></div>
                                        <div style={{ backgroundColor: "lightgreen", backgroundImage: "url(/static/patterns/my-little-plaid-dark.png)" }} className={ classes.leftWall + ' ' + classes.wall }></div>
                                        <div style={{ backgroundColor: "lightgreen", backgroundImage: "url(/static/patterns/my-little-plaid-dark.png)" }} className={ classes.rightWall + ' ' + classes.wall }></div>
                                        <div style={{ backgroundColor: "#997e38", backgroundImage: "url(/static/patterns/tileable-wood-colored.png)" }} className={ classes.floor }></div>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                    <Gelly style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "20vw",
                        top: "40vh"
                    }} />
                </Box>
            </Container>
        )
    }
}

export default Room;
