import { defineField, defineType } from 'sanity';
import { BiUser } from 'react-icons/bi';

export const memberType = defineType({
  name: 'member',
  icon: BiUser,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Member Name',
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
      name: 'email',
      title: 'Member Email',
      type: 'email',
    }),
    defineField({
      name: 'weight',
      title: 'Body Weight',
      type: 'number',
      initialValue: 50,
    }),
    defineField({
      name: 'age',
      title: 'Member Age',
      type: 'number',
      initialValue: 15,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      age: 'age',
      weight: 'weight',
    },
    prepare({ name, age, weight }) {
      return {
        title: name,
        subtitle: `Age: ${age} | Weight: ${weight}`,
        media: BiUser,
      };
    },
  },
});
