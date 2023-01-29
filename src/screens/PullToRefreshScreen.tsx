import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState<string>('');
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    // mock API call delay
    setTimeout(() => {
      console.log('API call completed');

      setData('Hello World ! - ');
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      style={{
        marginTop: isRefreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          // for Android - marginTop offset
          progressViewOffset={10}
          style={{backgroundColor: '#5856D6'}}
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />

        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  );
};
