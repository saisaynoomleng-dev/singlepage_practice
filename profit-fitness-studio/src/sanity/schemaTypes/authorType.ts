import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const authorType = defineType({
  name: 'author',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Author Bio',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Author image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
  ],
});
