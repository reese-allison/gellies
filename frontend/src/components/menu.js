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
            change: '',
            list: {},
        }
    }
    
    /** @jsx h */
    /** @jsxFrag Fragment */

    fetch_html(url, tag){
        const local_route = {
            'gradient': "api/part/gradients/"+this.state.gradient,
            'body': "api/part/bodies/"+this.state.body,
            'eyes': "api/part/eyes/"+this.state.eyes,
            'mouth': "api/part/mouths/"+this.state.mouth,
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
        this.fetch_html('gradient', 'g_html')
        this.fetch_html('body', 'b_html')
        this.fetch_html('eyes', 'e_html')
        this.fetch_html('mouth', 'm_html')
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.gradient !== this.state.gradient){
            //this.fetch_html('gradient', 'g_html')
            this.setState({change: 'gradient'})
        }
    }

    handleChange = (event) =>{
        const {value, name} = event.target
        const tag_list = {
            'gradient' : 'g_html',
            'body' : 'b_html',
            'eyes' : 'e_html',
            'mouth' : 'm_html'
        }
        this.setState({[name]: value})
        this.fetch_html('gradient', tag_list[name])

        /*
        console.log(event.name)
        const {type, value, html_tag} = event.target
        this.fetch_html('gradient', html_tag)
        //this.setState({[html_tag]: value})
        this.setState({[type]: event.target.value})
        console.log(type)*/
    }

    Selection = () => {
        console.log(this.state.list)
        return(
        <div>
            <InputLabel id="grad_label">Gradient</InputLabel>
                <Select labelId="grad_label" name="gradient" value={this.state.gradient} onChange = {this.handleChange}>
                    <MenuItem value="random">random</MenuItem>
                    <MenuItem value="bone">bone</MenuItem>
                </Select>
        </div>)
    }

    render(props, state){
        const pageclass = pageStyle();
        return (
            <div className={pageclass.pageCenter} >
                <svg style={{padding: "0% 40% 0% 40%"}} xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 600 600">
                <defs>
                    <g id="gradients" dangerouslySetInnerHTML={{__html: this.state.g_html}}> 
                        </g>
                    <filter id="shadow-blur" x="-100%" y="-100%" height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>
                <g id="bodies" dangerouslySetInnerHTML={{__html: this.state.b_html}}>
                <ellipse id="moji-shadow" cx="245" cy="452" rx="219" ry="45" fill="black"  />
                <path fill="url(#moji-menu-body-color)" style="stroke:black;stroke-width:.5px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                </g>
                <g id="eyes" dangerouslySetInnerHTML={{__html: this.state.e_html}}></g>
                <g id="mouths" dangerouslySetInnerHTML={{__html: this.state.m_html}}></g>  
                </svg>
                <this.Selection/>
            </div>
        )
    }

}

export default Menu

/*

                <InputLabel id="grad_label">Gradient</InputLabel>
                <Select className={pageclass.pageMenu} labelId="grad_label" name="gradient" value={this.state.gradient} onChange = {this.handleChange}>
                    <MenuItem value="random">random</MenuItem>
                    <MenuItem value="bone">bone</MenuItem>
                </Select>
                
*/