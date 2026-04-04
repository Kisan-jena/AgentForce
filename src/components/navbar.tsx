import Link from 'next/link';
import Container from '../components/container';
import { Logo } from '../icons-logos/logo-agen-force';
import Button from './ui/buttons';

const Navbar = () => {
  const navLinkks = [
    { name: 'Features', href: '/' },
    { name: 'Product', href: '/' },
    { name: 'Socials', href: '/' },
    { name: 'Pricing', href: '/' },
  ];

  return (
    <div className="bg-neutral-00 my-0 border-b border-neutral-200 dark:border-neutral-800">
      <Container className="py-4 px-4 flex justify-between">
        <Logo />
        <div className="flex bg-amber-00  items-center gap-8">
          {navLinkks.map((link, index) => (
            <Link
              key={index}
              href={''}
              className="text-sm text-neutral-700 dark:text-neutral-400 font-medium font-display "
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Login</Button>
          <Button variant="primary">Signup</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
