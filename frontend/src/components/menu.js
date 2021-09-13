import { h, Fragment, Component } from 'preact';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DOMPurify from 'dompurify';

import menuStyles from '../styles/menu';


/**  @jsx h */
/** @jsxFrag Fragment */

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    render(){
        const classes = menuStyles();
        return(
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div style={{ minHeight: '40vw', height: '50vh'}}>
                            <object width="100%" height="100%" type="image/svg+xml" data={this.state.url} />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonGroup fullWidth={true} variant="contained" color="primary" aria-label="contained primary button group">
                            <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('body')}>Bodies</Button>
                            <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('eyes')}>Eyes</Button>
                            <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('mouth')}>Mouths</Button>
                            <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('pattern')}>Patterns</Button>
                            <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('headwear')}>Headwear</Button>
                            <Button className={classes.menuButton} size='large' onClick={() => this.showComponents('gradient')}>Gradients</Button>
                        </ButtonGroup>
                        <div style={{height: 'auto', overflowX: 'scroll'}}>
                            <div style={{width: 'max-content'}}>
                                {Object.keys(this.state.parts).map((key, index) => {
                                    let styles = {float: 'left', height:'20em', width: '20em'};
                                    return(
                                        <div 
                                            style={this.state.components[this.state.component] == key ? {...styles, 'border': '3px dashed black'} : styles}
                                            onClick={() => this.setComponent(key)} 
                                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.parts[key]) }}
                                        ></div>
                                    )
                                })}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Menu
