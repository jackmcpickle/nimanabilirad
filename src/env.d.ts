/// <reference types="astro/client" />

declare module 'jquery';
declare module 'slick-carousel';
declare module 'hover-effect';

interface Window {
  $: typeof import('jquery');
  jQuery: typeof import('jquery');
}
