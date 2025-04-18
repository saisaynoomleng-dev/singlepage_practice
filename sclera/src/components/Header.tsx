'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { name: 'Home', url: '#hero' },
    { name: 'About Us', url: '#about-us' },
    { name: 'Portfolio', url: '#portfolio' },
    { name: 'Services', url: '#services' },
    { name: 'Featured', url: '#featured' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <header className="bg-transparent fixed z-50 flex max-md:justify-between justify-around items-center p-5 min-w-full md:backdrop-blur-sm">
      <Link href="/" className="font-semibold text-2xl ">
        Sclera&reg;
      </Link>

      <Button
        className="relative z-50 size-10 hidden max-md:!block border-none"
        onClick={() => setNavOpen((prev) => !prev)}
      >
        {!navOpen ? (
          <RxHamburgerMenu className="size-5" />
        ) : (
          <IoIosClose className="size-8" />
        )}
      </Button>

      <nav
        className={clsx(
          'flex gap-3 max-md:flex-col max-md:fixed max-md:inset-0 max-md:bg-brand-blue/10 max-md:font-bold max-md:justify-center max-md:backdrop-blur-sm max-md:items-center transition-transform duration-500',
          navOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-full',
        )}
      >
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.name}
            onClick={() => setNavOpen(false)}
            className="hover:text-brand-red"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
