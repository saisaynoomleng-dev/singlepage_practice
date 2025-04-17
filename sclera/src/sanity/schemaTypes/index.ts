import { type SchemaTypeDefinition } from 'sanity';
import { teamMemberType } from './teamMemberType';
import { blockContentType } from './blockContentType';
import { portfolioType } from './portfolioType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMemberType, blockContentType, portfolioType],
};
