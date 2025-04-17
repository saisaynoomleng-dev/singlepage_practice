import AboutUs from '@/components/sections/AboutUs';
import Featured from '@/components/sections/Featured';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <section>
      <Hero id="hero" />
      <AboutUs id="about-us" />
      <Portfolio id="portfolio" />
      <Services id="services" />
      <Featured id="featured" />
    </section>
  );
}
