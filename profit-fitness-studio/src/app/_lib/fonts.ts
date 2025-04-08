import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: '../_fonts/roboto/Roboto-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../_fonts/roboto/Roboto-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../_fonts/roboto/Roboto-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../_fonts/roboto/Roboto-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../_fonts/roboto/Roboto-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../_fonts/roboto/Roboto-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../_fonts/roboto/Roboto-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-roboto',
});

export const roboto_condensed = localFont({
  src: [
    {
      path: '../_fonts/roboto_condensed/RobotoCondensed-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../_fonts/roboto_condensed/RobotoCondensed-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../_fonts/roboto_condensed/RobotoCondensed-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../_fonts/roboto_condensed/RobotoCondensed-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../_fonts/roboto_condensed/RobotoCondensed-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../_fonts/roboto_condensed/RobotoCondensed-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../_fonts/roboto_condensed/RobotoCondensed-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-condensed',
});
