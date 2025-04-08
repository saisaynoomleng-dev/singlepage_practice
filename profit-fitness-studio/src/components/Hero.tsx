import Bounded from './Bounded';
import CallToAction from './CallToAction';
import Title from './Title';

const Hero = () => {
  return (
    <Bounded className="hero-bg !mx-0 min-h-screen relative flex flex-col gap-5 px-10 itmes-center justify-center md:items-end">
      <div className="bg-brand-black/30 absolute inset-0 z-10 " />

      <div className="text-left relative z-30 flex flex-col gap-5 items-start md:text-right md:items-end max-w-[80%] md:max-w-[50%]">
        <Title as="h2" size="lg" variant="red" className="uppercase">
          Best Fitness
        </Title>

        <p className="font-semibold text-brand-white">
          Our club encourages wellness by providing top-notch equipment,
          first-class instructors, innovatiove classes, and qualifieed staff.
        </p>

        <CallToAction href="#service">join now</CallToAction>
      </div>
    </Bounded>
  );
};

export default Hero;
