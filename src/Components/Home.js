import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import {Shop} from './Shop'
import {P} from './P'
export const Home = ({ user }) => {


    return (
        <div className='wrapper'>
            <Navbar user={user} />


            {!user && <> <div className='rightside'>
            

            <h3 style={{color:"orange",textAlign:"center"}}>Today's deals</h3>
              <Shop user={user} />
              <h3 style={{color:"orange",textAlign:"center"}}> Books </h3>
              <P user={user}/>

            </div> </>}
            {user && <> <div className='rightside'>

            
            <Products user={user} />
              

            </div> </> }

        </div>
    )
}