import { commonData } from './CommonData';

export const topMenu = [
  {
    active: 1,
    title: '上映中',
    sub: 'Now Playing',
    url: commonData.url + '/movie/now_playing'
  },
  {
    active: null,
    title: '公開予定',
    sub: 'Coming Soon',
    url: commonData.url + '/movie/coming_soon'
  },
  {
    active: null,
    title: '劇場を探す',
    sub: 'Theater List',
    url: commonData.url + '/theater'
  },
];
