import { ServiceCardProps } from '@/lib/definitions';
import Paragraph from './Paragraph';
import Title from './Title';
import { Button } from './ui/button';

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-3 text-center py-5 px-2">
      <Title as="h3" size="sm">
        {title}
      </Title>
      <Paragraph className="text-xs">{description}</Paragraph>
    </div>
  );
};

export default ServiceCard;
