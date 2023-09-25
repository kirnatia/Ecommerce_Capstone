import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Back from '../components/Back';


const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [selectedPriceRange, setSelectedPriceRange] = useState(''); 


  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      selectedCategory === '' || item.category === selectedCategory;
    
  
    const priceRangeMatch =
      selectedPriceRange === '' ||
      (item.price >= selectedPriceRange.min && item.price <= selectedPriceRange.max);
    

    return categoryMatch && priceRangeMatch;
  });

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(parsePriceRange(e.target.value));
  };
  const parsePriceRange = (rangeString) => {
    const [min, max] = rangeString.split('-');
    return {
      min: parseInt(min, 10),
      max: parseInt(max, 10),
    };
  };

  return (
    <div>
      <Back />
     
      <section className='py-16 bg-gradient-to-r from-gray-100 via-rose-50 to-#64748B'>
        <div className="container mx-auto">
          {/* Filtering options */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-600">
              Filter by Category:
            </label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="jewelery">Jewelery</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-600">
             Filter by Price:
            </label>
            <select
          id="priceRange"
          name="priceRange"
          value={selectedPriceRange}
          onChange={handlePriceRangeChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
        </select>
          </div>
          
         
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 
          gap-[20px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
