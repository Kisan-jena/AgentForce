import {
  IconCircleArrowUp,
  IconCircleDashedCheck,
  IconClock,
  IconRipple,
  IconUserCircle,
} from '@tabler/icons-react';
import React from 'react';
import { cn } from '../../../lib/utils';


export const SkeletonOne = () => {
  return (
    <div
      className="perspective-distant rotate-z-15 -rotate-y-20 rotate-x-30 scale-[1.2] h-full w-full -translate-x-1 -translate-y-10 mask-radial-from-30% mask-r-from-50%"
    >
      <SkeletonCard
        className="absolute bottom-20 left-4 max-w-[80%] z-10"
        icon={<IconUserCircle className="size-4" />}
        title="Risk Analysisr"
        description="Automatically segments users based on behavior and engagement metrics for targeted messaging."
        badge={<Badge text="45S" variant="warning" />}
      />
      <SkeletonCard
        className="absolute bottom-0 left-12 z-30 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge text="120S" variant="danger" />}
      />
      <SkeletonCard
        className="absolute bottom-9 left-8 z-20"
        icon={<IconCircleArrowUp className="size-4" />}
        title="Performance Tracker"
        description="Monitors real-time campaign performance and suggests data-driven optimizations to maximize ROI."
        badge={<Badge text="90" variant="success" />}
      />
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'max-w-[85%] mx-auto w-full h-fit my-auto bg-white border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl shadow-2xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 ',
        className
      )}
    >
      <div className="bg-amber-00">
        <div className="flex items-center gap-3">
          {icon}
          <p className="text-sm font-normal text-black dark:text-white">
            {title}
          </p>
          {badge}
        </div>
        <p className="text-neutral-500 dark:text-neutral-400  font-thin text-sm mt-3">
          {description}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-2">
          <Tag Text="Goggle Ads" />
          <Tag Text="SaaS" />
          <Tag Text="Content" />
        </div>
      </div>
    </div>
  );
};

const Tag = ({ Text }: { Text: string }) => {
  return (
    <div className="px-2 py-1 rounded-sm bg-neutral-200 flex items-center dark:bg-neutral-600 text-xs">
      {Text}
    </div>
  );
};

const Badge = ({
  variant,
  className,
  text,
}: {
  variant: 'danger' | 'success' | 'warning';
  className?: string;
  text: string;
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-1 w-fit px-1 py-0.5 rounded-full border',
        variant === 'danger' && 'bg-red-300/10  border-red-300 text-red-500',
        variant === 'warning' &&
          'bg-yellow-300/10 border-yellow-300 text-yellow-500',
        variant === 'success' &&
          'bg-green-300/10 border-green-300 text-green-500',
        className
      )}
    >
      <IconClock className={cn('size-3')} />
      <IconRipple className="size-2" />
      <p className="text-xs font-semibold">{text}</p>
    </div>
  );
};
