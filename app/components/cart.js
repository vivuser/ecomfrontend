import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CustomDrawer from './drawer';


const Cart = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { cartCount } = useSelector(state => state.cart)
  console.log(useSelector(state => state.cart), 'iiiii')

  const openDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div onClick={openDrawer} >{cartCount }
    <AddShoppingCartIcon />
    {drawerOpen &&  <CustomDrawer open={drawerOpen} />}
    </div>
    
  )
}

export default Cart;