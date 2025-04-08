import { defineArrayMember, defineField, defineType } from 'sanity';
import { BoldIcon, HighlightIcon, ItalicIcon } from '@sanity/icons';

export const blockContentType = defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'h1', value: 'h1' },
        { title: 'h2', value: 'h2' },
        { title: 'h3', value: 'h3' },
        { title: 'h4', value: 'h4' },
        { title: 'h5', value: 'h5' },
        { title: 'h6', value: 'h6' },
        { title: 'Quote', value: 'blockQuote' },
      ],
      marks: {
        decorators: [
          { title: 'I', value: 'em', icon: ItalicIcon },
          { title: 'B', value: 'strong', icon: BoldIcon },
          { title: 'Highlight', value: 'highlight', icon: HighlightIcon },
        ],
      },
    }),
    defineArrayMember({
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
  ],
});
