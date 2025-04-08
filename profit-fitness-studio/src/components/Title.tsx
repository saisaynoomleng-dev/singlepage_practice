import clsx from 'clsx';
import React from 'react';

type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  className?: string;
  variant: 'black' | 'red';
};

const Title = ({
  as: Comp = 'h1',
  children,
  size,
  className,
  variant,
}: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'font-bold font-condensed leading-[1]',
        size === 'lg' && 'text-fs-800',
        size === 'md' && 'text-fs-700',
        size === 'sm' && 'text-fs-600',
        size === 'xs' && 'text-fs-500',
        variant === 'black' && 'text-brand-black',
        variant === 'red' && 'text-brand-red',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
