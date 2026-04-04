import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
  as?: 'button' | 'link';
  href?: string;
}

const Button = ({
  variant = 'primary',
  children,
  className,
  as = 'button',
  href = '',
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary:
      'text-neutral-100 bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900 py-2 px-4',
    secondary:
      'text-neutral-600 border border-transparent dark:hover:border-neutral-800 hover:border-neutral-300 dark:text-neutral-400 py-[calc(8.3px-1px)] px-[calc(16px-0.5px)]',
  };

  const baseStyles =
    'font-display text-sm font-medium cursor-pointer rounded-lg transition-all duration-300';
  const combinedClassName = cn(baseStyles, variantStyles[variant], className);

  if (as === 'link') {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
