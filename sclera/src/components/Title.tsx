import { TitleProps } from '@/lib/definitions';
import clsx from 'clsx';

const Title = ({ as: Comp = 'h1', children, className, size }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'text-balance  leading-[1.1] tracking-wide',
        size === 'lg' && 'text-9xl',
        size === 'md' && 'text-6xl',
        size === 'sm' && 'text-4xl',
        Comp === 'h1' && 'font-bold',
        Comp === 'h2' && 'font-normal',
        Comp === 'h3' && 'font-normal',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
