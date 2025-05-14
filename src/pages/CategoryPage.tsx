
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { getProductsByCategory, getCategoryName } from '../data/products';
import { ProductCategory } from '../types';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = getProductsByCategory(category as ProductCategory);
  const categoryName = getCategoryName(category || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
