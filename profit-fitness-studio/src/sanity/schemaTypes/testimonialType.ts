import { BiDetail } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  icon: BiDetail,
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
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      rating: 'rating',
    },
    prepare({ name, rating }) {
      return {
        title: name,
        subtitle: rating,
        media: BiDetail,
      };
    },
  },
});
