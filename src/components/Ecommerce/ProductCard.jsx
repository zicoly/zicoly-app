import React, { useContext } from 'react';
import Button from './AddCart';
import { ProductsContext } from '../API/ProductContext';

function ProductCard({ product, onAddToCart }) {
  const { incrementViewCount } = useContext(ProductsContext);

  const handleCardClick = () => {
    incrementViewCount(product.id);
  };

  return (
    <div
      className="product-card border rounded-lg p-6 flex flex-col justify-between text-center shadow-md"
      onClick={handleCardClick}
    >
      <a href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full w-60 h-auto border-b mb-4 mx-auto"
        />
      </a>
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-gray-800 mt-2">${product.price}</p>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;
