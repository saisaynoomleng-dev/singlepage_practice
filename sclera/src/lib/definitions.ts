import React from 'react';

// bounded
export type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id: string;
};

// Title
export type TitleProps = {
  as: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
};

// Paragraph
export type ParagraphProps = {
  as?: 'p';
  children: React.ReactNode;
  className?: string;
};

// service card
export type ServiceCardProps = {
  title: string;
  description: string;
};

// slide in effects props
export type SlideInEffectProps = {
  children: React.ReactNode;
  direction: 'left' | 'right' | 'top' | 'bottom';
  offset?: number;
  delay?: number;
  duration?: number;
  className?: string;
};

// fade in effect props
export type FadeInEffectProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
};
