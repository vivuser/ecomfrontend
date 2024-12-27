"use client"
import { Button, Card, Stack, TextField } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Cart from '../components/cart'
import Category from '../common/category'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/products'
import { addToCart, setCartCount } from '../redux/slices/CartSlice'
import debounce from 'lodash.debounce'
import useWindowDimensions from '../wrapper/WeidthHook'
import CategoryTabSlider from '../common/CategoryTabSlider'
import CategorySliders from '../common/CategorySliders'
import BasicSelect from '../components/BasicSelect'

const ProductsPerPage = 15; // Number of products to display per page

let initialFilters = {
  term:"",
  sortBy: "highToLow"
}

const Shop = (props) => {
  const { serverProps } = props;
  const { params: query = {} } = serverProps || {}
  
  console.log(props, 'xxx')
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([]);
  const router = useRouter()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const { width } = useWindowDimensions()
  const [filters, setFilters] = useState({ ...initialFilters })
  const pathname = usePathname();


  const lastVisitedProductRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAllProducts({ ...filters })).unwrap().then(res => {
      setProducts(res.data.products)
    })
  }, [filters])

  useEffect(() => {
    setVisibleProducts(products.slice(0, ProductsPerPage));
  }, [products])


  // Function to load the next page
  const loadMore = debounce (() => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    const startIndex = nextPage * ProductsPerPage;
    console.log(startIndex, 'start index')
    const newProducts = products.slice(startIndex, startIndex + ProductsPerPage);
    setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
  });


  const getLastVistedProduct=(id) => {
    return localStorage.getItem('lastVisitedProduct', id)
  }

  const setLastVisitedProduct=(id) => {
    return localStorage.setItem('lastVisitedProduct', id)
  }

  const onProductClicked = (id) => {
    setLastVisitedProduct(id)    
    lastVisitedProductRef.current = id;
    console.log(lastVisitedProductRef.current, 'ooo')
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
      console.log('first in  llkkdkd')
      lastVisitedProductRef.current = id;
      console.log(lastVisitedProductRef.current, 'ooo')
      router.push(`/shop/products/${id}`)
    }

    useEffect(() => {
        let tempFilter = { ...filters}
        const params = new URLSearchParams();
        params.set('term', tempFilter?.term)
        params.set('sort', tempFilter?.sortBy)
        const newParams = params.toString();
        router.replace(`${pathname}?${newParams}`)
    },[filters, query.type])


    useEffect(() => {
      const lastVisitedProduct = getLastVistedProduct();
      if (lastVisitedProduct) {
        console.log(lastVisitedProduct, '++++++++++++++')
        const timeout = setTimeout(() => {

        const productElement = document.getElementById(lastVisitedProduct);
        // const productElement = lastVisitedProductRef
        console.log(productElement, '****************')
        if (productElement) {
          productElement.scrollIntoView({ behavior: 'smooth' });
        }
      },3000);
      }
    },[visibleProducts]);


    console.log(filters.sortBy, 'sort by')


    const handleFilterChange = (newFilterValue) => {
      setFilters({ ...filters, sortBy: newFilterValue});
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
      <BasicSelect filterValue={filters.sortBy} onFilterChange={handleFilterChange}/>
      {/* <img src={width <= 767 ? "/images/grid-top.jpg" : "/images/grid-top.jpg"} alt="Easy Sign Up" /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 m-10">
        {visibleProducts.map((item, index) => (
          // Here we apply the `key` prop to the `Card` element
          <Card className="p-6 m-2 w-full h-80 rounded-md" key={item._id} onClick={() => onProductClicked(item._id)}>
            <img
              src={`https://picsum.photos/400/${index * 100}`} // Dummy image URL
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
