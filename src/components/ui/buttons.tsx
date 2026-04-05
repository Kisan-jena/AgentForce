import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'border' | 'outline';
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
      'text-neutral-100 bg-neutral-900 hover:shadow-brand hover:text-white hover:bg-neutral-900/90 dark:bg-neutral-200 dark:text-neutral-900 py-2 px-4',
    border:
      'text-neutral-600 border border-transparent dark:hover:border-neutral-800 hover:border-neutral-300 dark:text-neutral-400 py-[calc(8.7px-1px)] px-[calc(16px-0.5px)]',
    outline:
      'bg-neutral-0 text-neutral-900 hover:bg-neutral-100/90 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800/80 py-2 px-4 duration-100 ',
  };

  const baseStyles =
    'font-display text-sm font-medium cursor-pointer rounded-md transition-all duration-300';
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
