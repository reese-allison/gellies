import { h, Fragment, Component } from 'preact';
import { Grid, Container, Button, ButtonGroup, Box } from '@material-ui/core';

import theme from '../styles/theme';
import menuStyles from '../styles/menu';
import Moji from './moji';


/**  @jsx h */
/** @jsxFrag Fragment */

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,
            components: {
                gradient: 'lemon',
                eyes: 'dot',
            },
            parts: {},
            component: null
        }

        this.showComponents = this.showComponents.bind(this);
        this.setComponent = this.setComponent.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
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

    render(){
        const classes = menuStyles();
        let vertical = window.innerHeight > window.innerWidth;
        let parts = this.state.parts[this.state.component] || {};
        let selected_part = this.state.components[this.state.component];
        return(
            <Container>
                <Box m={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={vertical ? 12 : 6} style={{borderRadius: 20, backgroundColor: theme.palette.secondary.main}}>
                            <div style={{ maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh'}}>
                                <Moji 
                                    eyes={this.state.components.eyes} 
                                    mouth={this.state.components.mouth} 
                                    gradient={this.state.components.gradient} 
                                    body={this.state.components.body} 
                                    headwear={this.state.components.headwear}
                                    pattern={this.state.components.pattern}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={vertical ? 12 : 6} style={{borderRadius: 20}}>
                            <div style={{ maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh'}}>
                                <div style={vertical ? {height: 'auto', overflowX: 'scroll'} : {maxHeight: vertical ? '79vw' : '79vh', height: vertical ? '79vw' : '79vh', overflowY: 'scroll'}}>
                                    <div style={vertical ? {width: 'max-content', height: '20em'} : {}}>
                                        {Object.keys(parts).map((key, index) => {
                                            let styles = {
                                                backgroundColor: theme.palette.secondary.main,
                                                margin: 5,
                                                borderRadius:10,
                                                float: 'left',
                                                height:'20em',
                                                width: '20em'
                                            };
                                            let props = { [this.state.component]: key, click: false }
                                            return(
                                                <div 
                                                    style={selected_part == key ? {...styles, backgroundColor: theme.palette.success.light, border: `3px dashed ${theme.palette.tertiary.main}`} : styles}
                                                    onClick={() => this.setComponent(key)}
                                                >
                                                    <Moji {...props}/>
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

export default Menu
