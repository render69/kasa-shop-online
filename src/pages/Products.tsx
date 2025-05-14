
import { useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Все товары</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default Products;
