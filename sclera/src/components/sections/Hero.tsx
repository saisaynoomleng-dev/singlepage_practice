import Bounded from '../Bounded';
import Title from '../Title';

const Hero = () => {
  return (
    <Bounded className="min-h-screen flex justify-center items-center m-0 !p-0 hero-bg">
      <div className="bg-brand-black/50 absolute inset-0 z-10 h-full"></div>
      <Title as="h1" size="sm" className="relative z-50">
        Sclera&reg; - Minimal Versatile
      </Title>
    </Bounded>
  );
};

export default Hero;
