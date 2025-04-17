import { sanityFetch } from '@/sanity/lib/live';
import Bounded from '../Bounded';
import SectionTitle from '../SectionTitle';
import { PORTFOLIOS_QUERY } from '@/sanity/lib/queries';
import PortfolioCard from '../PortfolioCard';

const Portfolio = async ({ id }: { id: string }) => {
  const { data: portfolios } = await sanityFetch({ query: PORTFOLIOS_QUERY });
  return (
    <Bounded id={id} className="flex flex-col text-center gap-3">
      <SectionTitle as="h2" size="sm">
        Porfolio
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {portfolios.map((p) => (
          <PortfolioCard key={p.name} {...p} />
        ))}
      </div>
    </Bounded>
  );
};

export default Portfolio;
