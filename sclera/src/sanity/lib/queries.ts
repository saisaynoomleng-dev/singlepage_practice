import { defineQuery } from 'next-sanity';

export const TEAM_MEMEBER_QUERY = defineQuery(`
*[_type == 'teamMember'
 && defined(slug.current)]{
  name,
  slug,
  position,
  quote,
  links,
  mainImage{
    asset->{
      url
    },
    alt
  },
  _createdAt
 } | order(_createdAt)`);
