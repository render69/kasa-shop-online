
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { Mail, Phone, Map, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено', {
      description: 'Мы свяжемся с вами в ближайшее время.'
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Свяжитесь с нами</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full flex items-center justify-center">
                <Send className="mr-2 h-4 w-4" />
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Контактная информация</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-pos-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Телефоны</p>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (800) 123-45-67 (бесплатно по России)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-pos-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@kkm-center.ru</p>
                  <p className="text-gray-600">support@kkm-center.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Map className="h-5 w-5 text-pos-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-gray-600">г. Липецк, ул. Примерная, д. 123, офис 456</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-pos-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Режим работы</p>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Как нас найти</h2>
            <div className="aspect-w-16 aspect-h-9">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347104631316!2d37.618651315594224!3d55.75639998055638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1624471479695!5m2!1sru!2sru" 
                className="w-full h-64 rounded border-0" 
                loading="lazy"
                title="Карта"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
