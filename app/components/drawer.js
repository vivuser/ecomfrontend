import { Button, Drawer, Stack } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearProducts } from '../redux/slices/products';
import { resetCart } from '../redux/slices/CartSlice';
import { useRouter } from 'next/navigation';

const CustomDrawer = () => {
 const { cartProduct }  = useSelector(state => state.cart)
 console.log(useSelector(state => state.cart), 'ooo')
 const { products :  { data: { products }} } = useSelector(state => state.products)
 const [open, setOpen] = useState(true);
 const dispatch = useDispatch();
 const router = useRouter();

 console.log(products, 'products')

 const handleClose = () => {
    setOpen(false)
 }

 const handleClearCart =(e) => {
  e.preventDefault()
  console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
  dispatch(resetCart())
 }

 const getAllProductIds = cartProduct.map(item => {
    return item.id
})

 const productIds = getAllProductIds.flat()
console.log(productIds, 'zzzz')

// const mapIdToName = (products, productIds) => {

//     const idToNameMap ={};
//     products?.forEach(product => {
//       idToNameMap[product._id] = product.name;
//     })

//     return productIds?.map(id => idToNameMap[id]);

// }

// const modifiedProducts = mapIdToName(products, productIds);


// const updatedCart = products.map((item, index) => {
//   const productName = modifiedProducts[index];
  
//   return {
//     ...item,
//     name: productName
//   };
// });  

const getProductByIds = (products, productIds)  => {
    return products?.filter(product => productIds.includes(product._id))
} 

 const updatedCart = getProductByIds(products, productIds)
 console.log(updatedCart, '==========')
const newArray =[]

 const updatedCartWithQty = updatedCart.map(item => {
          const cartItem =  cartProduct.find(c => c.id === item._id)
        console.log(cartItem, 'cartItem---------------------->>>>>>><<<<<<<<<<<<<')
          if (cartItem){
                newArray.push({
                    ...item,
                    quantity: cartItem.quantity || 1
                })
          }
          console.log(newArray, '||||||||||||||||||||||||||||')
           
 })

 console.log(updatedCartWithQty, 'fffff')

 console.log(updatedCart, '4444444')

 const total = newArray.reduce((acc,item) => {
     return acc +(item.price*item.quantity) 
 }, 0)

const RedirectOnCheckout =() => {
 router.push('/checkout')
}

  return (
        <Drawer
        className='drawer demo'
        open={open}
        anchor='right'
        onClose={handleClose}
        sx={{
            '& .MuiDrawer-paper': { width: '400px' }, // Customize drawer width
          }}
        >
            <Stack className='m-4'>
            <Button variant="contained" className="bg-orange-400 w-40" onClick={(e)=>handleClearCart(e)}>Clear Cart</Button>
            {newArray?.map(item => (
                <>
                <Stack direction="row" className='flex justify-between'>
                <Stack>
                <h3 className='font-bold'>{item.name}</h3>
                <h3>${item.price}</h3>
                </Stack>
                <h3 className='font-bold'>X {item.quantity}</h3>
                </Stack>
                </>
            ))}

            </Stack>
            <div className='footer'>  
            <h2 className='font-bold'>Total: $ {Math.round(total)}</h2>
            </div>

            <Button variant='contained' onClick={RedirectOnCheckout}>CHECKOUT</Button>


        </Drawer>
  )
}

export default CustomDrawer;