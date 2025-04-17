import { sanityFetch } from '@/sanity/lib/live';
import Bounded from '../Bounded';
import SectionTitle from '../SectionTitle';
import { PORTFOLIOS_QUERY } from '@/sanity/lib/queries';
import PortfolioCard from '../PortfolioCard';
import { SlideInEffect, SlideInGroup } from '../animations/gsapAni';

const Portfolio = async ({ id }: { id: string }) => {
  const { data: portfolios } = await sanityFetch({ query: PORTFOLIOS_QUERY });
  return (
    <Bounded id={id} className="flex flex-col text-center gap-3">
      <SlideInEffect direction="bottom">
        <SectionTitle as="h2" size="sm">
          Portfolio
        </SectionTitle>
      </SlideInEffect>

      <SlideInGroup
        direction="bottom"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {portfolios.map((p) => (
          <PortfolioCard key={p.name} {...p} />
        ))}
      </SlideInGroup>
    </Bounded>
  );
};

export default Portfolio;
