import Bounded from './ui/Bounded';
import { GiAchievement } from 'react-icons/gi';
import Title from './ui/Title';
import { FaDumbbell, FaUsers } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';

const Banner = () => {
  return (
    <Bounded className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 items-start">
      <div className="flex flex-col justify-center items-center text-center gap-10 p-5">
        <div className="p-3 border-2 border-black/30 rounded-lg rotate-45 max-w-[10rem]">
          <GiAchievement className="text-brand-red text-fs-800 -rotate-45" />
        </div>
        <div className="space-y-2">
          <Title
            as="h3"
            size="sm"
            className="font-roboto uppercase"
            variant="black"
          >
            quality service
          </Title>
          <p className="font-semibold">
            At our fitness studio, you can experience the best level of customer
            service.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-10 p-5">
        <div className="p-3 border-2 border-black/30 rounded-lg rotate-45 max-w-[10rem]">
          <FaDumbbell className="text-brand-red text-fs-800 -rotate-45 " />
        </div>
        <div className="space-y-2">
          <Title
            as="h3"
            size="sm"
            className="font-roboto uppercase"
            variant="black"
          >
            spacious gym
          </Title>
          <p className="font-semibold">
            At our fitness studio, you can experience the best level of customer
            service.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-10 p-5">
        <div className="p-3 border-2 border-black/30 rounded-lg rotate-45 max-w-[10rem]">
          <BiDetail className="text-brand-red text-fs-800 -rotate-45 " />
        </div>
        <div className="space-y-2">
          <Title
            as="h3"
            size="sm"
            className="font-roboto uppercase"
            variant="black"
          >
            unique fitness programs
          </Title>
          <p className="font-semibold">
            Our coaches have develoed more than 50 fitness programs and workout
            plans just for you.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-10 p-5">
        <div className="p-3 border-2 border-black/30 rounded-lg rotate-45 max-w-[10rem]">
          <FaUsers className="text-brand-red text-fs-800 -rotate-45 " />
        </div>
        <div className="space-y-2">
          <Title
            as="h3"
            size="sm"
            className="font-roboto uppercase"
            variant="black"
          >
            Group classes
          </Title>
          <p className="font-semibold">
            If you prefer training with friends, then our group classes have
            what you need.
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default Banner;
