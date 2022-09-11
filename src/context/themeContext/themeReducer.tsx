import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  dark: false,
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  dark: true,
  currentTheme: 'dark',
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
