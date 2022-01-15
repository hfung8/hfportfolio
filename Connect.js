import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import SvgIcon from '@material-ui/core/SvgIcon';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const styleContact = {
    fontFamily: 'Raleway',
    fontSize: 30
}

const styleEmail = {
    fontFamily: 'Raleway',
    fontSize: 19
}

function Connect(){

    return(
    <div>
        <p style={styleContact}>Please feel free to contact me. I would love to hear from you!</p>
        <Grid container direction="row" justify="space-evenly">
        <Grid item xs={4}>
        <p style={styleEmail}>General Email: harrison.hok.fung@gmail.com</p>
        </Grid>
        <Grid item xs={4}>
        <ListItemLink href='https://www.linkedin.com/in/harrisonfung/'>
        <p><LinkedInIcon style={{fontSize: 40}}/>LinkedIn</p>
        </ListItemLink>
        </Grid>
        <Grid item xs={4}>
        <ListItemLink href="https://github.com/hfung8">
        <p><GitHubIcon style={{fontSize: 40}}/>Github</p>
        </ListItemLink>
        </Grid>
        </Grid>
    </div>
    )
}

export default Connect;