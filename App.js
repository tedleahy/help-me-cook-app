import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='All Recipes'
          component={RecipeList}
        />
        <Stack.Screen
          name='View Recipe'
          component={RecipeDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

