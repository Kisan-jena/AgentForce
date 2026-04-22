import { cn } from '@/lib/utils';
import React from 'react';

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn('bg-neutral-50 dark:bg-neutral-800 rounded-lg', className)}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('px-4 md:px-8 pb-6', className)}>{children}</div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn('text-lg md:text-2xl font-bold font-display', className)}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'size-5 md:size-10 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center active:scale-[0.92] transition duration-200',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn('relative overflow-hidden h-40 md:h-80 perspective-distant ', className)}>
      {/* <div className='absolute bg-white inset-0 h-full w-full  blur-sm mask-radial-from-50%
      '/> */}
    
      {children}
    </div>
  );
};
