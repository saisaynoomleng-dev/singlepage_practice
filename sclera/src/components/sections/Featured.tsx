import Link from 'next/link';
import Bounded from '../Bounded';
import Paragraph from '../Paragraph';
import SectionTitle from '../SectionTitle';
import Title from '../Title';

const Featured = ({ id }: { id: string }) => {
  return (
    <Bounded id={id} className="text-center ">
      <SectionTitle as="h2" size="sm">
        Featured
      </SectionTitle>

      <div className="grid md:grid-cols-2 featured-bg gap-y-5 place-items-center py-10 grid-rows-1 min-h-[500px]">
        <div className="flex flex-col items-start text-start gap-2">
          <Title as="h3" className="!font-bold text-xl">
            The start of the web
          </Title>
          <Paragraph className="text-sm  min-w-full">
            In 1989, whilst working of CERN Tim Berners-Lee proposed to create a
            gloabal hypertext project.
          </Paragraph>
          <Link
            href="/"
            className="text-sm font-bold underline underline-offset-4 text-brand-red"
          >
            Learn More
          </Link>
        </div>

        <div className="flex flex-col items-end text-end gap-2">
          <Title as="h3" className="!font-bold text-xl">
            Evolution of the Web Design
          </Title>
          <Paragraph className="text-sm  min-w-full">
            Which later becoame known as World Wide Web. During 1991 to 1993,
            World Wide Web was born.
          </Paragraph>
          <Link
            href="/"
            className="text-sm font-bold underline underline-offset-4 text-brand-red"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Bounded>
  );
};

export default Featured;
