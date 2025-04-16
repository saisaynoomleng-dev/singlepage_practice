import localFont from 'next/font/local';

export const raleway = localFont({
  src: [
    {
      path: '../app/fonts/Raleway/static/Raleway-Black.ttf',
      style: 'normal',
      weight: '900',
    },
    {
      path: '../app/fonts/Raleway/static/Raleway-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../app/fonts/Raleway/static/Raleway-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../app/fonts/Raleway/static/Raleway-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/Raleway/static/Raleway-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/Raleway/static/Raleway-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/Raleway/static/Raleway-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../app/fonts/Raleway/static/Raleway-Thin.ttf',
      style: 'normal',
      weight: '200',
    },
  ],
  variable: '--font-raleway',
});
