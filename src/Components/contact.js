import React, { useState } from 'react'
import { auth } from '../Config/Config'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Nav } from './nav';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  



export const contact = ({ user }) => {

   
        
    const classes = useStyles();

    return (
        <div className='container'>
 <Nav user={user} />
<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

<h1>contact us </h1>

<p><LocationOnIcon/>
 Address : 421 Helen Joseph St, Arcadia, Pretoria, 0007
</p>

<p><PhoneIcon/>phone no : 0820112163</p>
<p><WhatsAppIcon/>whatsapp : 01509620002</p>

<p><FacebookIcon/>facebook : pooBookstore</p>

<p><TwitterIcon />twitter : @pooBookstore</p>

<p>< EmailIcon/>email : pooBookstore@gmail.com</p>

          </Paper>
        </Grid>
        
      </Grid>
    </div>

            
        </div>
    )
}