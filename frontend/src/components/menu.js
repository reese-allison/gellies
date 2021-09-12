import { h, Fragment, Component } from 'preact';
import { Select, InputLabel, MenuItem, Grid } from '@material-ui/core'
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
            list: {}
        }
        this.state.url = `/api/build/?${new URLSearchParams(this.state.components).toString()}`

        this.onChange = this.onChange.bind(this);
        this.setParts = this.setParts.bind(this);
    }

    onChange(event){
        const {name, value} = event.target;
        let new_components = { ...this.state.components }
        new_components[name] = value
        this.setState({ components: new_components })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.components != this.state.components){
            this.setState({url: `/api/build/?${new URLSearchParams(this.state.components).toString()}`})
        }
    }

    componentDidMount(){ 
        this.setParts();
    }

    setParts(){
        fetch('api/parts-list/')
        .then(response => {
            return response.json();
        })
        .then(content => {
            this.setState({list: content})
        })
        .catch(function(error){
            console.log(error)
        });  
    }

    render(){
        return(
            <div>
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item xs={6}>
                        <object width="60%" height="60%" type="image/svg+xml" data={this.state.url} />
                    </Grid>
                    <Grid item xs={6}>
                        {Object.keys(this.state.list).map((key, index) => {
                            return(
                                <div>
                                    <InputLabel>{key.toUpperCase()}</InputLabel>
                                    <Select name={key} value={this.state.components[key]} onChange={this.onChange}>
                                        {this.state.list[key].map((item, index) => {
                                            return(
                                                <MenuItem value={item}>{item}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </div>
                            )
                        })}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Menu
