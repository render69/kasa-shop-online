
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product, ProductCategory } from '../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');

  // Filter products by category if a category is selected
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Sort the filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price-asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  // Get unique categories from the products
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  // Map category IDs to Russian names
  const categoryNames: Record<string, string> = {
    'all': 'Все',
    'pos-terminals': 'POS-терминалы',
    'receipt-printers': 'Принтеры чеков',
    'barcode-scanners': 'Сканеры штрих-кодов',
    'cash-drawers': 'Денежные ящики',
    'customer-displays': 'Дисплеи покупателя',
    'accessories': 'Аксессуары',
  };

  return (
    <div>
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}

      {products.length > 0 && (
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="mb-4 sm:mb-0">
            <span className="font-medium mr-2">Фильтр:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as ProductCategory | 'all')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-pos-blue text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {categoryNames[category] || category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-medium mr-2">Сортировка:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price-asc' | 'price-desc')}
              className="border rounded-md px-2 py-1 bg-white"
            >
              <option value="name">По названию</option>
              <option value="price-asc">Цена: от низкой к высокой</option>
              <option value="price-desc">Цена: от высокой к низкой</option>
            </select>
          </div>
        </div>
      )}

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900">Товары не найдены</h3>
          <p className="mt-2 text-gray-500">
            По выбранным критериям товары не найдены.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
