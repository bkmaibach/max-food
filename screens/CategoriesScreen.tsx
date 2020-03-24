import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { categories } from '../data/dummyData';


const CategoriesScreen = ({navigation}) => {

  const renderGridItem = (itemData) => (
    <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate('CategoryMeals')}}>
      <View><Text>{itemData.item.title}</Text></View>
    </TouchableOpacity>
  );

  return (
      <FlatList data={categories} renderItem={renderGridItem} numColumns={2} />
  );
}

const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    gridItem: {
      backgroundColor: 'grey',
      flex: 1,
      margin: 15,
      height: 150
    },
  }
);

export default CategoriesScreen;