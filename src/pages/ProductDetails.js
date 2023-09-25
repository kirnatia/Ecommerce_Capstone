import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const goBack = useNavigate();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product || {};

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] max-auto">
              {title}
            </h1>
            <div className="text-xl py-2 px-8 bg-yellow-200 text-gray-800 font-medium mb-6 items-center justify-center">
              ${price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-emerald-600 py-4 px-5 text-white"
            >
              Add to cart
            </button>
            <br></br>
            <br></br>
            <Link
              to="/landing"
              className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
            >
              <button
                onClick={() => goBack()}
                className="bg-orange-500 py-4 px-8 text-white"
              >
                Go Back
              </button>
            </Link>
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
