
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">О компании ООО «ККМ.Центр»</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Ваш надежный партнер в сфере кассового оборудования</h2>
        <p className="text-gray-700 mb-6">
          ООО «ККМ.Центр» — ведущий поставщик кассового и торгового оборудования с более чем 10-летним опытом работы на российском рынке. 
          Мы предлагаем полный спектр услуг: от продажи и установки до обслуживания и ремонта кассового оборудования любой сложности.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">Наши преимущества</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Официальный партнер ведущих производителей</li>
              <li>Собственный сервисный центр</li>
              <li>Быстрая доставка по всей России</li>
              <li>Гарантия на всю продукцию</li>
              <li>Техническая поддержка 24/7</li>
              <li>Индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Мы предлагаем</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>POS-терминалы и системы</li>
              <li>Фискальные регистраторы и кассы</li>
              <li>Принтеры чеков и сканеры штрих-кодов</li>
              <li>Денежные ящики и весовое оборудование</li>
              <li>Программное обеспечение для торговли</li>
              <li>Услуги по регистрации ККТ в ФНС</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
        <p className="text-gray-700 mb-4">
          Обеспечивать бизнес современным и надежным кассовым оборудованием, которое помогает нашим клиентам повышать эффективность работы и соответствовать требованиям законодательства.
        </p>
        <p className="text-gray-700">
          Мы стремимся быть не просто поставщиком оборудования, а надежным партнером, который помогает решать задачи автоматизации бизнес-процессов.
        </p>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Клиенты и партнеры</h2>
        <p className="text-gray-700 mb-6">
          За годы работы нам доверились тысячи клиентов: от небольших магазинов до крупных торговых сетей, ресторанов, кафе и сервисных компаний.
        </p>
      </div>
    </div>
  );
};

export default About;
