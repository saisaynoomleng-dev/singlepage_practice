import { BoundedProps } from '@/app/_lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
}: BoundedProps) => {
  return <Comp className={clsx(`mx-10 py-10`, className)}>{children}</Comp>;
};

export default Bounded;
