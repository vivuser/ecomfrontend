"use client"
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const Thankyou = () => {
    const router = useRouter()

    const handleRedirectToShop =() => {
        router.push('/shop')
    }


  return (
    <div>Thankyou
    <Button onClick={handleRedirectToShop}>Back to Shop</Button>
    </div>
  )
}

export default Thankyou