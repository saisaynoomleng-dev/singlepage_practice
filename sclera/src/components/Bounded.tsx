import { BoundedProps } from '@/lib/definitions';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
  id,
}: BoundedProps) => {
  return (
    <Comp
      id={id}
      className={clsx(
        'py-10 px-5 relative space-y-5 overflow-x-hidden',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
