
import React from 'react'
import Cart from '../components/cart'
import Drawer from '../components/drawer'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {


  return (
    <>
    <div style={{ display: 'flex', alignItems:''}} className='flex items-center justify-end bg-orange-100 h-14'>
      <div>
    <Cart/>
    </div>
    </div>
    {/* <Drawer /> */}
    </>)
}

export default Header