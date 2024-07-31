/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const red = '#FF0000';
const blue = '#0000FF';
const green = '#00FF00';
const black = '#000000';
const white = '#FFFFFF';
const grey = "#CDCDE0";

const dark = {
  primary: '#371a30',
  secondary: '#562a41',
  third: '#d4962f',
}

const light = {
  primary: '#e1e1e1',
  secondary: '#fff',
  third: '#566a91',
  fourth: '#d4762f'
}

export const colors = {
  black: black,
  white: white,
  light: {
    theme: light,
    text: light.third,
    textModal: black,
    border: '#00ff00',
    borderModal: light.third,
    borderButton: light.third,
    borderField: 'transparent',
    shadow: black,
    background: light.primary,
    backgroundModal: light.secondary,
    backgroundButtonModal: red + '75',
    backgroundIcon: white,
    backgroundField: light.secondary,
    backgroundButton: light.third,
  },
  dark: {
    theme: dark,
    text: dark.third,
    textModal: white,
    border: '#243642',
    borderModal: dark.third,
    borderButton: dark.third,
    borderField: dark.third,
    shadow: '#f1de53',
    background: dark.primary,
    backgroundModal: dark.secondary,
    backgroundButtonModal: red,
    backgroundIcon: white,
    backgroundField: dark.secondary,
    backgroundButton: dark.third,
  },
  grey: grey
};
