import { create } from '@storybook/theming'

export const dark = create({
  base: 'dark',
  brandTitle: 'GiphyClips UI',
  brandImage: '/giphy-clips-ui/images/Logotype.svg',
  brandUrl: 'https://github.com/bq-t/giphy-clips-ui',
  brandTarget: '_blank',

  colorPrimary: '#FF5B5B',
  colorSecondary: '#00C5FF',

  appBg: '#1F1F1F',
  appContentBg: '#1F1F1F',
  appPreviewBg: '#000',
  appBorderColor: '#000',
  appBorderRadius: 8,

  textColors: '#FFF',
  textInverseColor: '#000',

  barTextColor: '#FFF',
  barSelectedColor: '#00C5FF',
  barHoverColor: '#BEBEBE',
  barBg: '#1F1F1F',

  inputBg: '#000',
  inputBorder: '#000',
  inputTextColor: '#FFF',
  inputBorderRadius: 8,
})