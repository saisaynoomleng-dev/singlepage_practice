import { type SchemaTypeDefinition } from 'sanity';
import { memberType } from './memberType';
import { trainerType } from './trainerType';
import { testimonialType } from './testimonialType';
import { authorType } from './authorType';
import { blogType } from './blogType';
import { blockContentType } from './blockContentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    memberType,
    trainerType,
    testimonialType,
    authorType,
    blogType,
    blockContentType,
  ],
};
