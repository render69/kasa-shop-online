
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

const Header = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { name: "POS-терминалы", path: "/category/pos-terminals" },
    { name: "Принтеры чеков", path: "/category/receipt-printers" },
    { name: "Сканеры штрих-кодов", path: "/category/barcode-scanners" },
    { name: "Денежные ящики", path: "/category/cash-drawers" },
    { name: "Дисплеи покупателя", path: "/category/customer-displays" },
    { name: "Аксессуары", path: "/category/accessories" },
  ];

  return (
    <header className="bg-pos-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tight">ООО «ККМ.Центр»</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
            <Link to="/products" className="hover:text-accent transition-colors">Все товары</Link>
            <Link to="/about" className="hover:text-accent transition-colors">О нас</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="bg-gray-800 text-white px-4 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-accent w-full"
                />
                <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-2 px-4 bg-gray-800">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Поиск..."
              className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-accent w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="py-2 hover:text-accent" onClick={toggleMenu}>Главная</Link>
            <Link to="/products" className="py-2 hover:text-accent" onClick={toggleMenu}>Все товары</Link>
            <div className="py-2">
              <p className="mb-1 font-medium">Категории</p>
              <div className="ml-4 flex flex-col space-y-1">
                {categories.map((category) => (
                  <Link 
                    key={category.path} 
                    to={category.path} 
                    className="py-1 text-sm hover:text-accent"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="py-2 hover:text-accent" onClick={toggleMenu}>О нас</Link>
            <Link to="/contact" className="py-2 hover:text-accent" onClick={toggleMenu}>Контакты</Link>
          </div>
        </div>
      )}
      
      {/* Categories Navigation - Desktop Only */}
      <div className="hidden md:block bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            <div className="flex space-x-6">
              {categories.map((category) => (
                <Link 
                  key={category.path} 
                  to={category.path} 
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
