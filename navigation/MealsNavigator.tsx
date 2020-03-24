
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Categories'>
        <Stack.Screen
          name='Categories'
          component={CategoriesScreen}
          options={{
            title: 'Categories',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name='CategoryMeals'
          component={CategoryMealsScreen}
          options={{title: 'Category Meals'}}
        />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailsScreen}
          options={{title: 'Meal Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MealsNavigator