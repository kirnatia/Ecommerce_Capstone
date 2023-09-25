import React, { useState, useEffect } from 'react';

const ProductFilter = ({ products, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  useEffect(() => {
    // Check if products is defined before filtering
    if (products) {
      // Apply filters and pass the filtered products to the parent component
      const productfilter = products.filter((item) => {
        return (
          (selectedCategory === '' || item.category === selectedCategory) &&
          (selectedPriceRange === '' ||
            (item.price >= parseInt(selectedPriceRange.split('-')[0], 10) &&
              item.price <= parseInt(selectedPriceRange.split('-')[1], 10))) &&
          (selectedRating === '' || item.rating === parseInt(selectedRating, 10))
        );
      });

      onFilterChange(productfilter);
    }
  }, [products, selectedCategory, selectedPriceRange, selectedRating, onFilterChange]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg items-center text-center font-semibold mb-4">Filter Products</h2>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-600">
          Category:
        </label>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="Jewelery">Jewelry</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="priceRange" className="block text-sm font-medium text-gray-600">
          Price Range:
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
      <div className="mb-4">
        <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
          Rating:
        </label>
        <select
          id="rating"
          name="rating"
          value={selectedRating}
          onChange={handleRatingChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">All Ratings</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
