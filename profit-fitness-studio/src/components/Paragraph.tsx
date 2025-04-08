import { ParagraphProps } from '@/app/_lib/types';
import clsx from 'clsx';

const Paragraph = ({
  as: Comp = 'p',
  children,
  isBold = false,
  className,
  color = 'black',
}: ParagraphProps) => {
  return (
    <Comp
      className={clsx(
        `text-balance`,
        isBold && 'font-semibold',
        color === 'black' && 'text-brand-black',
        color === 'white' && 'text-brand-white',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Paragraph;
