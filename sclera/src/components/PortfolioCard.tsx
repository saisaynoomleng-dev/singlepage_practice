import { urlFor } from '@/sanity/lib/image';
import { PORTFOLIOS_QUERYResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

const PortfolioCard = (props: NonNullable<PORTFOLIOS_QUERYResult>[number]) => {
  const { name, type, description, mainImage } = props;
  return (
    <div className="relative cursor-pointer group">
      <div className="relative z-10 ">
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .auto('format')
              .quality(100)
              .url()}
            width={500}
            height={500}
            alt={mainImage.alt || ''}
            priority
            className="object-cover min-w-full"
          />
        )}
      </div>

      <div className="hidden group-hover:grid group-hover:place-items-center group-hover:absolute bg-brand-red/10 min-w-full z-20 inset-0 backdrop-blur-lg">
        <div className="bg-brand-white/50 max-w-[80%] mx-auto flex flex-col justify-center items-end p-3 rounded-sm prose text-right text-sm">
          {description && <PortableText value={description} />}
        </div>
      </div>

      <div className="relative z-10 flex justify-around bg-brand-gray-300/30 py-5">
        <p className="text-brand-blue">{name}</p>
        <p className="text-brand-gray-200 font-semibold capitalize">{type}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
