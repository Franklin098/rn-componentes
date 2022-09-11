import 'react-native-gesture-handler';
import React from 'react';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
