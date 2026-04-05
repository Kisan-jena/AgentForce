'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '../lib/utils';

const LandingImage = () => {
  return (
    <div className="relative bg-amber-00 ">
      <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full perspective-distant pt-20 pl-8 lg:pl-20 md:translate-x-20">
        <motion.div
          className="perspective-[4000px]"
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
              'absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl object-cover'
            )}
            style={{
              transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)',
            }}
          />
        </motion.div>

        <motion.div
          className="perspective-[4000px] translate-x-20 -translate-y-40"
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
              'absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none object-cover pointer-events-none transform-3d'
            )}
            style={{
              transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)',
            }}
          />
        </motion.div>
      </div>
      
    </div>
  );
};

export default LandingImage;
