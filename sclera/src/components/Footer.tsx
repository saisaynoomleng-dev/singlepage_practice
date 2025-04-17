import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 justify-between items-start bg-brand-gray-300/50 p-5">
      <div className="flex flex-col gap-2">
        <Link href="/" className="font-semibold text-2xl text-brand-red">
          Sclera&reg;
        </Link>

        <p className="inline-flex items-center gap-3 text-sm">
          <FaPhone size="10" />
          (305) 456 7890
        </p>

        <p className="inline-flex items-center gap-3 text-sm">
          <FaEnvelope size="10" />
          email@email.com
        </p>

        <p className="inline-flex items-center gap-3 text-sm">
          <FaLocationPin size="10" />
          1234 Ocean Dr, Miami, FL.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3  text-sm">
        <Link href="/" className="hover:text-brand-red">
          Home
        </Link>

        <Link href="#about-us" className="hover:text-brand-red">
          About Us
        </Link>

        <Link href="#portfolio" className="hover:text-brand-red">
          Portfolio
        </Link>

        <Link href="#services" className="hover:text-brand-red">
          Services
        </Link>

        <Link href="#featured" className="hover:text-brand-red">
          Featured
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
