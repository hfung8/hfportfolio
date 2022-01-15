import React from "react";
import Grid from '@material-ui/core/Grid';
import headshot from '../images/headshot/harrycircle.png';
// import { ThemeProvider } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { Divider } from "@material-ui/core";

// const darkTheme = createMuiTheme({
//     palette: {
//     type: 'dark',
//     },
// })

const styleDescription = {
    fontSize: 25,
    fontFamily: 'Raleway'
}

const image = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const styleObj = {
    fontFamily: 'Montserrat',
    color: '#000000',
    fontSize: 44,
    backgroundColor: '#FFD700'
}

function About(){

    return (
        <div> 
                <Grid>
                    {/* <ThemeProvider theme={darkTheme}> */}
                        <CSSBaseline />
                        <Grid container style={image}>
                        <img src={headshot} alt='harrison headshot' /><br/>
                        <div style={styleObj}>My Background</div>
                        </Grid>
                        <Divider variant="middle" />
                        <Grid container justify="center"><Grid item xs={6}><span style={styleDescription}>Creative | Empathetic | Hard-Working<br/><Divider variant="middle"/> I have a passion for coding and helping others to attain their coding goals. I'm a teaching assistant and tutor at both Rutgers and Columbia University coding boot camps.</span></Grid></Grid>
                    {/* </ThemeProvider> */}
                </Grid>
        </div>
    )
}



export default About;
