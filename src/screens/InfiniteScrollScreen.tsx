import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    if (numbers.length >= 30) {
      // our custom limit to test the end of the list
      return;
    }

    let values: number[] = [];
    for (let i = 0; i < 5; i++) {
      values[i] = numbers.length + i;
    }

    // simulate server delay

    setTimeout(() => {
      setNumbers([...numbers, ...values]);
    }, 3000);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
    );
  };

  const renderFooter = () => {
    return (
      <>
        {numbers.length < 30 ? (
          <ActivityIndicator style={styles.loadingItem} size={30} />
        ) : (
          <Text style={styles.finishLabel}>End of the List</Text>
        )}
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        // we set the value to know when the end of the list is near
        onEndReachedThreshold={0.5}
        onEndReached={() => loadMore()}
        // show to the user loading when reached end
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
  loadingItem: {
    marginTop: 50,
    marginBottom: 30,
  },
  finishLabel: {
    marginVertical: 30,
    textAlign: 'center',
    color: 'white',
  },
});
