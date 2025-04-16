import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaUser } from 'react-icons/fa';

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  icon: FaUser,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          { title: 'Founder', value: 'founder' },
          { title: 'Developer', value: 'developer' },
          { title: 'Creative', value: 'creative' },
          { title: 'Marketing', value: 'marketing' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'Important short slogan or quote',
      validation: (rule) =>
        rule.required().min(10).info(`Quote must have at least 10 characters`),
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineArrayMember({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineArrayMember({
          name: 'x',
          title: 'X',
          type: 'url',
        }),
        defineArrayMember({
          name: 'youtube',
          title: 'Youtube',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'quote',
      media: 'mainImage',
    },
  },
});
