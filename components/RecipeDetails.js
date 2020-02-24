// Viewing the details of a single recipe

import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Constants from 'expo-constants'

export default function RecipeDetails({route}) {
  const recipe = route.params.recipe.attributes

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {recipe.name}
      </Text>
      <Text style={styles.ingredientsHeader}>
        Ingredients
      </Text>
      <FlatList
        data={recipe.ingredients}
        renderItem={({item}) => <Text>- {item.name}</Text>}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 20,
    alignSelf: 'center'
  },
  ingredientsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  }
})
