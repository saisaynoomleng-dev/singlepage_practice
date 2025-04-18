// bounded
export type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

// call to action
export type CallToActionProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

// call to action
export type ParagraphProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  isBold?: boolean;
  color?: 'white' | 'black';
};
