"use client"
import { Button, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
 const { cartProduct }  = useSelector(state => state.cart)
 const { products :  { data: { products }} } = useSelector(state => state.products)
 const router = useRouter()

 console.log(cartProduct, '*******************++++++++++')

 let checkoutProductArray=[]
  cartProduct.map(p => {
      const product= products.find(prod=> prod._id === p.id)
        if (product){
          checkoutProductArray.push({
            quantity: p.quantity,
            product: product
          })
        }
        return checkoutProductArray
    })

    console.log(checkoutProductArray, '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

 const total=checkoutProductArray.reduce((acc,item) => (
      acc+(item.quantity * item.product.price) 
),0)

const handleCheckout=()=>{
  router.push('/thankyou')
}

  return (
    <div className='items-center h-96'>
      <h2 className='text-2xl m-2 text-center'>Checkout page</h2>
      {
        checkoutProductArray.map(item => (
          <Stack direction="row" className='gap-20 justify-center'>
          <Stack direction="column">
          <p>{item.product.name}</p>
          <p>{item.product.price}</p>
          </Stack>
          <p>{item.quantity}</p>
          </Stack>
        ))
      }
      <p className='font-bold text-xl text-center m-10'>Total: ${total}</p>

      <Stack direction="row" className='items-center gap-4 flex justify-center'>
      Pay using 
      <Button variant='contained'style={{ backgroundColor: 'green' }} onClick={handleCheckout} >Cash</Button>
      <Button variant='contained' style={{ backgroundColor: 'orange' }} onClick={handleCheckout}>Card</Button>
      </Stack>
    </div>
    
  )
}

export default Checkout
