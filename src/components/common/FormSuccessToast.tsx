'use client';

import { useEffect, useState } from 'react';
import Toast from './Toast';

/**
 * sessionStorageから送信成功状態を読み取り、トーストを表示するコンポーネント
 * TOPページに配置して、お問い合わせ・資料請求フォームからのリダイレクト後にトーストを表示
 */
export default function FormSuccessToast() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  useEffect(() => {
    // sessionStorageから成功メッセージを取得
    const successMessage = sessionStorage.getItem('formSuccessMessage');

    if (successMessage) {
      // 取得後すぐに削除（リロード時に再表示されないように）
      sessionStorage.removeItem('formSuccessMessage');

      // トーストを表示
      setToast({
        message: successMessage,
        type: 'success',
        isVisible: true,
      });
    }
  }, []);

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <Toast
      message={toast.message}
      type={toast.type}
      isVisible={toast.isVisible}
      onClose={closeToast}
    />
  );
}
