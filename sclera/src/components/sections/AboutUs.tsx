import { sanityFetch } from '@/sanity/lib/live';
import Bounded from '../Bounded';
import Paragraph from '../Paragraph';
import { TEAM_MEMEBER_QUERY } from '@/sanity/lib/queries';
import TeamCard from '../TeamCard';
import SectionTitle from '../SectionTitle';

const AboutUs = async ({ id }: { id: string }) => {
  const { data: members } = await sanityFetch({ query: TEAM_MEMEBER_QUERY });
  return (
    <Bounded id={id} className="text-center mt-10">
      <div className="flex flex-col gap-5">
        <SectionTitle as="h2" size="sm">
          about us
        </SectionTitle>

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
        <SectionTitle as="h2" size="sm">
          team members
        </SectionTitle>

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
