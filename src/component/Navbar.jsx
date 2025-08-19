import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  
    const [visible, setVisible] = useState(false)
  
    return (

    <div className='flex items-center justify-between py-5 font-medium'>
    
        <img src={assets.logo} className='w-36' alt="Logo" />

        {/* Menu Items */}
        <ul className='gap-5 items-center text-sm text-gray-700 hidden sm:flex'>

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

        {/* Left Side */}
        <div className='flex items-center  gap-5 justify-between'>
            
            <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />

            <div className='group relative'>
                <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'/>
                
                <div className='group-hover:block absolute hidden right-0 pt-4'>
                    
                    <div className='flex flex-col bg-slate-100 w-36 p-2.5 rounded gap-1 text-sm '>
                        <p className='cursor-pointer hover:text-fuchsia-900'>My Profile</p>
                        <p className='cursor-pointer hover:text-fuchsia-900'>Orders</p>
                        <p className='cursor-pointer hover:text-fuchsia-900'>Log Out</p>
                    </div>

                </div>
            </div>

            <Link to='/cart'>
                <img src={assets.cart_icon} className='w-5' />
                
            </Link>

            <img src={assets.menu_icon} onClick={() => setVisible(true)} className='w-5 sm:hidden cursor-pointer' />

        </div>

        {/* Side Bar for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${visible ? 'w-full': 'w-0'} `}>
            <div className='flex flex-col text-gray-600'>
                
                <div onClick={() => setVisible(false)} className='flex items-center gap-5 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} />
                    <p>Back</p>
                </div>

                <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'> Home </NavLink>
                <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'> Collection </NavLink>
                <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'> About </NavLink>
                <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'> Contact </NavLink>

            </div>
        </div>
    
    </div>
  )
}

export default Navbar
