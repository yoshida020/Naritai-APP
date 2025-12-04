'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Toast from '@/components/common/Toast';
import ConfirmModal from '@/components/common/ConfirmModal';

// EmailJS設定
const EMAILJS_SERVICE_ID = 'service_3xnlysc';
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_9za97q5';
const EMAILJS_PUBLIC_KEY = '2n0_fs4DOkbU0obbZ';

// バリデーションスキーマ
const contactSchema = z.object({
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().min(1, 'メールアドレスを入力してください').email('正しいメールアドレスを入力してください'),
  message: z.string().min(1, 'お問い合わせ内容を入力してください').min(10, 'お問い合わせ内容は10文字以上で入力してください'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    if (!formData) return;

    setIsSubmitting(true);

    try {
      // 管理者向けメール送信
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        {
          company_name: formData.companyName || '-',
          job_title: formData.jobTitle || '-',
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 送信成功
      setIsModalOpen(false);
      reset();

      // sessionStorageに成功メッセージを保存してTOP画面に遷移
      sessionStorage.setItem('formSuccessMessage', 'お問い合わせを送信しました');
      router.push('/');

    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsModalOpen(false);
      setToast({
        message: '送信に失敗しました。もう一度お試しください。',
        type: 'error',
        isVisible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  // モーダル用のフィールドを生成
  const getModalFields = () => {
    if (!formData) return [];
    return [
      { label: '会社名', value: formData.companyName || '-' },
      { label: '職種', value: formData.jobTitle || '-' },
      { label: '氏名', value: formData.name },
      { label: 'メールアドレス', value: formData.email },
      { label: 'お問い合わせ内容', value: formData.message, isMultiline: true },
    ];
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#F9FCFF] pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-4">
          {/* ページタイトル */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              お問い合わせ
            </h1>
            <p className="text-[#919CB7] text-sm md:text-base">
              Contact
            </p>
          </div>

          {/* 説明文 */}
          <div className="bg-[#F5F5F5] rounded-lg p-6 mb-8">
            <p className="text-center text-[#2C3E50] text-sm md:text-base leading-relaxed">
              ご質問やご相談、採用に関するお問い合わせなど、下記フォームよりお気軽にご連絡ください。<br className="hidden md:block" />
              お問い合わせいただいた内容に対する返信は、通常1〜2営業日以内に対応させていただきます。
            </p>
          </div>

          {/* フォームコンテンツ */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 会社名 */}
            <div>
              <label className="block text-[#2C3E50] font-medium mb-2">
                会社名
              </label>
              <input
                type="text"
                {...register('companyName')}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517CA2] transition-all ${
                  errors.companyName ? 'border-red-500' : 'border-[#D4DDEB]'
                }`}
                placeholder="例：株式会社Naritai"
              />
              {errors.companyName && (
                <p className="mt-1 text-red-500 text-sm">{errors.companyName.message}</p>
              )}
            </div>

            {/* 職種 */}
            <div>
              <label className="block text-[#2C3E50] font-medium mb-2">
                職種
              </label>
              <input
                type="text"
                {...register('jobTitle')}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517CA2] transition-all ${
                  errors.jobTitle ? 'border-red-500' : 'border-[#D4DDEB]'
                }`}
                placeholder="例：エンジニア"
              />
              {errors.jobTitle && (
                <p className="mt-1 text-red-500 text-sm">{errors.jobTitle.message}</p>
              )}
            </div>

            {/* 氏名 */}
            <div>
              <label className="block text-[#2C3E50] font-medium mb-2">
                氏名 <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="text"
                {...register('name')}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517CA2] transition-all ${
                  errors.name ? 'border-red-500' : 'border-[#D4DDEB]'
                }`}
                placeholder="例：山田 太郎"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-[#2C3E50] font-medium mb-2">
                メールアドレス <span className="text-red-500 text-sm">*</span>
              </label>
              <input
                type="email"
                {...register('email')}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517CA2] transition-all ${
                  errors.email ? 'border-red-500' : 'border-[#D4DDEB]'
                }`}
                placeholder="例：example@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label className="block text-[#2C3E50] font-medium mb-2">
                お問い合わせ内容 <span className="text-red-500 text-sm">*</span>
              </label>
              <textarea
                {...register('message')}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517CA2] transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-[#D4DDEB]'
                }`}
                placeholder="お問い合わせ内容をご記入ください"
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* 送信ボタン */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#517CA2] hover:bg-[#3d5d7a] text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />

      {/* 確認モーダル */}
      <ConfirmModal
        isOpen={isModalOpen && formData !== null}
        fields={getModalFields()}
        isSubmitting={isSubmitting}
        onConfirm={handleConfirm}
        onCancel={handleCloseModal}
      />

      {/* トースト通知 */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </>
  );
}
