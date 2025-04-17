import Bounded from '../Bounded';
import SectionTitle from '../SectionTitle';

const Services = ({ id }: { id: string }) => {
  return (
    <Bounded id={id} className="text-center">
      <SectionTitle as="h2" size="sm">
        services
      </SectionTitle>
    </Bounded>
  );
};

export default Services;
