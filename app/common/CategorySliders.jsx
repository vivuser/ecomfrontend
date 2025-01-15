import React, { useEffect, useState } from 'react';
import CategoryTabSlider from './CategoryTabSlider'; // Import the CategoryTabSlider component
import { products } from '../constant'; // Assuming the 'products' data is being imported
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';

const CategorySliders = () => {
  const router = useRouter()
  const [isSlideMoved, setSlideMoved] = useState(false);
  const [isMount, setIsMount] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndx] = useState(0);
  console.log(useSelector(state => state), '&&&&')

  const [category, setCategory] = useState([
    ...new Set(products.map(item => item)),
  ]); // Extract unique categories from products

  const [selectedCategoryHighlight, setSelectedCategoryHighlight] = useState("")


  console.log(category, 'oooo')

  const getCategoryImage = (category) => {
    console.log(category, 'receibebvefe')
    switch (category.toLowerCase()) {
      case 'electronics':
        return '/images/concentrates.jpg';
      case 'furniture':
        return '/images/deals.jpg';
      case 'clothing':
        return '/images/flower.jpg';
      case 'growth':
        return '/images/tincture.jpg';
        case 'health':
            return '/images/vapes.jpg';
            case 'beauty':
                return '/images/wellness.jpg';
      // Add more categories as needed
      default:
        return '/images/preRolls.jpg'; // Default image if no match
    }
  };


  useEffect(() => {
    if (!isMount) return;

    const interVal = setTimeout(() => {
      setSlideMoved(true);
    }, 7000);

    return () => {
      clearTimeout(interVal); // Clear interval on cleanup
    };
  }, [isMount]);

  const handleCategoryRedirect = (categorySlug) => {
        router.push(`/shop/${categorySlug}`)
        setSelectedCategoryHighlight(categorySlug)
  }

  return (
    <div style={{ width: '1800px', margin: '20px' }}>
    <CategoryTabSlider onMove={() => setSlideMoved(true)} activeCategoryIndex={activeCategoryIndex} autoplay={{ delay: 3000, disableOnInteraction: false }}>
      {category.map((cat, index) => (
    <div key={index} style={{ width: '250px', margin: '20px' }}>
       <SwiperSlide key={index}>
            <div onClick={() => handleCategoryRedirect(cat.webcategorySlug)}
               style={{
                display: 'flex', // Apply flexbox layout
                flexDirection: 'column', // Stack image and text vertically
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                textAlign: 'center', // Center the text
                height: '150px', // Ensure the wrapper has enough height to center content
                width: '80%', // Use the full width of the container
                cursor: 'pointer',
                padding: '10px', // Add some padding for better spacing
              }} 
              className={`cursor-pointer ${selectedCategoryHighlight === cat.webcategorySlug ? 'bg-yellow-200 w-40 h-40 rounded-lg' : ''}`} 
              >
            <img 
            className='cursor-pointer'
              src={getCategoryImage(cat.category)} 
              alt={cat.category} 
              style={{ 
                width: '100px',  // Set width to 80% of container
                height: '100px', // Set height equal to width for a square image
                borderRadius: '50%', // Make image round by setting borderRadius to 50%
                objectFit: 'cover',  // Ensure image fits nicely within the circle
                margin: '0 auto',  // Center the image
              }} 
            />
            <h3 className='cursor-pointer'>{cat.category}</h3>
          </div>
        </SwiperSlide>
        </div>
      ))}
    </CategoryTabSlider>
    </div>
  );
};

export default CategorySliders;
