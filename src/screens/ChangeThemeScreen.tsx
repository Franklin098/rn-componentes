import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export default function ChangeThemeScreen() {
  const {theme, setDarkTheme, setLightTheme} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
