import Bounded from '../Bounded';
import Title from '../Title';

const Hero = ({ id }: { id: string }) => {
  return (
    <Bounded
      id={id}
      className="min-h-screen flex justify-center items-center  hero-bg"
    >
      <div className="bg-brand-black/50 absolute inset-0 z-10 h-full"></div>
      <Title as="h1" size="sm" className="relative z-20">
        Sclera&reg; - Minimal Versatile
      </Title>
    </Bounded>
  );
};

export default Hero;
