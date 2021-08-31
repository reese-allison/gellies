import { h, Fragment, Component, options } from 'preact';
import { Select, InputLabel, MenuItem } from '@material-ui/core'
import pageStyle from '../styles/pages'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            gradient: 'random',
            g_html: '',
            body: 'cute',
            b_html: '',
            eyes: 'cute',
            e_html: '',
            mouth: 'cute',
            m_html: '',
            list: {},
        }
    }
    
    /** @jsx h */
    /** @jsxFrag Fragment */

    fetch_html(url, tag){
        const local_route = {
            'gradient': "api/part/gradients/"+this.state.gradient,
        }
        fetch(local_route[url])
        .then(response => {
            return response.text();
        })
        .then(content => {
            this.setState({[tag]: content})
        })
        .catch(function(error){
            console.log(error)
        });
    }

    componentWillMount(){
        fetch("api/list")
        .then(load => {
            return load.json()
        })
        .then(json => {
            this.setState({list: json})
        }).catch(error =>{
            console.log(error)
        });
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.list){
            console.log(this.state.list)
        }
        if (prevState.gradient !== this.state.gradient){
            console.log(this.state.gradient)
            console.log("api/part/gradients/"+this.state.gradient)
            this.fetch_html('gradient', 'g_html')
            console.log(this.state.list)
        }
    }

    handleChange = (event) =>{
        const {value, name} = event.target
        this.setState({[name]: value})

        /*
        console.log(event.name)
        const {type, value, html_tag} = event.target
        this.fetch_html('gradient', html_tag)
        //this.setState({[html_tag]: value})
        this.setState({[type]: event.target.value})
        console.log(type)*/
    }

    render(props, state){
        const pageclass = pageStyle();
        return (
            <div className={pageclass.pageCenter} >
                <svg style={{padding: "0% 40% 0% 40%"}} xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 600 600">
                <defs>
                    <g id="gradients" dangerouslySetInnerHTML={this.state.g_html}> 
                        </g>
                    <filter id="shadow-blur" x="-100%" y="-100%" height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>
                <g id="bodies" dangerouslySetInnerHTML={this.state.b_html}>
                <ellipse id="moji-shadow" cx="245" cy="452" rx="219" ry="45" fill="black"  />
                <path fill="url(#moji-menu-body-color)" style="stroke:black;stroke-width:.5px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                </g>
                <g id="eyes" dangerouslySetInnerHTML={this.state.e_html}></g>
                <g id="mouths" dangerouslySetInnerHTML={this.state.m_html}></g>  
                </svg>
                <InputLabel id="grad_label">Gradient</InputLabel>
                <Select className={pageclass.pageMenu} labelId="grad_label" html_tag='g_html' name="gradient" value={this.state.gradient} onChange = {this.handleChange}>
                    <MenuItem value="random">random</MenuItem>
                    <MenuItem value="bone">bone</MenuItem>
                </Select>
                
            </div>
        )
    }

}

export default Menu

