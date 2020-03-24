import React, { useState } from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';

const CategoryMealsScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Category meals screen</Text>
      <Button title="Go to details!" onPress={() => {
        navigation.navigate("MealDetails");
      }} />
    </View>
  );
}

const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
);

export default CategoryMealsScreen;