import { Button } from '@material-ui/core';
import {h, Fragment, Component, render} from 'preact';
import Scene from './scene';


/**  @jsx h */
/** @jsxFrag Fragment */


class Battler extends Component{
    constructor(props){
        super(props)
        this.state = {
            anchors: this.props.anchors,
            background: this.props.background
        }

    }
    
    render(){
        return(
            <div style={{display: 'flex'}}>
                <div>
                    <h1>This is in a BATTLER</h1>
                    <Scene anchors={this.state.anchors} background={this.state.background} />
                </div>
                <div>
                    <Button>TEST</Button>
                </div>
            </div>
        )
    }

} 

export default Battler;