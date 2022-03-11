import React, { useContext , useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
import { db } from '../Config/Config'

export const Navbar = ({ user }) => {




    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/');
        })
    }

    const onInputChange = event => {
        setTitle(event.target.value);
      };

    return (
        <div className='navbox'>
            <div  style= {{display:"flex"}} className='leftside'>
          


            </div>
            {!user && <div className='rightside'>
             
            <span><Link to="" className='navlink'>home</Link></span>
            
                <span><Link to="about" className='navlink'>about</Link></span>
                <span><Link to="contact" className='navlink'>contact</Link></span>
                
                <span><Link to="signup" className='navlink'>sign up</Link></span>
                <span><Link to="login" className='navlink'>sign in</Link></span>
            </div>}
            {user && <div className='rightside'>

            <span><Link to="" className='navlink'>home</Link></span>
                <span><Link to="about" className='navlink'>about</Link></span>
                <span><Link to="contact" className='navlink'>contact</Link></span>
             
                <Link style={{color:"orange"}} to="cartproducts" className='navlink'><Icon icon={cart} /></Link>
                <span className='no-of-products'>{totalQty}</span>
                
                <Link style={{marginLeft:"20px", marginRight:"20px" , textDecoration:"none"}} to="/" className='navlink'> welcome {user}</Link>
              
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )
}