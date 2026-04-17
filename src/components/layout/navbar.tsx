'use client';

import { IconLayoutSidebar, IconX } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../../icons-logos/logo-agen-force';
import Container from '../container';
import Button from '../ui/buttons';

const navLinkks = [
  { name: 'Features', href: '/' },
  { name: 'Product', href: '/' },
  { name: 'Socials', href: '/' },
  { name: 'Pricing', href: '/' },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 font-display">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="flex justify-between py-2 px-4 md:hidden relative ">
      <Logo />
      <button onClick={() => setOpen(!Open)}>
        <IconLayoutSidebar className="text-neutral-900 size-5" />
      </button>

      {Open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backdropFilter: 'blur(15px)',
            background: 'transparent',
          }}
          exit={{
            opacity: 0,
            backdropFilter: 'blur(0px)',
          }}
          transition={{
            duration: 0.2,
          }}
          className="fixed inset-0 bg-white dark:bg-neutral-950 h-full w-full px-4 py-2 z-50 flex flex-col"
          onClick={() => setOpen(false)}
        >
          <div className="flex justify-between">
            <Logo />
            <button
              className="absolute right-2 top-2"
              onClick={() => setOpen(false)}
            >
              <IconX />
            </button>
          </div>
          <div className="flex flex-col my-10 gap-6 flex-1 ">
            {navLinkks.map((link, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                key={index + link.name}
              >
                <Link
                  key={index}
                  href={''}
                  className="text-xl text-neutral-500  dark:text-neutral-400 font-medium font-display"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex justify-end items-center gap-2 pb-4"
            initial={{
              opacity: 0,
              x: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay:1,
            }}
            
          >
            <Button variant="border">Login</Button>
            <Button variant="primary">Signup</Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-4 items-center px-4 xl:px-1 justify-between hidden md:flex">
      <Logo />
      <div className="flex items-center gap-8">
        {navLinkks.map((link, index) => (
          <Link
            key={index}
            href={''}
            className="text-sm text-neutral-700  dark:text-neutral-400 font-medium font-display "
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="border">Login</Button>
        <Button variant="primary">Signup</Button>
      </div>
    </Container>
  );
};
