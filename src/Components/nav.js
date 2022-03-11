import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

export const Nav = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/');
        })
    }

    return (
        <div className='navbox'>
            <div className='leftside'>
               
            </div>
            {!user && <div className='rightside'>
            <span><Link to="" className='navlink'>home</Link></span>
                <span><Link to="about" className='navlink'>about</Link></span>
                <span><Link to="contact" className='navlink'>contact</Link></span>
                
              
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