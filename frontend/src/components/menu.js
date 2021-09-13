import { h, Fragment, Component } from 'preact';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import DOMPurify from 'dompurify';

import theme from '../styles/theme';
import menuStyles from '../styles/menu';


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
                mouth: 'no',
                eyes: 'dot',
                body: 'cute',
                headwear: 'no',
                pattern: 'no'
            },
            parts: {},
            component: null
        }
        this.state.url = `/api/build/?${new URLSearchParams(this.state.components).toString()}`

        this.showComponents = this.showComponents.bind(this);
        this.setComponent = this.setComponent.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.components != this.state.components){
            this.setState({url: `/api/build/?${new URLSearchParams(this.state.components).toString()}`})
        }
    }

    showComponents(component) {
        this.setState({component: component}, ()=>{
            fetch('/api/parts/' + component)
            .then(response => {
                return response.json();
            })
            .then(content => {
                this.setState({parts: content});
            })
            .catch(function(error){
                console.log(error);
            });
        });
    }

    setComponent(value){
        let new_components = { ...this.state.components }
        new_components[this.state.component] = value
        this.setState({ components: new_components })
    }

    updateDimensions(){
        this.setState({ width: window.innerWidth, height: window.innerHeight }); 
    }

    render(){
        const classes = menuStyles();
        let vertical = window.innerHeight > window.innerWidth;
        return(
            <Container>
                <Box m={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={vertical ? 12 : 6}>
                            <div style={{ maxHeight: '100%', height: vertical ? '85vw' : '85vh'}}>
                                <object width="100%" height="100%" type="image/svg+xml" data={this.state.url} />
                            </div>
                        </Grid>
                        <Grid item xs={vertical ? 12 : 6}>
                            <div style={vertical ? {height: 'auto', overflowX: 'scroll'} : {height: window.innerHeight * .65, overflowY: 'scroll'}}>
                                <div style={vertical ? {width: 'max-content', height: '20em'} : {}}>
                                    {Object.keys(this.state.parts).map((key, index) => {
                                        let styles = {float: 'left', height:'20em', width: '20em'};
                                        return(
                                            <div 
                                                style={this.state.components[this.state.component] == key ? {...styles, 'border': `3px dashed ${theme.palette.tertiary.main}`} : styles}
                                                onClick={() => this.setComponent(key)} 
                                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.parts[key]) }}
                                            ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <ButtonGroup fullWidth={true} variant="contained" color="primary" aria-label="contained primary button group">
                                <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('body')}>Body</Button>
                                <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('eyes')}>Eyes</Button>
                                <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('mouth')}>Mouth</Button>
                                <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('pattern')}>Pattern</Button>
                                <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('headwear')}>Headwear</Button>
                                <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('gradient')}>Color</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        )
    }
}

export default Menu
