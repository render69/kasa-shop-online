
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, ArrowRight, AlertCircle, Truck, QrCode, Phone, Mail } from 'lucide-react';

const Cart = () => {
  const { items, removeItem, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showPaymentQR, setShowPaymentQR] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    phone: '',
    email: '',
  });
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  
  const generateQrCode = () => {
    // Генерация фейкового QR-кода для оплаты
    const randomQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=payment_id_${Math.random().toString(36).substring(2, 15)}_amount_${getCartTotal().toFixed(2)}`;
    setQrCodeUrl(randomQR);
  };
  
  const handleCheckout = () => {
    // Проверяем, заполнены ли контактные данные
    if (!contactInfo.phone || !contactInfo.email) {
      alert("Пожалуйста, заполните контактную информацию");
      return;
    }
    
    setIsCheckingOut(true);
    generateQrCode();
    
    setTimeout(() => {
      setIsCheckingOut(false);
      setShowPaymentQR(true);
    }, 1500);
  };

  const handlePaymentComplete = () => {
    clearCart();
    setShowPaymentQR(false);
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время.");
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Ваша корзина пуста</h1>
        <p className="mb-8 text-gray-600">Добавьте товары в корзину, и они появятся здесь.</p>
        <Link to="/products">
          <Button>Продолжить покупки</Button>
        </Link>
      </div>
    );
  }

  if (showPaymentQR) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-6">Оплата заказа</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Отсканируйте QR-код для оплаты</h2>
          <p className="mb-4 text-gray-600">Сумма к оплате: <span className="font-bold">{getCartTotal().toFixed(2)} ₽</span></p>
          
          <div className="mb-6">
            <img 
              src={qrCodeUrl} 
              alt="QR-код для оплаты" 
              className="mx-auto border p-2 rounded"
            />
          </div>
          
          <div className="space-y-2 mb-6 text-left">
            <p className="text-sm text-gray-600">Контактная информация:</p>
            <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> {contactInfo.phone}</p>
            <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> {contactInfo.email}</p>
          </div>
          
          <Button 
            onClick={handlePaymentComplete}
            className="w-full bg-green-600 hover:bg-green-700 mb-3"
          >
            Подтвердить оплату
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setShowPaymentQR(false)}
            className="w-full"
          >
            Вернуться к заказу
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ваша Корзина</h1>
      
      {isCheckingOut ? (
        <div className="text-center py-16">
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold mb-4">Обработка заказа...</h2>
            <p className="text-gray-600 mb-6">Пожалуйста, подождите, пока мы обрабатываем ваш платеж.</p>
            <div className="w-16 h-16 border-4 border-pos-blue-light rounded-full border-t-transparent animate-spin mx-auto"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-100 text-sm font-medium">
                <div className="col-span-6">Товар</div>
                <div className="col-span-2 text-center">Цена</div>
                <div className="col-span-2 text-center">Количество</div>
                <div className="col-span-2 text-right">Итого</div>
              </div>
              
              {items.map((item) => (
                <div key={item.product.id} className="border-t first:border-t-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-6 flex gap-4">
                      <Link to={`/product/${item.product.id}`} className="shrink-0">
                        <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                          <img 
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                      </Link>
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium hover:text-pos-blue-light">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1 hidden md:block">
                          {item.product.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:block">
                      <span className="md:hidden text-gray-500">Цена:</span>
                      <span>{item.product.price.toFixed(2)} ₽</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:block">
                      <span className="md:hidden text-gray-500">Количество:</span>
                      <div className="inline-flex border rounded">
                        <button 
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Total + Remove */}
                    <div className="md:col-span-2 md:text-right flex justify-between md:block">
                      <span className="md:hidden text-gray-500">Итого:</span>
                      <div className="flex items-center justify-end gap-4">
                        <span className="font-medium">{(item.product.price * item.quantity).toFixed(2)} ₽</span>
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Cart Actions */}
              <div className="p-4 bg-gray-50 border-t flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                >
                  Очистить корзину
                </Button>
                <Link to="/products">
                  <Button variant="outline">
                    Продолжить покупки
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Оформление заказа</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Номер телефона *
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border rounded"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Подытог</span>
                  <span>{getCartTotal().toFixed(2)} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка</span>
                  <span>Рассчитывается при оформлении</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Итого</span>
                  <span>{getCartTotal().toFixed(2)} ₽</span>
                </div>
              </div>
              
              <Button 
                className="w-full mb-4"
                onClick={handleCheckout}
              >
                Оплатить <QrCode className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="text-xs text-gray-500 space-y-2">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-2" />
                  <span>Бесплатная доставка при заказе от 10 000 ₽</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <span>Нужна помощь? Свяжитесь с нами: +7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
