'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '../../lib/utils';

const LandingImage = () => {
  return (
    <div className="relative overflow-hiden bg-amber-0 [clip-path:inset(-200vw_-200vw_0_-200vw)]">
      <div className="absolute inset-x-0 mask-t-from-10% w-full h-full z-50"></div>
      <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full perspective-distant pt-20 pl-8 lg:pl-20 bg-amber-00 md:translate-x-20">
        <motion.div
          className="perspective-[4000px] shadow-2xl"
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/hero2.png"
            alt="AgentForce product preview"
            height={1080}
            width={1920}
            loading="eager"
            className={cn(
              'absolute inset-0 border border-gray-300 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl object-cover'
            )}
            style={{
              transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)',
            }}
          />
        </motion.div>

        <motion.div
          className="perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: 'easeOut',
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/hero.png"
            alt="AgentForce product preview"
            height={1080}
            width={1920}
            loading="eager"
            className={cn(
              'absolute inset-0 border border-gray-300 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none object-cover pointer-events-none transform-3d'
            )}
            style={{
              transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)',
            }}
          />
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-64 w-full bg-linear-to-t from-background to-transparent pointer-events-none z-50"></div>
    </div>
  );
};

export default LandingImage;
