'use client';

import { useState, FormEvent } from 'react';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // ここでフォーム送信の処理を実装
    // 例: APIエンドポイントへのPOSTリクエスト
    try {
      // await fetch('/api/corporate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // デモ用の遅延
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full max-w-[800px] mx-auto" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 mb-6">
        <div className="flex flex-col mb-6">
          <label htmlFor="name" className="text-sm font-medium text-[#2C3E50] mb-2">
            お名前 <span className="text-[#EF4444] ml-1">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 text-base leading-normal text-[#2C3E50] bg-white border border-[#D4DDEB] rounded-lg transition-all focus:outline-none focus:border-[#517CA2] focus:shadow-[0_0_0_3px_rgba(81,124,162,0.1)] placeholder:text-[#919CB7]"
            placeholder="山田 太郎"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="email" className="text-sm font-medium text-[#2C3E50] mb-2">
            メールアドレス <span className="text-[#EF4444] ml-1">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 text-base leading-normal text-[#2C3E50] bg-white border border-[#D4DDEB] rounded-lg transition-all focus:outline-none focus:border-[#517CA2] focus:shadow-[0_0_0_3px_rgba(81,124,162,0.1)] placeholder:text-[#919CB7]"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 mb-6">
        <div className="flex flex-col mb-6">
          <label htmlFor="phone" className="text-sm font-medium text-[#2C3E50] mb-2">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-4 text-base leading-normal text-[#2C3E50] bg-white border border-[#D4DDEB] rounded-lg transition-all focus:outline-none focus:border-[#517CA2] focus:shadow-[0_0_0_3px_rgba(81,124,162,0.1)] placeholder:text-[#919CB7]"
            placeholder="090-1234-5678"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="company" className="text-sm font-medium text-[#2C3E50] mb-2">
            会社名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-4 text-base leading-normal text-[#2C3E50] bg-white border border-[#D4DDEB] rounded-lg transition-all focus:outline-none focus:border-[#517CA2] focus:shadow-[0_0_0_3px_rgba(81,124,162,0.1)] placeholder:text-[#919CB7]"
            placeholder="Naritai"
          />
        </div>
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="subject" className="text-sm font-medium text-[#2C3E50] mb-2">
          お問い合わせ種別 <span className="text-[#EF4444] ml-1">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-4 text-base leading-normal text-[#2C3E50] bg-white border border-[#D4DDEB] rounded-lg transition-all focus:outline-none focus:border-[#517CA2] focus:shadow-[0_0_0_3px_rgba(81,124,162,0.1)]"
        >
          <option value="">選択してください</option>
          <option value="service">サービスについて</option>
          <option value="partnership">パートナーシップ</option>
          <option value="recruitment">採用について</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="message" className="text-sm font-medium text-[#2C3E50] mb-2">
          お問い合わせ内容 <span className="text-[#EF4444] ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-4 text-base leading-normal text-[#2C3E50] bg-white border border-[#D4DDEB] rounded-lg transition-all resize-y min-h-[120px] font-[system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif] focus:outline-none focus:border-[#517CA2] focus:shadow-[0_0_0_3px_rgba(81,124,162,0.1)] placeholder:text-[#919CB7]"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="px-4 py-4 mb-6 bg-[rgba(34,197,94,0.1)] border border-[#22C55E] rounded-lg text-[#22C55E] text-sm text-center">
          お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="px-4 py-4 mb-6 bg-[rgba(239,68,68,0.1)] border border-[#EF4444] rounded-lg text-[#EF4444] text-sm text-center">
          送信に失敗しました。しばらく時間をおいて再度お試しください。
        </div>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="md"
          loading={isSubmitting}
          disabled={isSubmitting}
          fullWidth
        >
          送信する
        </Button>
      </div>
    </form>
  );
}


