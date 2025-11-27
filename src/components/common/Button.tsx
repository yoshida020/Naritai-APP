import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#517CA2] text-white shadow-[0_8px_20px_rgba(81,124,162,0.25)] hover:bg-[#406789]',
  secondary:
    'bg-[#007FFF] text-[#1F2937] hover:bg-[#0066CC]',
  ghost:
    'bg-white text-[#2C3E50] border border-[#2C3E50]/30 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#F5F5F5]',
  danger:
    'bg-[#EF4444] text-white shadow-[0_8px_18px_rgba(239,68,68,0.25)] hover:bg-[#DC2626]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-6 py-3 rounded-xl',
  md: 'text-base px-8 py-3.5 rounded-2xl',
  lg: 'text-lg px-10 py-4 rounded-[30px]',
};

const cn = (...classes: Array<string | false | undefined>) =>
  twMerge(classes.filter(Boolean).join(' '));

const Spinner = () => (
  <span
    className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    aria-hidden="true"
  />
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth,
    loading,
    startIcon,
    endIcon,
    className,
    disabled,
    type = 'button',
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#517CA2] disabled:opacity-60 disabled:cursor-not-allowed gap-2',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        className
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && <Spinner />}
      {!loading && startIcon}
      <span className="inline-flex items-center">{children}</span>
      {endIcon}
    </button>
  );
});

export default Button;

