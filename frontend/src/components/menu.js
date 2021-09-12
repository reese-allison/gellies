import { h, Fragment, Component } from 'preact';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DOMPurify from 'dompurify';


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
        return(
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <object width="100%" height="100%" type="image/svg+xml" data={this.state.url} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ButtonGroup fullWidth={true} variant="contained" color="primary" aria-label="contained primary button group">
                            <Button size='small' onClick={() => this.showComponents('body')}><h2>Bodies</h2></Button>
                            <Button size='small' onClick={() => this.showComponents('eyes')}><h2>Eyes</h2></Button>
                            <Button size='small' onClick={() => this.showComponents('mouth')}><h2>Mouths</h2></Button>
                            <Button size='small' onClick={() => this.showComponents('pattern')}><h2>Patterns</h2></Button>
                            <Button size='small' onClick={() => this.showComponents('headwear')}><h2>Headwear</h2></Button>
                            <Button size='small' onClick={() => this.showComponents('gradient')}><h2>Gradients</h2></Button>
                        </ButtonGroup>
                        <div style={{maxHeight: '75vh', overflowY: 'scroll'}}>
                            <Grid container>
                                {Object.keys(this.state.parts).map((key, index) => {
                                    return(
                                        <Grid xs={4}>
                                            <div 
                                                style={this.state.components[this.state.component] == key ? {'border': '3px dashed black'} : {}}
                                                onClick={() => this.setComponent(key)} 
                                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.parts[key]) }}
                                            ></div>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Menu
