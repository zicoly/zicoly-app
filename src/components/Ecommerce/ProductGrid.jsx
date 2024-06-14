import React, { useState, useContext } from 'react';
import ProductCard from './ProductCard';
import Modal from './Modal';
import { ProductsContext } from '../API/ProductContext';

function ProductGrid() {
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const { products, error } = useContext(ProductsContext);

  const handleAddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      setModalMessage('Product is already in the cart');
      setIsModalVisible(true);
      setTimeout(() => {
        setIsModalVisible(false);
      }, 1000);
    } else {
      setCart([...cart, product]);
    }
  };

  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div>
      <Modal message={modalMessage} isVisible={isModalVisible} />
      <div className="mb-4 text-right">
        <span className="text-lg font-medium fixed top-5 right-10">
          Cart: {cart.length}
        </span>
      </div>
      <div className="product-grid grid [grid-template-columns:repeat(auto-fill,_minmax(400px,_1fr))] gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
