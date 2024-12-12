"use client"
import { Button, Card, Stack, TextField } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import Cart from '../components/cart'
import Category from '../common/category'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/products'
import { addToCart, setCartCount } from '../redux/slices/CartSlice'
import debounce from 'lodash.debounce'

const ProductsPerPage = 15; // Number of products to display per page

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([]);
  const router = useRouter()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    dispatch(fetchAllProducts()).unwrap().then(res => {
      setProducts(res.data.products)
    })
  }, [])

  useEffect(() => {
    setVisibleProducts(products.slice(0, ProductsPerPage));
  }, [products])

  console.log(visibleProducts, 'vvv')

  // Function to load the next page
  const loadMore = debounce (() => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    const startIndex = nextPage * ProductsPerPage;
    console.log(startIndex, 'start index')
    const newProducts = products.slice(startIndex, startIndex + ProductsPerPage);
    setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
  });

  const onProductClicked = (id) => {
    console.log(id, 'xx')
    router.push(`/shop/products/${id}`)
  }

  console.log(products, 'XXXXXX')

  const HandleAddToCart = (id) => {
    dispatch(addToCart(id));
  }

  const availableSlots = ["2-3", "4-5", "9-10"]

  const debouncedSearch = useCallback(
    debounce((query) =>{
      const result =products.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      setResult(result)
    },300),[products]
  )

  const handleSearch = (e) =>{
    const { name, value } = e.target
    setSearch(value)
    debouncedSearch(value)
    }
  
    const handleRedirectToDetail = (id) => {
      router.push(`/shop/products/${id}`)
    }


  return (
    <>
      Search Products
      <TextField 
      value={search}
      onChange={handleSearch}
      name="search"
      />
          <div 
        className='z-30 absolute w-full bg-white shadow-lg' 
        style={{
          top: '100px',  // Adjust the space to position the result above the search box
          marginLeft:'120px',
          left: 0,
          maxHeight: '200px',  // Adjust based on your preference
          overflowY: 'auto',
          maxWidth:'240px',
          zIndex: 1000
        }}>
      {result.map(item => (
       <Stack direction="column" className='m-2 cursor-pointer'>
        <p onClick={() => handleRedirectToDetail(item._id)}>{item.name}</p>
       </Stack>
      ))}
      </div>
      <Stack direction="row" className='justify-center items-center'>     
        Available Slots
        {availableSlots.map((slot, index) => (
          <h4 key={index} className='font-bold m-2 mx-6 bg-yellow-200 px-4'>{slot}</h4>
        ))}
      </Stack>
      <Category />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 m-10">
        {visibleProducts.map((item, index) => (
          // Here we apply the `key` prop to the `Card` element
          <Card className="p-6 m-2 w-full h-80 rounded-md" key={item._id} onClick={() => onProductClicked(item._id)}>
            <img
              src={`https://picsum.photos/${index * 100}`} // Dummy image URL
              alt={item.name} // Alt text for the image (can use product name or any relevant text)
              className="w-full h-40 object-cover rounded-md mb-4" // Adjusting the image size and style
            />
            <h4>{item.name}</h4>
            <h4>{item.price}</h4>
            <h4>Available qty: <span>{item.stock}</span></h4>

            <Button variant="contained" color="primary"
              onClick={(e) => {
                e.stopPropagation()
                HandleAddToCart(item._id)
              }}>
              Add
            </Button>
          </Card>
        ))}
      </div>

      {visibleProducts.length < products.length && (
        <div className="flex justify-center mt-4">
          <Button className="bg-blue-500 text-white p-2" onClick={loadMore}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
}

export default Shop;
