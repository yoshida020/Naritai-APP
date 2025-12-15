'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';
import { Header, Footer, homeNavigationConfig, corporateNavigationConfig } from '@/components/common/navigation';
import Toast from '@/components/common/Toast';
import ConfirmModal from '@/components/common/ConfirmModal';

// EmailJS設定
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_USER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

// バリデーションスキーマ
const documentRequestSchema = z.object({
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().min(1, 'メールアドレスを入力してください').email('正しいメールアドレスを入力してください'),
  agreement: z.boolean().refine((val) => val === true, {
    message: '個人情報の取り扱いに同意してください',
  }),
});

type DocumentRequestFormData = z.infer<typeof documentRequestSchema>;

export default function BlankPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isFromLP = searchParams.get('from') === 'lp';
  const navigationConfig = isFromLP ? corporateNavigationConfig : homeNavigationConfig;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<DocumentRequestFormData | null>(null);
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
  } = useForm<DocumentRequestFormData>({
    resolver: zodResolver(documentRequestSchema),
    defaultValues: {
      agreement: false,
    },
  });

  const onSubmit = (data: DocumentRequestFormData) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    if (!formData) return;

    setIsSubmitting(true);

    try {
      // ユーザー向けメール送信
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_USER_TEMPLATE_ID,
        {
          company_name: formData.companyName || '-',
          job_title: formData.jobTitle || '-',
          user_name: formData.name,
          user_email: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 送信成功
      setIsModalOpen(false);
      reset();

      // sessionStorageに成功メッセージを保存してTOP画面に遷移
      sessionStorage.setItem('formSuccessMessage', '資料請求を送信しました');
      router.push(isFromLP ? '/corporate' : '/');

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
    ];
  };

  return (
    <>
      <Header config={navigationConfig} />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#F9FCFF] pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-4">
          {/* ページタイトル */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              資料請求
            </h1>
            <p className="text-[#919CB7] text-sm md:text-base">
              Document
            </p>
          </div>

          {/* 説明文 */}
          <div className="bg-[#F5F5F5] rounded-lg p-6 mb-8">
            <p className="text-center text-[#2C3E50] text-sm md:text-base leading-relaxed">
              Naritaiサービスについての資料はこちら。<br />
              ご不明点がございましたら、<br className="md:hidden" />
              お気軽にお問合せフォームまたはお電話でも対応可能です。
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
                placeholder="例：Naritai"
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

            {/* 個人情報同意チェックボックス */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('agreement')}
                  className="mt-1 w-5 h-5 rounded border-[#D4DDEB] text-[#517CA2] focus:ring-[#517CA2] cursor-pointer"
                />
                <span className="text-[#2C3E50] text-sm leading-relaxed">
                  <a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#517CA2] underline hover:text-[#3d5d7a]">個人情報の取り扱い</a>にご同意のうえ、Naritaiからのサービスに関するご案内・ご連絡を受け取ることにご承諾いただける場合は、チェックボックスにご同意ください。
                </span>
              </label>
              {errors.agreement && (
                <p className="mt-2 text-red-500 text-sm">{errors.agreement.message}</p>
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
      <Footer config={navigationConfig} />

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
