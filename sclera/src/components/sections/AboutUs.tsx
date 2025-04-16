import { sanityFetch } from '@/sanity/lib/live';
import Bounded from '../Bounded';
import Paragraph from '../Paragraph';
import Title from '../Title';
import { TEAM_MEMEBER_QUERY } from '@/sanity/lib/queries';
import TeamCard from '../TeamCard';

const AboutUs = async ({ id }: { id: string }) => {
  const { data: members } = await sanityFetch({ query: TEAM_MEMEBER_QUERY });
  return (
    <Bounded id={id} className="text-center mt-10">
      <div className="flex flex-col gap-5">
        <Title
          as="h2"
          className="uppercase relative inline-block after:content-[''] after:absolute after:w-[5rem] after:h-[1px] after:bg-brand-blue/50 after:-bottom-1 after:left-[50%] after:translate-x-[-50%] after:rounded-lg"
          size="sm"
        >
          about us
        </Title>

        <Paragraph className="text-xl">What is Sclera&reg;?</Paragraph>
        <Paragraph>
          Web design encompassess many different skills and disciplines in the
          production and maintenance of websites. The different areas of web
          design include web graphic design; authroing, including standardized
          code and proprietary software, user experience design; and search
          engine optimization.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-4">
        <Title
          as="h2"
          className="uppercase relative inline-block after:content-[''] after:absolute after:w-[5rem] after:h-[1px] after:bg-brand-blue/50 after:-bottom-1 after:left-[50%] after:translate-x-[-50%] after:rounded-lg"
          size="sm"
        >
          team members
        </Title>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {members.map((member) => (
            <TeamCard key={member.slug?.current} {...member} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AboutUs;
