import { cn } from '@/lib/utils';
import {
  IconCircleCheckFilled,
  IconCircleDashedCheck,
  IconRipple,
} from '@tabler/icons-react';
import React from 'react';

export const SkeletonTwo = () => {
  const steps: {
    label: string;
    time: string;
    statusColor: 'green' | 'orange';
  }[] = [
    { label: 'Fetching Data', time: '10s', statusColor: 'green' },
    { label: 'Processing Data', time: '8s', statusColor: 'green' },
    { label: 'Performing Action', time: '6s', statusColor: 'green' },
    { label: 'Waiting for Approval', time: '4s', statusColor: 'orange' },
    { label: 'Success', time: '1s', statusColor: 'green' },
  ];
  return (
    <div
      className={cn(
        'max-w-[85%] h-full my-auto bg-neutral-100 mx-auto w-full p-3 rounded-2xl border border-neutral-300 dark:border-neutral-700',
        '[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10',
        'perspective-distant -rotate-z-25 rotate-y-10 rotate-x-30 ',
        ' translate-x-10 translate-y-0 mask-radial-from-30% mask-b-from-50%'
      )}
    >
      <div className="flex bg-amber-00 gap-3 items-center">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-normal text-black dark:text-white">
          Campaign Planner
        </p>
      </div>

      <div className="h-65  relative  flex-1 mt-4 border bg-neutral-200 border-neutral-200 rounded-2xl">
        <Pattern />
        <div className="absolute inset-0 bg-white h-full translate-x-2 rounded-xl hover:translate-x-0 hover:translate-y-0 -translate-y-1 transition-all duration-500 bg ">
          {steps.map((step, index) => (
            <StatusBar
              key={index}
              label={step.label}
              time={step.time}
              statusColor={step.statusColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};

type StatusBarProps = {
  label: string;
  time?: string;
  statusColor?: 'orange' | 'green';
};

const StatusBar: React.FC<StatusBarProps> = ({
  label,
  time,
  statusColor = 'text-green-500',
}) => {
  return (
    <div className="relative px-4 py-2">
      {/* Content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              
            )}
          >
            <IconCircleCheckFilled
              className={cn(
                'size-5.5',
                statusColor === 'orange' && 'text-yellow-500',
                statusColor === 'green' && 'text-green-500'
              )}
            />
          </div>

          <p className="text-neutral-500 font-medium text-sm">{label}</p>
        </div>

        <div className="flex items-center gap-1 text-neutral-400">
          <IconRipple className="size-3 text-neutral-500" />
          <p className="text-[10px] font-bold text-neutral-600">{time}</p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[1.5px] 
                  bg-linear-to-r from-white-100 via-neutral-200 to-white-100"
      />
    </div>
  );
};
