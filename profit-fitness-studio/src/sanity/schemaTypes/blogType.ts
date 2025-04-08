import { FaBlog } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const blogType = defineType({
  name: 'blog',
  icon: FaBlog,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Short Description',
      type: 'text',
      validation: (rule) => rule.required().min(10).max(100),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fitness', value: 'fitness' },
          { title: 'Nutrition', value: 'nutrition' },
          { title: 'Healthy Life', value: 'healthyLife' },
          { title: 'Beauty', value: 'beauty' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Blog Main image',
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
