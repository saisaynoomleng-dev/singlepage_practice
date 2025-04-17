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

export const PORTFOLIOS_QUERY = defineQuery(`
  *[_type == 'portfolio'
 && defined(slug.current)]{
  name,
  description,
  mainImage{
    asset->{
      url
    },
    alt
  },
  type
 } | order(name)`);
