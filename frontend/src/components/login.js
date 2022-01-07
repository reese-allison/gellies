
import {h, Fragment, Component, render} from 'preact';
import { Button } from "@material-ui/core"
import { useEffect } from 'preact/hooks';

/**  @jsx h */
/** @jsxFrag Fragment */


class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      clientId : "312311870204-t6tul3erp3t8ikugb82kemstottdigh0.apps.googleusercontent.com",
      gsiScriptLoaded: false,
      loginUser : null
    }
  }
  
  loadGoogleButton() {
    console.log('load!!')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({gsiLoaded : true})
        }, 1500)
    })
  }


  handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    fetch()
  }
  
  googleInit = () => {
    if(window.google != undefined){
      console.log('load!!')
      console.log(window.google)
      window.google.accounts.id.initialize({
        client_id: this.state.clientId,
        callback: this.handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      window.google.accounts.id.prompt(); // also display the One Tap dialog
    }

  }

  componentDidUpdate = () =>{
    console.log('update!!')
    this.googleInit()
  }

  getWindow = () => {
    console.log(window);
    this.setState({loginUser : ""});
  }

  componentDidMount = () => {
    this.loadGoogleButton().then(d => {
      this.setState(d)
    })
  }

  componentWillUnmount = () => {
    window.google?.accounts.id.cancel()
    document.getElementById("google-client-script")?.remove()
  }
  
  render(){
    return(
    <div>
      <Button id={"buttonDiv"} className={"g_id_signin"} />
      <button onClick={this.getWindow}>Debug</button>
    </div>
    )
  } 
  
}
export default Login




//<script src="https://accounts.google.com/gsi/client" async defer></script>