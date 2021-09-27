import { h, Fragment, Component } from 'preact';
import { Grid, Container, IconButton, Button, ButtonGroup, Box } from '@material-ui/core';
import { v4 as uuid } from 'uuid';

import theme from '../styles/theme';
import menuStyles from '../styles/menu';
import Moji from './moji';
import { RotateRight, RotateLeft } from '@material-ui/icons';


const ORIENTATIONS = ['left', 'front', 'right', 'back'];


/**  @jsx h */
/** @jsxFrag Fragment */

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orientation: 'front',
            height: window.innerHeight,
            width: window.innerWidth,
            components: {},
            parts: {},
            component: null
        }

        this.showComponents = this.showComponents.bind(this);
        this.setComponent = this.setComponent.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.rotateLeft = this.rotateLeft.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
    }

    componentDidMount(){
        this.showComponents('body');
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimensions);
    }

    showComponents(component){
        if(component in this.state.parts){
            this.setState({component: component});
        }
        else{
            import(`../svgs/${component}/index`).then(item => {
                let new_parts = { ...this.state.parts }
                new_parts[component] = {...item}
                this.setState({parts: new_parts, component: component});
            });
        }
    }

    setComponent(value){
        if(this.state.components[this.state.component] === value){
            let new_components = { ...this.state.components };
            delete new_components[this.state.component];
            this.setState({ components: new_components });
        }
        else{
            let new_components = { ...this.state.components };
            new_components[this.state.component] = value;
            this.setState({ components: new_components });
        }
    }

    updateDimensions(){
        this.setState({ width: window.innerWidth, height: window.innerHeight }); 
    }

    rotateLeft(){
        let idx = ORIENTATIONS.indexOf(this.state.orientation);
        this.setState({orientation: ORIENTATIONS.at(idx - 1)});
    }

    rotateRight(){
        let idx = ORIENTATIONS.indexOf(this.state.orientation);
        if(ORIENTATIONS.at(idx + 1) === undefined){
            this.setState({orientation: ORIENTATIONS.at(0)});
        }
        else{
            this.setState({orientation: ORIENTATIONS.at(idx + 1)});
        }
    }

    render(){
        const classes = menuStyles();
        let vertical = window.innerHeight > window.innerWidth;
        let parts = this.state.parts[this.state.component] || {};
        let selected_part = this.state.components[this.state.component];
        return(
            <Container>
                <Box m={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={vertical ? 12 : 6} style={{borderRadius: 20}}>
                            <div style={{ position: 'relative', backgroundColor: theme.palette.secondary.main, maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh'}}>
                                <Moji 
                                    eyes={this.state.components.eyes} 
                                    mouth={this.state.components.mouth} 
                                    gradient={this.state.components.gradient} 
                                    body={this.state.components.body} 
                                    headwear={this.state.components.headwear}
                                    pattern={this.state.components.pattern}
                                    orientation={this.state.orientation}
                                />
                                <IconButton onClick={this.rotateLeft} size="large" style={{'bottom': 0, 'position': 'absolute', 'left': 0}}>
                                    <RotateRight style={{height: '2em', width: '2em'}} />
                                </IconButton>
                                <IconButton onClick={this.rotateRight} size="large" style={{'bottom': 0, 'position': 'absolute', 'right': 0}}>
                                    <RotateLeft style={{height: '2em', width: '2em'}} />
                                </IconButton>
                            </div>
                        </Grid>
                        <Grid item xs={vertical ? 12 : 6} style={{borderRadius: 20}}>
                            <div style={{ maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh'}}>
                                <div style={vertical ? {height: 'auto', overflowX: 'scroll'} : {maxHeight: vertical ? '79vw' : '79vh', height: vertical ? '79vw' : '79vh', overflowY: 'scroll'}}>
                                    <div style={vertical ? {width: 'max-content', height: '20em'} : {}}>
                                        {Object.keys(parts).map((key, index) => {
                                            let identifier = uuid();
                                            let styles = {
                                                backgroundColor: theme.palette.secondary.main,
                                                margin: 5,
                                                borderRadius:10,
                                                float: 'left',
                                                height:'20em',
                                                width: '20em'
                                            };
                                            let props = { [this.state.component]: key, animations: false }
                                            return(
                                                <div 
                                                    style={selected_part == key ? {...styles, backgroundColor: theme.palette.success.light, border: `3px dashed ${theme.palette.tertiary.main}`} : styles}
                                                    onClick={() => this.setComponent(key)}>
                                                    <Moji key={identifier} {...props}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <ButtonGroup fullWidth={true} variant="contained" color="primary" aria-label="contained primary button group">
                                    <Button style={this.state.component=='body' ? {textDecoration: 'underline'} : {}} className={classes.menuButton} size='large' onClick={() => this.showComponents('body')}>Body</Button>
                                    <Button style={this.state.component=='eyes' ? {textDecoration: 'underline'} : {}} className={classes.menuButton} size='large' onClick={() => this.showComponents('eyes')}>Eyes</Button>
                                    <Button style={this.state.component=='mouth' ? {textDecoration: 'underline'} : {}} className={classes.menuButton} size='large' onClick={() => this.showComponents('mouth')}>Mouth</Button>
                                    <Button style={this.state.component=='pattern' ? {textDecoration: 'underline'} : {}} className={classes.menuButton} size='large' onClick={() => this.showComponents('pattern')}>Pattern</Button>
                                    <Button style={this.state.component=='headwear' ? {textDecoration: 'underline'} : {}} className={classes.menuButton} size='large' onClick={() => this.showComponents('headwear')}>Headwear</Button>
                                    <Button style={this.state.component=='gradient' ? {textDecoration: 'underline'} : {}} className={classes.menuButton} size='large' onClick={() => this.showComponents('gradient')}>Color</Button>
                                </ButtonGroup>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        )
    }
}

export default Menu;
