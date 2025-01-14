"use client"
import CustomReactSlick from '@/app/common/CustomReactSlick'
import { addToCart } from '@/app/redux/slices/CartSlice'
import { fetchAllProducts, fetchProductDetail } from '@/app/redux/slices/products'
import { Button, Card, Stack, TextField } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'

const Product = () => {
  const { id } = useParams()
  // const { products: { data: { products } } } = useSelector(state => state.products);
  const [products, setProducts] = useState([])
  // const [productData, setProductData] = useState([])
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    size: "",
    color: ""
  })

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }


  useEffect(() => {
    dispatch(fetchAllProducts()).unwrap()
      .then(res => {
        setProducts(res.data.products)
      })
  }, [])

  // useEffect(() => {
  //   dispatch(fetchProductDetail(id)).unwrap()
  //   .then(res => {
  //     console.log(res, 'ggggg')
  //     setProductData(res.data)
  //   })
  // },[])



  console.log(products, 'PRODUCTS')

  const product = products.find(product => product._id === id)
  const similarProducts = products.filter(prod => prod.category === product.category)

  const handleAdd = (id) => {
    dispatch(addToCart(id))
  }

  return (
    <div className='justify-center items-center'>Product


      <Stack direction={{ xs: 'column', sm: 'row' }} 
      className='w-full sm:w-3/4 lg:w-1/2 gap-4 flex-col p-4 justify-center items-center'>
        <Card className='flex flex-col w-full sm:w-1/2 lg:w-1/2 p-4'
        >
          <img
            src="https://picsum.photos/200/300" // Dummy image URL
            alt="image" // Alt text for the image (can use product name or any relevant text)
            className="w-auto m-4 h-80 object-cover rounded-md mb-4" // Adjusting the image size and style
          />
          <Stack direction="column" className='m-8'>
            <h2 className='text-sm text-orange-400 underline'>in {product?.category}</h2>
            <h2 className='text-xl text-green-600'>{product?.name}</h2>
            <h2>Price: {product?.price}</h2>
            <h6>description: {product?.description}</h6>
            <h2>qty. {product?.stock}</h2>
            <h2>color {product?.color}</h2>
            <h2>size {product?.size}</h2>
            <Button variant='contained' sx={{ backgroundColor: '#F87171' }} onClick={() => handleAdd(product?._id)}>Add</Button>
          </Stack>
        </Card>

        <Stack>
          Customize size: <TextField
            value={formData.size}
            onChange={handleChange}
            name='size'
            className='20px'
          />
          Customize color: <TextField
            value={formData.color}
            onChange={handleChange}
            name='color'
          />
          <Button variant='contained' style={{ margin: "4px" }}>Add</Button>
          {formData.size}
          <br />
          {formData.color}
        </Stack>

      </Stack>

      <h2 className='text-3xl'>Related Products Carousel</h2>
      {/* <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '16px',  // Space between items
        padding: '10px 0', // Optional: Add padding to the container
      }}> */}

      
      <Slider {...settings}>

        {similarProducts.map((item, index) => (
          <Card key={item._id} className='carousel-card'>
            <img
              src={`https://picsum.photos/${index * 100}`} // Dummy image URL
              alt={item.name} // Alt text for the image (can use product name or any relevant text)
              className="w-full h-40 object-cover rounded-md mb-4" // Adjusting the image size and style
            />
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
          </Card>
        ))

        }
      </Slider>

      {/* </div> */}
    </div>
  )
}

export default Product