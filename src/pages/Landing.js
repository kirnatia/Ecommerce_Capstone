import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === '' || product.category === selectedCategory;
    if (selectedPriceRange === '') {
      return categoryMatch && product.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (selectedPriceRange === '201') {
      return categoryMatch && product.price > 200 && product.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    const [min, max] = selectedPriceRange.split('-').map(Number);
    return categoryMatch && product.price >= min && product.price <= max && product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto">
          {/* Filters and Search bar side by side */}
          <div className="flex flex-wrap space-x-2 mb-5">
            {/* Filtering options */}
            <div className="w-full md:w-1/2 lg:w-1/4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                Filter by Category:
              </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full px-3 py-2 border border-white -300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                {filterCategoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-600">
                Filter by Price:
              </label>
              <select
                id="priceRange"
                name="priceRange"
                value={selectedPriceRange}
                onChange={handlePriceRangeChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                {filterPriceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Search bar */}
            <div className="w-full md:w-1/2 lg:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-600">
                Search:
              </label>
              <input
                type="text"
                id="search"
                name="search"
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Search by product title"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
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
