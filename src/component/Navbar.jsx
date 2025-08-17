import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
    
        <img src={assets.logo} className='w-36' alt="Logo" />

        <ul className='flex gap-5 items-center text-sm text-gray-700'>

            <NavLink to='/'>
                <p>Home</p>
                <hr className='hidden' />
            </NavLink>

            <NavLink to='/collection'>
                <p>Collection</p>
                <hr className='hidden' />
            </NavLink>
            
            <NavLink to='/about'>
                <p>About</p>
                <hr className='hidden' />
            </NavLink>

            <NavLink to='/contact'>
                <p>Contact</p>
                <hr className='hidden' />
            </NavLink>

        </ul>
    
    </div>
  )
}

export default Navbar
