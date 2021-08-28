
import { useState, h, Fragment, Component } from 'preact';
import { Select, InputLabel, MenuItem } from '@material-ui/core'
import pageStyle from '../styles/pages'

/*
            // THIS IS DANGEROUS! TO REDUCE XSS ATTACKS, WE NEED TO SANITIZE this.state.content (See DomPurify)
            <div className={pageclass.pageCenter}id='menu' dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
 */
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            gradient: 10,
            bodies: 10,
            eyes: 10,
            mouths: 10,
        }
        
    }
    
    /** @jsx h */
    /** @jsxFrag Fragment */
    
    fetch_html(url){
        fetch(url)
        .then(response => {
            return response.text();
        })
        .then(content => {
            this.setState({content: content})
        })
        .catch(function(error){
            console.log(error)
        });
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.gradient !== this.state.gradient){
            console.log("/path/gradients/"+this.state.gradient)
            fetch_html("/path/gradients/"+this.state.gradient)
        }
        if (prevProps.bodies !== this.state.bodies){
            console.log("/path/bodies/"+this.state.bodies)
            fetch_html("/path/bodies/"+this.state.bodies)
        }
        if (prevProps.eyes !== this.state.eyes){
            fetch_html()
        }
        if (prevProps.mouths !== this.state.mouths){
            fetch_html()
        }



    }

    gradientChange = (event) =>{
        this.setState({gradient: event.target.value})
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

    render(){
        const pageclass = pageStyle();
        return (
            <div className={pageclass.pageCenter}>
                <svg style={{padding: "0% 40% 0% 40%"}}>
                <defs>
                    <radialGradient id="moji-body-color" fx="40%" fy="0%" fr="20%" cx="40%" cy="30%">
                        <stop offset="0" stop-color="rgb(140,248,101)" stop-opacity=".95" fx="0%" fy="0%"></stop>
                        <stop offset="1" stop-color="rgb(98,204,45)" stop-opacity=".95"></stop>
                    </radialGradient>
                    <filter id="shadow-blur" x="-100%" y="-100%" height="300%" width="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>
                <g class="moji">
                    <g id="body" class="moji">
                        <ellipse id="moji-shadow" cx="245" cy="452" rx="219" ry="45" fill="rgba(0,0,0,.5)" filter="url(#shadow-blur)" />
                        <path fill="url(#moji-body-color)" style="stroke:black;stroke-width:.5px;stroke-opacity:1;" d="m114.5 214.3c65.4-39.5 183.5-45.7 264-2.1 60.1 36.8 96.7 107.2 77.6 172.2-9.9 44.1-48.5 76.5-92 85.2-70.2 18.2-173.3 15.9-240.2 4.8-42.5-8.2-82.2-38.8-93.6-89.8-21.9-64.7 16.5-132 84.1-170.2z" />
                    </g>
                    <g id="eyes" class="moji"></g>
                    <g id="mouths" class="moji"></g>  
                </g>
                </svg>
                <InputLabel id="grad_label">Gradient</InputLabel>
                <Select className={pageclass.pageMenu} labelId="grad_label" id="gradient" value={this.state.gradient} onChange = {this.gradientChange}>
                    <MenuItem value="10">Gradient</MenuItem>
                    <MenuItem value="20">test2</MenuItem>
                </Select>
                <InputLabel id="body_label">Body</InputLabel>
                <Select className={pageclass.pageMenu} labelId="body_label" id="bodies" value={this.state.bodies} onChange = {this.bodyChange}>
                    <MenuItem value="10">Body</MenuItem>
                    <MenuItem value="20">test2</MenuItem>
                </Select>
                <InputLabel id="eye_label">Eyes</InputLabel>
                <Select className={pageclass.pageMenu} labelId="eye_label" id="eyes" value={this.state.eyes} onChange = {this.eyeChange}>
                    <MenuItem value="10">Eyes</MenuItem>
                    <MenuItem value="20">test2</MenuItem>
                </Select>
                <InputLabel id="mouth_label">Mouth</InputLabel>
                <Select className={pageclass.pageMenu} labelId="mouth_label" id="mouths" value={this.state.mouths} onChange = {this.mouthChange}>
                    <MenuItem value="10">Mouth</MenuItem>
                    <MenuItem value="20">test2</MenuItem>
                </Select>
            </div>
            )
    }

}

export default Menu


