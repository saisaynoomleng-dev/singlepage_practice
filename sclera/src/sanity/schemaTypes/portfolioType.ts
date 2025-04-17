import { defineField, defineType } from 'sanity';
import { MdPermMedia } from 'react-icons/md';

export const portfolioType = defineType({
  name: 'portfolio',
  icon: MdPermMedia,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
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
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Business', value: 'business' },
          { title: 'People', value: 'people' },
          { title: 'Education', value: 'education' },
          { title: 'Travels', value: 'travel' },
          { title: 'E-Commerce', value: 'ecommerce' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'mainImage',
    },
  },
});
