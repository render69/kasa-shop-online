
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, isInCart } = useCart();
  const alreadyInCart = isInCart(product.id);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-48 bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain p-4"
          />
          {product.bestSeller && (
            <div className="absolute top-2 left-2 bg-pos-orange text-white text-xs px-2 py-1 rounded-md font-medium">
              Хит продаж
            </div>
          )}
          {product.new && (
            <div className="absolute top-2 right-2 bg-pos-blue-light text-white text-xs px-2 py-1 rounded-md font-medium">
              Новинка
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{product.price.toFixed(2)} ₽</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button 
          onClick={(e) => {
            e.preventDefault();
            if (!alreadyInCart) {
              addItem(product);
            }
          }}
          className={alreadyInCart ? "w-full bg-green-600 hover:bg-green-700" : "w-full bg-pos-blue hover:bg-pos-blue-light"}
          disabled={alreadyInCart}
        >
          {alreadyInCart ? (
            <>
              <Check className="mr-2 h-4 w-4" /> В корзине
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> В корзину
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
