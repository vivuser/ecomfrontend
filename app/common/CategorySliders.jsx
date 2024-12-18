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
  }

  return (
    <div style={{ width: '1800px', margin: '20px' }}>
    <CategoryTabSlider onMove={() => setSlideMoved(true)} activeCategoryIndex={activeCategoryIndex} autoplay={{ delay: 3000, disableOnInteraction: false }}>
      {category.map((cat, index) => (
    <div key={index} style={{ width: '250px', margin: '20px' }}>
       <SwiperSlide key={index}>
            <div style={{ textAlign: 'center' }} onClick={() => handleCategoryRedirect(cat.webcategorySlug)}>
            <img 
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
            <h3>{cat.category}</h3>
          </div>
        </SwiperSlide>
        </div>
      ))}
    </CategoryTabSlider>
    </div>
  );
};

export default CategorySliders;
