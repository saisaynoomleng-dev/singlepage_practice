import { TitleProps } from '@/lib/definitions';
import clsx from 'clsx';

const SectionTitle = ({
  as: Comp = 'h2',
  children,
  className,
  size,
}: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'text-balance  leading-[1.1] tracking-wide',
        'uppercase relative inline-block after:absolute after:w-[5rem] after:h-[1px] after:bg-brand-blue/50 after:-bottom-1 after:left-[50%] after:translate-x-[-50%] after:rounded-lg',
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

export default SectionTitle;
