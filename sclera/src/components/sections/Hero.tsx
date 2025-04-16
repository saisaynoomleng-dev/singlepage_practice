import Link from 'next/link';
import Bounded from '../Bounded';
import Title from '../Title';
import { Button } from '../ui/button';

const Hero = ({ id }: { id: string }) => {
  return (
    <Bounded
      id={id}
      className="min-h-screen flex justify-center items-center  hero-bg flex-col gap-5"
    >
      <div className="bg-brand-black/50 absolute inset-0 z-10 h-full"></div>
      <Title as="h1" size="sm" className="relative z-20 max-md:text-center">
        Sclera&reg; - Minimal Versatile
      </Title>
      <div className="flex gap-3 relative z-20">
        <Button>
          <Link href="#portfolio">
            Learn More{' '}
            <span className="sr-only">
              about our team's work by looking at our portfolio
            </span>
          </Link>
        </Button>
        <Button variant="fill">
          <Link href="#about-us">
            <span className="sr-only">learn more about our team from </span>Our
            Team
          </Link>
        </Button>
      </div>
    </Bounded>
  );
};

export default Hero;
