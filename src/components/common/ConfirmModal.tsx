'use client';

interface ConfirmModalField {
  label: string;
  value: string;
  isMultiline?: boolean;
}

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  fields: ConfirmModalField[];
  isSubmitting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  submittingText?: string;
}

export default function ConfirmModal({
  isOpen,
  title = '送信内容の確認',
  description = '以下の内容で送信します。\nよろしいですか？',
  fields,
  isSubmitting,
  onConfirm,
  onCancel,
  confirmText = '送信する',
  cancelText = 'キャンセル',
  submittingText = '送信中...',
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onCancel}
      />

      {/* モーダルコンテンツ */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[75vh] flex flex-col">
        {/* スクロール可能なコンテンツ部分 */}
        <div className="overflow-y-auto p-6 md:p-8 pb-0 scrollbar-hide">
          <h3 className="text-xl font-bold text-[#2C3E50] text-center mb-6">
            {title}
          </h3>

          <p className="text-center text-[#919CB7] text-sm mb-6 whitespace-pre-line">
            {description}
          </p>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={index}
                className={index < fields.length - 1 ? 'border-b border-[#D4DDEB] pb-3' : 'pb-3'}
              >
                <p className="text-[#919CB7] text-xs mb-1">{field.label}</p>
                <p
                  className={`text-[#2C3E50] text-sm font-medium break-words ${
                    field.isMultiline ? 'whitespace-pre-wrap' : ''
                  }`}
                >
                  {field.value || '-'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 固定ボタン部分 */}
        <div className="sticky bottom-0 bg-white p-6 md:p-8 pt-4 border-t border-[#D4DDEB] rounded-b-2xl flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="flex-1 bg-white border-2 border-[#517CA2] text-[#517CA2] font-bold py-3 rounded-full transition-all duration-300 hover:bg-gray-50 disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isSubmitting}
            className="flex-1 bg-[#517CA2] hover:bg-[#3d5d7a] text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {submittingText}
              </>
            ) : (
              confirmText
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
