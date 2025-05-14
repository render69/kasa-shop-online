
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getCategoryName } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Check, Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem, isInCart, updateQuantity, items } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const cartItem = product ? items.find(item => item.product.id === product.id) : undefined;
  const alreadyInCart = product ? isInCart(product.id) : false;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reset quantity when product changes
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
        <p className="mb-8">Мы не смогли найти товар, который вы искали.</p>
        <Link to="/products" className="text-pos-blue-light hover:underline">
          Посмотреть все товары
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  const categoryName = getCategoryName(product.category);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm">
        <ol className="flex space-x-2">
          <li>
            <Link to="/" className="text-gray-500 hover:text-pos-blue">Главная</Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to="/products" className="text-gray-500 hover:text-pos-blue">Товары</Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link 
              to={`/category/${product.category}`} 
              className="text-gray-500 hover:text-pos-blue"
            >
              {categoryName}
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white p-8 rounded-lg border flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-w-full max-h-96 object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          {product.bestSeller && (
            <span className="bg-pos-orange text-white text-xs px-2 py-1 rounded-md font-medium mb-4 inline-block">
              Хит продаж
            </span>
          )}
          {product.new && (
            <span className="bg-pos-blue-light text-white text-xs px-2 py-1 rounded-md font-medium mb-4 ml-2 inline-block">
              Новинка
            </span>
          )}

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <h2 className="text-2xl font-bold mb-4 text-pos-blue">{product.price.toLocaleString()} ₽</h2>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Stock Status */}
          <div className="mb-6">
            <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'В наличии' : 'Нет в наличии'}
            </span>
          </div>
          
          {/* Quantity Selector */}
          {!alreadyInCart && product.inStock && (
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Количество:</span>
              <div className="flex items-center border rounded">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-1 border-x">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
          
          {/* Cart Status and Actions */}
          {alreadyInCart ? (
            <div className="mb-6">
              <p className="flex items-center text-green-600 mb-2">
                <Check className="mr-2 h-5 w-5" />
                <span>Добавлено в корзину</span>
              </p>
              <div className="flex gap-4">
                <div className="flex items-center border rounded">
                  <button 
                    onClick={() => cartItem && updateQuantity(cartItem.product.id, cartItem.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                    disabled={cartItem?.quantity === 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-1 border-x">{cartItem?.quantity || 0}</span>
                  <button 
                    onClick={() => cartItem && updateQuantity(cartItem.product.id, cartItem.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Link to="/cart">
                  <Button>Перейти в корзину</Button>
                </Link>
              </div>
            </div>
          ) : (
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="mb-6"
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Добавить в корзину
            </Button>
          )}

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold mb-3">Характеристики</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
