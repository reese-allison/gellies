import { h, Fragment, Component} from 'preact';
import { TextField } from '@material-ui/core';

/** @jsx h */
/** @jsxFrag Fragment */

class NewUser extends Component{

    render(){
        return(<div>
            <h1>NEWUSER</h1>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>)
    }
} 
export { NewUser };

class UserPage extends Component{
    render(){
        return(<div>
            <h1>USERPAGE</h1>
        </div>)
    }
}
export { UserPage };