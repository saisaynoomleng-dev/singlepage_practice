import { CallToActionProps } from '@/app/_lib/types';
import clsx from 'clsx';
import Link from 'next/link';

const CallToAction = ({ href, children, className }: CallToActionProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        `bg-brand-red text-brand-white uppercase font-bold shadow-xs hover:bg-brand-red/90 cursor-pointer hover:scale-105 transition-transform duration-500 px-5 py-2 rounded-sm`,
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CallToAction;
