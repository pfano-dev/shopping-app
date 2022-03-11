import React, { useState } from 'react'
import { auth } from '../Config/Config'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




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
  



export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

        
    const classes = useStyles();

    return (
        <div className='container'>



<div className={classes.root}>


<Grid justify="center"   container spacing={0}>
     <br></br>
        <Grid align="center"  item xs={12} sm={4}>
          <Paper style={{ borderRadius: '0px',height:"450px",backgroundImage:`url("https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,marginTop:"70px"}} className={classes.paper}></Paper>
        </Grid>
        <br></br>
        <Grid  align="center"  item xs={12} sm={4}>
          <Paper style={{ borderRadius: '0px',height:"450px",marginTop:"70px"}}
           className={classes.paper}>

<h2>Login</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <span>Don't have an account? Register
                <Link to="signup"> Here</Link>
            </span>



           </Paper>
        </Grid>
       
      
      </Grid>

        
            
        </div>














            
        </div>
    )
}