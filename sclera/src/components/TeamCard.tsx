import { urlFor } from '@/sanity/lib/image';
import { TEAM_MEMEBER_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const TeamCard = (props: NonNullable<TEAM_MEMEBER_QUERYResult>[number]) => {
  const { name, position, links, quote, mainImage } = props;

  if (!links) return;
  return (
    <div className="flex flex-col cursor-pointer rounded-sm group">
      <div className="relative overflow-hidden">
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(400)
              .height(400)
              .auto('format')
              .url()}
            width={400}
            height={400}
            alt={mainImage.alt || ''}
            priority
            className="object-cover min-w-full rounded-tl-sm rounded-tr-sm group-hover:scale-110 transition-transform duration-500"
          />
        )}

        <div className="absolute top-[.5rem] left-[.5rem] flex flex-col gap-2">
          <Link
            href={links[0]}
            className="text-brand-white hover:text-brand-red "
          >
            <FaFacebook className="size-3" />
          </Link>
          <Link
            href={links[1]}
            className="text-brand-white hover:text-brand-red "
          >
            <FaLinkedinIn className="size-3" />
          </Link>
          <Link
            href={links[2]}
            className="text-brand-white hover:text-brand-red "
          >
            <FaTwitter className="size-3" />
          </Link>
          <Link
            href={links[3]}
            className="text-brand-white hover:text-brand-red "
          >
            <FaYoutube className="size-3" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3 pb-1 bg-brand-gray-300/50 text-left h-[10rem] md:h-[13rem] rounded-bl-sm rounded-br-sm overflow-hidden">
        <div>
          <p className="text-xl">{name}</p>
          <p className="font-semibold text-sm text-brand-gray-200 capitalize">
            {position}
          </p>
        </div>
        <p className="text-xs">
          &quot; <em>{quote}</em> &quot;
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
