"use client"
import { Button, Card, Stack, TextField } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/slices/products';
import { addToCart } from '../redux/slices/CartSlice';
import debounce from 'lodash.debounce';
import useWindowDimensions from '../wrapper/WeidthHook';
import BasicSelect from '../components/BasicSelect';

const ProductsPerPage = 15; // Number of products to display per page

let initialFilters = {
  term: "",
  sortBy: "highToLow"
}

const Shop = (props) => {
  const { serverProps } = props;
  const { params: query = {} } = serverProps || {};

  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const { width } = useWindowDimensions();
  const [filters, setFilters] = useState({ ...initialFilters });
  const pathname = usePathname();

  const lastVisitedProductRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAllProducts({ ...filters })).unwrap().then(res => {
      setProducts(res.data.products);
    });
  }, [filters]);

  useEffect(() => {
    setVisibleProducts(products.slice(0, ProductsPerPage));
  }, [products]);

  // Function to load the next page
  const loadMore = debounce(() => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    const startIndex = nextPage * ProductsPerPage;
    const newProducts = products.slice(startIndex, startIndex + ProductsPerPage);
    setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
  });

  const debouncedSearch = useCallback(
    debounce((query) => {
      const result = products.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      setResult(result);
    }, 300), [products]
  );

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearch(value);
    debouncedSearch(value);
  }

  const handleFilterChange = (newFilterValue) => {
    setFilters({ ...filters, sortBy: newFilterValue });
  }

  return (
    <>
      <div className="p-4">
        <TextField 
          value={search}
          onChange={handleSearch}
          name="search"
          fullWidth
          label="Search Products"
        />

        {/* Search Result dropdown */}
        <div
          className='z-30 absolute w-full bg-white shadow-lg mt-2' 
          style={{
            maxHeight: '200px',  
            overflowY: 'auto',
            zIndex: 1000
          }}>
          {result.map(item => (
            <Stack direction="column" className='m-2 cursor-pointer'>
              <p onClick={() => router.push(`/shop/products/${item._id}`)}>{item.name}</p>
            </Stack>
          ))}
        </div>

        {/* Available Slots */}
        <Stack direction="row" className='justify-center items-center mb-4'>
          Available Slots
          {["2-3", "4-5", "9-10"].map((slot, index) => (
            <h4 key={index} className='font-bold m-2 mx-6 bg-yellow-200 px-4 border-black border-t-2'>{slot}</h4>
          ))}
        </Stack>

        <BasicSelect filterValue={filters.sortBy} onFilterChange={handleFilterChange} />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((item, index) => (
            <Card className="p-6 m-2 w-full h-auto rounded-md" key={item._id} onClick={() => router.push(`/shop/products/${item._id}`)}>
              <img
                src={`https://picsum.photos/400/${index * 100}`} // Dummy image URL
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4" 
              />
              <h4 className="font-bold">{item.name}</h4>
              <h4>{item.price}</h4>
              <h4>Available qty: <span>{item.stock}</span></h4>

              <Button variant="contained" color="primary" onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(item._id));
              }}>
                Add
              </Button>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts.length < products.length && (
          <div className="flex justify-center mt-4">
            <Button className="bg-blue-500 text-white p-2" onClick={loadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Shop;
