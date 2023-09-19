import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Back from '../components/Back';

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(item => {
    return item.category === "jewelery" || item.category === "women's clothing" || item.category === "electronics" ||
      item.category === "men's clothing"
  });

  return (
    <div>
      <Back />
      <section className='py-16 bg-gradient-to-r from-gray-100 via-rose-50 to-#64748B'>
        <div className="container mx-auto">
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
