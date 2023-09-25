import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Back from '../components/Back';

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const filterCategoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
    { value: 'jewelery', label: 'Jewelry' },
  ];

  const filterPriceOptions = [
    { value: '', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201', label: 'Over $200' },
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === '' || product.category === selectedCategory;
    if (selectedPriceRange === '') {
      return categoryMatch;
    }
    if (selectedPriceRange === '201') {
      return categoryMatch && product.price > 200;
    }
    const [min, max] = selectedPriceRange.split('-').map(Number);
    return categoryMatch && product.price >= min && product.price <= max;
  });

  return (
    <div>
      <Back />
      <section className='py-16 bg-gradient-to-r from-gray-100 via-rose-50 to-#64748B'>
        <div className='container mx-auto'>
          {/* Filtering options */}
          <div className='mb-4'>
            <label htmlFor='category' className='block text-sm font-medium text-gray-600'>
              Filter by Category:
            </label>
            <select
              id='category'
              name='category'
              value={selectedCategory}
              onChange={handleCategoryChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
            >
              {filterCategoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='priceRange' className='block text-sm font-medium text-gray-600'>
              Filter by Price:
            </label>
            <select
              id='priceRange'
              name='priceRange'
              value={selectedPriceRange}
              onChange={handlePriceRangeChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
            >
              {filterPriceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
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
