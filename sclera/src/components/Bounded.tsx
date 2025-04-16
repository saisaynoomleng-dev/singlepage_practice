import { BoundedProps } from '@/lib/definitions';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
}: BoundedProps) => {
  return (
    <Comp className={clsx('py-10 px-5 relative space-y-5', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;
