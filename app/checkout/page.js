"use client"
import { Button, Card, Stack } from '@mui/material'
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
    <div className='items-center h-96 justify-center'>
      <h2 className='text-2xl m-2 text-center'>Checkout page</h2>
      <Card className="p-4 border rounded-lg shadow-md max-w-6xl">
      {
        checkoutProductArray.map(item => (
           <div key={item._id} className="flex justify-between items-center mb-4">
          <p>{item.product.name}</p>
          <p>${item.product.price}</p>
          <p>{item.quantity}</p>
          <p></p>
          </div>
        ))
      }
          </Card>

      <p className='font-bold text-xl text-center m-10'>Total: ${total.toFixed(2)}</p>

      <div>
        <p>Select Slot</p>
        
      </div>

      <Stack direction="row" className='items-center gap-4 flex justify-center'>
      Pay using 
      <Button variant='contained'style={{ backgroundColor: 'green' }} onClick={handleCheckout} >Cash</Button>
      <Button variant='contained' style={{ backgroundColor: 'orange' }} onClick={handleCheckout}>Card</Button>
      </Stack>
    </div>
    
  )
}

export default Checkout
