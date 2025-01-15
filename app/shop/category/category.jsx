"use client"
import { products } from '@/app/constant'
import { Card, Container } from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const CategoryName = () => {
    const { categoryName } = useParams()
    
    const productOfCategory = products.filter(item => (
      item.webcategorySlug === categoryName
    ))

    console.log(productOfCategory, 'yyyy')


    console.log(products, 'products')





  return (<>
<div>
  <a href="/shop" style={{ textDecoration: 'underline', color: "brown"}}>shop</a>
</div>
      <h1 className='text-3xl font-bold'>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 m-10">
    {productOfCategory.map((item,index) => (
            
            <Card key={item._id} className='carousel-card'>
              <img
  src={`https://picsum.photos/400/${index * 100}`} // Dummy image URL
  alt={item.name} // Alt text for the image (can use product name or any relevant text)
  // className="w-full h-40 object-cover rounded-md mb-4" // Adjusting the image size and style
/>
<h3>{item.product_name}</h3>
<h3>$ {item.price}</h3>
<h6>{item.description}</h6>
</Card>
    ))}
</div>
</>
  )
}

export default CategoryName;
