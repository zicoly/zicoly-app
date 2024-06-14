import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../API/ProductContext';

const Details = () => {
  const { products, loading, error, viewCounts } = useContext(ProductsContext);
  const { id } = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const viewCount = viewCounts[product.id] || 0;

  return (
    <div className="flex justify-center mt-5">
      <div className="flex border border-gray-300 p-6 rounded-lg shadow-md bg-white max-w-4xl h-[650px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-3/4 h-[600px] object-cover rounded mr-6"
        />
        <div className='my-auto'>
          <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
          <p className="text-gray-800 mb-2">Price: ${product.price}</p>
          <p className="text-gray-600 mb-2">
            Description: {product.description}
          </p>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-gray-600">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="text-gray-600 mt-2">Views: {viewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
