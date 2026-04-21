'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const LogoCloud = () => {
  const logos = [
    { title: 'Open AI', src: '/openai.png' },
    { title: 'Hello Patient', src: '/hello-patient.png' },
    { title: 'Granola', src: '/granola.png' },
    { title: 'Character AI', src: '/characterai.png' },
    { title: 'Oracle', src: '/oracle.png' },
    { title: 'Portola', src: '/portola.png' },
  ];

  return (
    <div className="mt-28 bg-amber-00">
      <h2 className="text-neutral-700 dark:text-neutral-400 font-medium text-lg text-center max-w-xl mx-auto">
        Trusted by modern operators across industries. <br />{' '}
        <span className="text-neutral-500">
          {' '}
          From pilot to scale without chaos.
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl bg-amber-00 pt-10 mx-auto">
        {logos.map((logo, index) => (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              filter: 'blur(10px)',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 0.5,
              ease:"easeOut",
              delay: index * 0.1,
            }}
            key={index}
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={100}
              height={100}
              className="size-20 object-contain mx-auto bg-amber-00"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
