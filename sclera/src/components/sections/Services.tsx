import { FaCamera, FaCheck, FaHeadphonesAlt, FaImage } from 'react-icons/fa';
import { FaMagnifyingGlass, FaPaperclip } from 'react-icons/fa6';
import Bounded from '../Bounded';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';
import { SlideInGroup } from '../animations/gsapAni';

const Services = ({ id }: { id: string }) => {
  return (
    <Bounded id={id} className="text-center space-y-10">
      <SectionTitle as="h2" size="sm">
        services
      </SectionTitle>

      <SlideInGroup
        direction="top"
        className="grid grid-cols-2 md:grid-cols-3 gap-y-5 items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-3 group cursor-pointer ">
          <div className="bg-brand-red p-3 rounded-full group-hover:rounded-sm group-hover:rotate-135 transition-transform duration-500">
            <FaHeadphonesAlt className="size-10 group-hover:-rotate-135" />
          </div>
          <ServiceCard
            title="Marketing"
            description="This can be an age group or particular strand of culture."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 group cursor-pointer ">
          <div className="bg-brand-red p-3 rounded-full group-hover:rounded-sm group-hover:rotate-135 transition-transform duration-500">
            <FaCheck className="size-10 group-hover:-rotate-135" />
          </div>
          <ServiceCard
            title="UI/UX"
            description="User understanding of the content of a website often depends on user."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 group cursor-pointer ">
          <div className="bg-brand-red p-3 rounded-full group-hover:rounded-sm group-hover:rotate-135 transition-transform duration-500">
            <FaMagnifyingGlass className="size-10 group-hover:-rotate-135" />
          </div>
          <ServiceCard
            title="Layout"
            description="Part of the user interface design is affected by the quality."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 group cursor-pointer ">
          <div className="bg-brand-red p-3 rounded-full group-hover:rounded-sm group-hover:rotate-135 transition-transform duration-500">
            <FaCamera className="size-10 group-hover:-rotate-135" />
          </div>
          <ServiceCard
            title="Typography"
            description="Web designers may choose to limit the variety of website typefaces."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 group cursor-pointer ">
          <div className="bg-brand-red p-3 rounded-full group-hover:rounded-sm group-hover:rotate-135 transition-transform duration-500">
            <FaImage className="size-10 group-hover:-rotate-135" />
          </div>
          <ServiceCard
            title="Motion"
            description="The page layout and user interace may also be affected."
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 group cursor-pointer ">
          <div className="bg-brand-red p-3 rounded-full group-hover:rounded-sm group-hover:rotate-135 transition-transform duration-500">
            <FaPaperclip className="size-10 group-hover:-rotate-135" />
          </div>
          <ServiceCard
            title="Code"
            description="Best practices take practice and a good patience."
          />
        </div>
      </SlideInGroup>
    </Bounded>
  );
};

export default Services;
