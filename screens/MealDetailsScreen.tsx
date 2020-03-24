import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Meal details screen</Text>
      <Button title="Back to start!" onPress={() => {
        navigation.popToTop();
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

export default MealDetailsScreen;