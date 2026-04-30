import { cn } from '@/lib/utils';
import {
  IconCircleDashedCheck,
  IconCircleCheckFilled,
  IconRipple
} from '@tabler/icons-react';
import React from 'react';

export const SkeletonTwo = () => {
  return (
    <div
      className={cn(
        'max-w-[85%] h-full my-auto bg-neutral-100 mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700',
        '[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10'
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
          <div className="flex items-center justify-between border-b px-4 py-2 ">
            <div className="flex items-center gap-2">
              <IconCircleCheckFilled className="size-4 text-green-500" />
              <p className="text-neutral-500 font-medium text-sm">
                Fetching Data
              </p>
            </div>
            <div className="flex items-center gap-1 text-neutral-400">
              <IconRipple className="size-3" />
              <p className="text-[10px] font-bold">10s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
}
