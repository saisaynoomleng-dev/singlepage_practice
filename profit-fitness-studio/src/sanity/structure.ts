import { BiDetail, BiUser } from 'react-icons/bi';
import { FaBlog, FaUserSecret } from 'react-icons/fa';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Profit Fitness Studio')
    .items([
      S.documentTypeListItem('member').title('All Members').icon(BiUser),
      S.documentTypeListItem('testimonial')
        .title('All Testimonials')
        .icon(BiDetail),
      S.divider(),
      S.documentTypeListItem('blog').title('All Blog Posts').icon(FaBlog),
      S.documentTypeListItem('coach').title('All Coaches').icon(FaUserSecret),
    ]);
