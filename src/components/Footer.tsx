
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CreditCard, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pos-blue text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">ООО «ККМ.Центр»</h3>
            <p className="text-gray-300 mb-4">
              Ведущий поставщик кассового и торгового оборудования с 2010 года. Предлагаем полный спектр услуг для автоматизации вашего бизнеса.
            </p>
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-4 w-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-4 w-4" />
              <span>info@kkm-center.ru</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="h-4 w-4" />
              <span>г. Липецк, ул. Примерная, д. 123</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4" />
              <span>Пн-Пт: 9:00 - 18:00</span>
            </div>
          </div>

          {/* Column 2 - Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Категории товаров</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/pos-terminals" className="text-gray-300 hover:text-white transition-colors">
                  POS-терминалы
                </Link>
              </li>
              <li>
                <Link to="/category/receipt-printers" className="text-gray-300 hover:text-white transition-colors">
                  Принтеры чеков
                </Link>
              </li>
              <li>
                <Link to="/category/barcode-scanners" className="text-gray-300 hover:text-white transition-colors">
                  Сканеры штрих-кодов
                </Link>
              </li>
              <li>
                <Link to="/category/cash-drawers" className="text-gray-300 hover:text-white transition-colors">
                  Денежные ящики
                </Link>
              </li>
              <li>
                <Link to="/category/customer-displays" className="text-gray-300 hover:text-white transition-colors">
                  Дисплеи покупателя
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-300 hover:text-white transition-colors">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Гарантия и возврат
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Сервисное обслуживание
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Наши преимущества</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <CreditCard className="h-5 w-5 text-pos-orange" />
                <div>
                  <span className="font-medium block">Удобная оплата</span>
                  <span className="text-gray-300 text-sm">Наличные, безналичный расчет, онлайн-оплата</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-pos-orange" />
                <div>
                  <span className="font-medium block">Официальная гарантия</span>
                  <span className="text-gray-300 text-sm">Гарантия от производителя на все оборудование</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-pos-orange" />
                <div>
                  <span className="font-medium block">Техподдержка 24/7</span>
                  <span className="text-gray-300 text-sm">Круглосуточная поддержка клиентов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-6 pb-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-3 py-1 rounded">Visa</div>
            <div className="bg-white/10 px-3 py-1 rounded">MasterCard</div>
            <div className="bg-white/10 px-3 py-1 rounded">МИР</div>
            <div className="bg-white/10 px-3 py-1 rounded">СБП</div>
            <div className="bg-white/10 px-3 py-1 rounded">Tinkoff</div>
            <div className="bg-white/10 px-3 py-1 rounded">Sber</div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-4">
          <p>© 2023 ООО «ККМ.Центр» — продажа кассового оборудования. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
