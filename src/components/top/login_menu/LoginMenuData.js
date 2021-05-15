import { commonData } from '../../common/CommonData';

export const loginMenu = {
  button: [
    {
      label: 'ログイン',
      backgroundColor: '#9c9c9c',
      backgroundColorHover: '#6c6c6c',
      url: commonData.url + '/login'
    },
    {
      label: '会員',
      backgroundColor: '#fff',
      backgroundColorHover: '#0d47a1',
      url: commonData.url + '/register'
    }
  ],
  link: {
    label: 'シネマイレージカードをお持ちで、会員情報登録・パスワード登録をする方はこちらから',
    url: commonData.url + '/cinemileage'
  }
}
