import { ParagraphProps } from '@/lib/definitions';
import clsx from 'clsx';

const Paragraph = ({ as: Comp = 'p', children, className }: ParagraphProps) => {
  return (
    <Comp className={clsx('text-pretty md:max-w-[70%] mx-auto', className)}>
      {children}
    </Comp>
  );
};

export default Paragraph;
