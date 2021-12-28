import { Button } from '@material-ui/core';
import {h, Fragment, Component, render} from 'preact';


/**  @jsx h */
/** @jsxFrag Fragment */

class Login extends Component{

    componentDidMount() {
        
    }


    state = {
        producerLoginEndpoint: 'http://localhost:8000/api/login/',
        producerLogoutEndpoint: 'http://localhost:8000/api/logout/',
    }

    authenticate = {
        

    }

    getAccessToken = (authToken) => {

    }

    logout = {

    }


    render() {
        return(
        <div>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            <meta name="google-signin-client_id" content="312311870204-t6tul3erp3t8ikugb82kemstottdigh0.apps.googleusercontent.com"></meta> 
            <script src="https://apis.google.com/js/platform.js" async defer></script>
        </div>)
    }


}
export default Login