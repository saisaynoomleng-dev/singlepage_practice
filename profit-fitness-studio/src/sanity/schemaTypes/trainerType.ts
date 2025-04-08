import { defineField, defineType } from 'sanity';
import { FaUserSecret } from 'react-icons/fa';

export const trainerType = defineType({
  name: 'coach',
  icon: FaUserSecret,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Trainer Name',
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
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
      options: {
        list: [
          { title: 'Yoga', value: 'yoga' },
          { title: 'Fitness', value: 'fitness' },
          { title: 'Boxing', value: 'boxing' },
          { title: 'Dance', value: 'dance' },
          { title: 'Fight', value: 'fight' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Trainer Image',
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
      title: 'Trainer Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      specialty: 'specialty',
    },
    prepare({ name, image, specialty }) {
      return {
        title: name,
        subtitle: specialty,
        media: image || FaUserSecret,
      };
    },
  },
});
