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
  



export const about = ({ user }) => {

   
        
    const classes = useStyles();

    return (
        <div className='container'>
 <Nav user={user} />
<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

<h1>about us</h1>

<p>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cupiditate obcaecati. Nobis aperiam necessitatibus vel doloremque exercitationem. Doloribus reiciendis atque enim tempore impedit? Qui deleniti ipsa quaerat, est maxime quia sit nisi cum repellat magni? Reprehenderit, omnis quaerat veniam architecto adipisci debitis tenetur saepe assumenda aliquid, deserunt asperiores eaque ut.
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati facere sapiente aliquid maiores, molestiae nesciunt hic asperiores numquam ex voluptates magni reprehenderit natus pariatur maxime neque? Sint illo incidunt aliquam nulla enim, nesciunt dignissimos dolorum molestiae vitae explicabo molestias error sed doloremque non omnis iste quos reiciendis voluptas qui!</p>

          </Paper>
        </Grid>
        
      </Grid>
    </div>

            
        </div>
    )
}