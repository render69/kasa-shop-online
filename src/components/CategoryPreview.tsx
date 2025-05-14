
import { Link } from 'react-router-dom';
import { ProductCategory } from '../types';
import { getCategoryName } from '../data/products';
import { useState } from 'react';

interface CategoryPreviewProps {
  category: ProductCategory;
  productCount: number;
  image?: string;
}

const CategoryPreview = ({ category, productCount, image }: CategoryPreviewProps) => {
  const categoryName = getCategoryName(category);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link to={`/category/${category}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border group">
        <div className="h-40 bg-gray-100 flex items-center justify-center p-4 relative">
          <img 
            src={imageError ? "/placeholder.svg" : (image || "/placeholder.svg")} 
            alt={categoryName} 
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
            onError={handleImageError}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{categoryName}</h3>
          <p className="text-sm text-gray-500">{productCount} товаров</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryPreview;
