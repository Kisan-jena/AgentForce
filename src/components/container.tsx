import React from 'react'
import { cn } from '../lib/utils';

const Container = ({ className, children }: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("max-w-7xl bg-blue-00 mx-auto",className)}>
      {children}
    </div>
  )
}

export default Container
