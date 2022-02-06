import { h, Fragment, Component } from 'preact';
import { Container, Box, Grid, Button, Icon } from '@material-ui/core';

import theme from '../styles/theme';
import navBarStyles from '../styles/nav';


/** @jsx h */
/** @jsxFrag Fragment */

class GoogleIcon extends Component{
    render(){
        return(
            <Icon width='100%' height='100%' style={{minHeight: '45px', minWidth: '45px'}}>
                <img src="/static/imgs/btn_google_light_normal_ios.svg"/>
            </Icon>
        )
    }
}

class FacebookIcon extends Component{
    render(){
        return(
            <Icon width='100%' height='100%' style={{minHeight: '45px', minWidth: '45px'}}>
                <img src="/static/imgs/btn_facebook_light_normal_ios.svg"/>
            </Icon>
        )
    }
}

class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const classes = navBarStyles();
        return (
            <Box m={6}>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={8} md={4}>
                        <Box boxShadow={1} style={{backgroundColor: theme.palette.secondary.main, borderRadius: 30, maxHeight: '60vh', height: '60vh'}}>
                            <Grid container spacing={4} direction='column' alignItems="stretch" justifyContent="center">
                                <Grid item xs={12} >
                                    <Box m={5} style={{textAlign: 'center'}} className={classes.navBarButton}>
                                        Login to Your Account
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mx={5}>
                                        <Button 
                                            onClick={()=>{
                                                window.location = "/api/login/google"
                                            }}
                                            size='large' 
                                            variant="contained" 
                                            startIcon={<GoogleIcon />}  
                                            style={{
                                                justifyContent: 'left', 
                                                color: 'white', 
                                                backgroundColor: '#4285f4', 
                                                fontFamily: '"Roboto"', 
                                                padding: '1px 4px', 
                                                width: '100%'
                                            }}>
                                                Login with Google
                                        </Button>
                                    </Box>
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <Box mx={5}>
                                        <Button 
                                            onClick={()=>{
                                                window.location = "/api/login/facebook"
                                            }}
                                            size='large' 
                                            variant="contained" 
                                            startIcon={<FacebookIcon />}
                                            style={{
                                                justifyContent: 'left', 
                                                color: 'white', 
                                                backgroundColor: '#4267B2', 
                                                fontFamily: '"Roboto"', 
                                                padding: '1px 4px', 
                                                width: '100%'
                                            }}>
                                                Login with Facebook
                                        </Button>
                                    </Box>
                                </Grid> */}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Login;
