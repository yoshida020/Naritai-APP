'use client';

import { useState } from 'react';
import { SectionTitle } from '../SectionTitle';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#F9FCFF] relative overflow-hidden">
      <div className="absolute top-20 left-4 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2]/5 rounded-full blur-3xl">      </div>
      
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="mb-16">
          <SectionTitle enTitle="Contact" jaTitle="お問い合わせ" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">お問い合わせ方法</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-[#E6EAEE]">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#517CA2] to-[#5AB1E0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-1">メール</h4>
                    <a href="mailto:info@naritai.co.jp" className="text-[#517CA2] hover:text-[#5AB1E0] transition-colors">
                      info@naritai.co.jp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-[#E6EAEE]">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#517CA2] to-[#5AB1E0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-1">電話</h4>
                    <a href="tel:03-XXXX-XXXX" className="text-[#517CA2] hover:text-[#5AB1E0] transition-colors">
                      03-XXXX-XXXX
                    </a>
                    <p className="text-sm text-[#919CB7] mt-1">平日 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-[#E6EAEE]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-[#E6EAEE] rounded-lg focus:outline-none focus:border-[#517CA2] focus:ring-2 focus:ring-[#517CA2]/20 transition-all"
                  placeholder="山田 太郎"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-[#E6EAEE] rounded-lg focus:outline-none focus:border-[#517CA2] focus:ring-2 focus:ring-[#517CA2]/20 transition-all"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 border-2 border-[#E6EAEE] rounded-lg focus:outline-none focus:border-[#517CA2] focus:ring-2 focus:ring-[#517CA2]/20 transition-all resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#517CA2] to-[#5AB1E0] text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

