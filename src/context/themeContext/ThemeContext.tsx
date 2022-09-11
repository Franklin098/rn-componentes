import React, {createContext, useReducer} from 'react';
import {useEffect} from 'react';
import {Appearance, AppState} from 'react-native';
import {useColorScheme} from 'react-native';
import {lightTheme, themeReducer, ThemeState, darkTheme} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({children}: Props) => {
  // const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() == 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    // listen if the app changes its status to 'inactive','background', 'active'
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        // colorScheme == 'light' doesn't work, always retrieves the last old value
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  // useEffect(() => {
  //   colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  // }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
