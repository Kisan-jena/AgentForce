import { cn } from '../../lib/utils';

const SubHeading = ({
  children,
  className,
  as = 'p',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'p';
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'text-base max-w-xl leading-normal md:text-lg font-inter text-neutral-500 dark:text-neutral-600',
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SubHeading;
