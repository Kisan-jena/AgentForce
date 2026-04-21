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
      className={cn('bg-neutral-100 dark:bg-neutral-800 rounded-lg', className)}
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
    <div className={cn('min-h-40 md:min-h-80', className)}>{children}</div>
  );
};
