import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryPreview from '../components/CategoryPreview';
import { Button } from '@/components/ui/button';
import { getProductsByCategory } from '../data/products';

const Index = () => {
  // Get counts for each category
  const categories = [
    { 
      category: "pos-terminals", 
      name: "POS Terminals", 
      image: "https://images.unsplash.com/photo-1606143957232-96853189ee37?q=80&w=500&auto=format&fit=crop" 
    },
    { 
      category: "receipt-printers", 
      name: "Receipt Printers", 
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=500&auto=format&fit=crop" 
    },
    { 
      category: "barcode-scanners", 
      name: "Barcode Scanners", 
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=500&auto=format&fit=crop" 
    },
    { 
      category: "cash-drawers", 
      name: "Cash Drawers", 
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=500&auto=format&fit=crop" 
    },
    { 
      category: "customer-displays", 
      name: "Customer Displays", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop" 
    },
    { 
      category: "accessories", 
      name: "Accessories", 
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=500&auto=format&fit=crop" 
    },
  ];

  const categoryWithCounts = categories.map(cat => ({
    ...cat,
    productCount: getProductsByCategory(cat.category).length,
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pos-blue to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Комплексные POS-решения для Вашего бизнеса
              </h1>
              <p className="text-lg mb-8 text-gray-200">
              Высококачественное торговое оборудование для оптимизации вашей работы и улучшения качества обслуживания клиентов.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-pos-orange hover:bg-amber-600 text-white">
                  <Link to="/products">Покупайте все товары в магазине</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact" className='text-black'>Свяжитесь с отделом продаж</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.magilev.by%2FgUXAAAAAAADJ7mE44tA%2Fpage.jpeg&f=1&nofb=1&ipt=1184c2d3148e120bcdb54d36d2cf56e4ebfdfaef0c06946cb8808e09357c2c60" 
                alt="POS System" 
                className="rounded-lg shadow-lg mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Categories Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Магазин по категориям</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryWithCounts.map((cat) => (
              <CategoryPreview 
                key={cat.category} 
                category={cat.category as any} 
                productCount={cat.productCount} 
                image={cat.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему Вы выбрали именно нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pos-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Качественные продукты</h3>
              <p className="text-gray-600">Мы предлагаем только высококачественное кассовое оборудование, рассчитанное на длительный срок службы в сложных бизнес-условиях.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pos-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Экспертная поддержка</h3>
              <p className="text-gray-600">Наша команда экспертов всегда готова оказать техническую поддержку и ответить на ваши вопросы.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pos-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Мы понимаем, что время - деньги, поэтому предлагаем варианты ускоренной доставки, чтобы быстро получить ваше оборудование.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pos-blue py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Готовы обновить свою кассовую систему?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Ознакомьтесь с нашим ассортиментом высококачественного POS-оборудования и найдите идеальное решение для вашего бизнеса.
          </p>
          <Button size="lg" className="bg-pos-orange hover:bg-amber-600 text-white">
            <Link to="/products">Купить сейчас</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
