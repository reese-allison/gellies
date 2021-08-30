import { useState, h, Fragment, Component, options } from 'preact';
import { Select, InputLabel, MenuItem } from '@material-ui/core'
import pageStyle from '../styles/pages'

/*
            // THIS IS DANGEROUS! TO REDUCE XSS ATTACKS, WE NEED TO SANITIZE this.state.content (See DomPurify)
            <div className={pageclass.pageCenter}id='menu' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>

            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
 */
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            gradient: 'random',
            //g_html: null,
            html: null,
            list: {},
        }
        //console.log(this.fetch_html("/list")) 
    }
    
    /** @jsx h */
    /** @jsxFrag Fragment */
    
    fetch_html(url){
        fetch(url)
        .then(response => {
            return response.text();
        })
        .then(content => {
            this.setState({html: content})
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
            this.fetch_html("api/part/gradients/"+this.state.gradient)
            console.log(this.state.list)
            //this.setState({g_html: this.state.html})
        }
    }

    gradientChange = (event) =>{
        this.setState({gradient: event.target.value})
    }

    Selections = () => {
        const { list } = this.state
        Object.keys(list).forEach(element =>
            
            parts = list.length > 0 && list.map((item, i) => {
                return (
                <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
                )
            console.log(element)

        )

        /*
        forEach(element => {
            
        });
        let parts = list.length > 0
		&& list.map((item, i) => {
		return (
			<MenuItem key={i} value={item.id}>{item.name}</MenuItem>
		)
	}, this);*/
    }


    render(props, state){
        const pageclass = pageStyle();
        return (
            <div className={pageclass.pageCenter} >
                <svg style={{padding: "0% 40% 0% 40%"}} xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 600 600">
                <defs>
                    <g dangerouslySetInnerHTML={{__html: this.state.html}}> 
                        </g>
                    <filter id="shadow-blur" x="-100%" y="-100%" height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>
                <g id="bodies">
                <ellipse id="moji-shadow" cx="245" cy="452" rx="219" ry="45" fill="black"  />
                <path fill="url(#moji-menu-body-color)" style="stroke:black;stroke-width:.5px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                </g>
                <g id="eyes"></g>
                <g id="mouths"></g>  
                </svg>
                <this.Selections/>
                <InputLabel id="grad_label">Gradient</InputLabel>
                <Select className={pageclass.pageMenu} labelId="grad_label" id="gradients" value={this.state.gradient} onChange = {this.gradientChange}>
                    <MenuItem value="random">random</MenuItem>
                    <MenuItem value="bone">bone</MenuItem>
                </Select>
                
            </div>
        )
    }

}

export default Menu


/*


        if (prevProps.bodies !== this.state.bodies){
            console.log("/path/bodies/"+this.state.bodies)
            this.fetch_html("/path/bodies/"+this.state.bodies)
        }
        if (prevProps.eyes !== this.state.eyes){
            console.log("/path/eyes/"+this.state.eyes)
            this.fetch_html("/path/eyes/"+this.state.eyes)
        }
        if (prevProps.mouths !== this.state.mouths){
            console.log("/path/mouths/"+this.state.mouths)
            this.fetch_html("/path/mouths/"+this.state.mouths)
        }




    bodyChange = (event) =>{
        this.setState({bodies: event.target.value})
    }
    eyeChange = (event) =>{
        this.setState({eyes: event.target.value})
    }
    mouthChange = (event) =>{
        this.setState({mouths: event.target.value})
    }





            <div className={pageclass.pageCenter}>
                <svg style={{padding: "0% 40% 0% 40%"}}>
                <defs>
                    <radialGradient id="gradients"></radialGradient>
                    <filter id="shadow-blur" x="-100%" y="-100%" height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>
                <g class="moji">
                    <g id="bodies" class="moji">
                        <ellipse id="moji-shadow" cx="245" cy="452" rx="219" ry="45" fill="rgba(0,0,0,.5)" filter="url(#shadow-blur)" />
                        <path fill="url(#moji-body-color)" style="stroke:black;stroke-width:.5px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                    </g>
                    <g id="eyes" class="moji"></g>
                    <g id="mouths" class="moji"></g>  
                </g>
                </svg>
                <InputLabel id="grad_label">Gradient</InputLabel>
                <Select className={pageclass.pageMenu} labelId="grad_label" id="gradient" value={this.state.gradient} onChange = {this.gradientChange}>
                    <MenuItem value="random">random</MenuItem>
                    <MenuItem value="alien">alien</MenuItem>
                </Select>
                <InputLabel id="body_label">Body</InputLabel>
                <Select className={pageclass.pageMenu} labelId="body_label" id="bodies" value={this.state.bodies} onChange = {this.bodyChange}>
                    <MenuItem value="cute">cute</MenuItem>
                    <MenuItem value="20">test2</MenuItem>
                </Select>
                <InputLabel id="eye_label">Eyes</InputLabel>
                <Select className={pageclass.pageMenu} labelId="eye_label" id="eyes" value={this.state.eyes} onChange = {this.eyeChange}>
                    <MenuItem value="cute">cute</MenuItem>
                    <MenuItem value="20">test2</MenuItem>
                </Select>
                <InputLabel id="mouth_label">Mouth</InputLabel>
                <Select className={pageclass.pageMenu} labelId="mouth_label" id="mouths" value={this.state.mouths} onChange = {this.mouthChange}>
                    <MenuItem value="cute">cute</MenuItem>
                    <MenuItem value="20">test2</MenuItem>
                </Select>
            </div>



*/