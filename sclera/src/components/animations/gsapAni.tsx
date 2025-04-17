'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import { SlideInEffectProps, FadeInEffectProps } from '@/lib/definitions';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const SlideInEffect = ({
  children,
  direction = 'right',
  offset = 100,
  delay = 0,
  duration = 1,
  className,
}: SlideInEffectProps) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        delay,
        duration,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      };

      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;
      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;

      gsap.from(containerRef.current, vars);
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={clsx('', className)}>
      {children}
    </div>
  );
};

export const FadeInEffect = ({
  children,
  duration = 2,
  delay = 0,
  className,
}: FadeInEffectProps) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        delay,
        duration,
        y: 100,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      };

      gsap.from(containerRef.current, vars);
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={clsx(className)}>
      {children}
    </div>
  );
};

export const SlideInGroup = ({
  children,
  duration = 1,
  direction,
  offset = 100,
  delay,
  className,
}: SlideInEffectProps) => {
  const groupRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        delay,
        duration,
        offset,
        ease: 'back.out(1.7)',
        stagger: {
          amount: 0.8,
          from: 'start',
        },
        scrollTrigger: {
          trigger: groupRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      };

      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;
      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;

      gsap.from(Array.from(groupRef.current!.children), vars);
    },
    { scope: groupRef },
  );
  return (
    <div ref={groupRef} className={clsx(className)}>
      {children}
    </div>
  );
};
