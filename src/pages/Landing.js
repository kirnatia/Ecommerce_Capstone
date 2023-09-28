import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

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
    filterProducts(e.target.value, selectedPriceRange, searchQuery);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
    filterProducts(selectedCategory, e.target.value, searchQuery);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    filterProducts(selectedCategory, selectedPriceRange, e.target.value);
  };

  const filterProducts = (category, priceRange, query) => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === '' || product.category === category;
      if (priceRange === '') {
        return categoryMatch && product.title.toLowerCase().includes(query.toLowerCase());
      }
      if (priceRange === '201') {
        return categoryMatch && product.price > 200 && product.title.toLowerCase().includes(query.toLowerCase());
      }
      const [min, max] = priceRange.split('-').map(Number);
      return categoryMatch && product.price >= min && product.price <= max && product.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

  // Sort products by price in ascending order
  const sortByPriceAsc = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedProducts);
  };

  // Sort products by price in descending order
  const sortByPriceDesc = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedProducts);
  };

  // Sort products by name in ascending order
  const sortByNameAsc = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredProducts(sortedProducts);
  };

  // Sort products by name in descending order
  const sortByNameDesc = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto">
          {/* Sorting options */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600">
              Sort by:
            </label>
            <div className="flex space-x-2">
              <button
                onClick={sortByPriceAsc}
                className="px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring focus:ring-blue-300
                block text-lg text-sm font-normal"
              >
                Price (Low to High)
              </button>
              <button
                onClick={sortByPriceDesc}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring focus:ring-blue-300
                block text-lg text-sm font-normal"
              >
                Price (High to Low)
              </button>
              <button
                onClick={sortByNameAsc}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring focus:ring-blue-300
                block text-lg text-sm font-normal"
              >
                Name (A to Z)
              </button>
              <button
                onClick={sortByNameDesc}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring focus:ring-blue-300 
                block text-lg text-sm font-normal"
              >
                Name (Z to A)
              </button>
            </div>
          </div>

       
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
                className="w-full px-3 py-2 border border-white -300 
                rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                {filterCategoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <label htmlFor="priceRange" className="block text-sm 
              font-medium text-gray-600">
                Filter by Price:
              </label>
              <select
                id="priceRange"
                name="priceRange"
                value={selectedPriceRange}
                onChange={handlePriceRangeChange}
                className="w-full px-3 py-2 border border-gray-300 
                rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Search product"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 
          gap-[10px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
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
