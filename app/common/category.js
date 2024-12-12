import React, { useState } from 'react'
import CustomReactSlick from './CustomReactSlick'
import { products } from '../constant';
import { Stack } from '@mui/material';
import Link from 'next/link';

const Category = (props) => {
    const [categoryName, setCategoryName] = useState([...new Set(products.map(item => item.category))])


     // Generate slides based on unique category names
  const categorySlides = categoryName.map((category, index) => (
    <div key={index} style={{ margin: "20px"}}>
      <Link href={'/category'}><h3>{category}</h3></Link>
    </div>
  ));

  
  return (
    <CustomReactSlick>
       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between",backgroundColor: "#D4D4D4" }}>
        {categorySlides}
        </div> 
    </CustomReactSlick>
  )
}

export default Category;