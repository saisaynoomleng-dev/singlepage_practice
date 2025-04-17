import { FaUser } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sclera')
    .items([
      S.documentTypeListItem('teamMember').title('Team').icon(FaUser),
      S.documentTypeListItem('portfolio').title('Portfolios').icon(BiDetail),
    ]);
