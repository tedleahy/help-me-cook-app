// Viewing the details of a single recipe

import React from 'react'
import { Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native'

export default function RecipeDetails({route}) {
  const recipe = route.params.recipe.attributes

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>

      <Image
        style={styles.recipeImage}
        source={{uri: recipe.image_url}}
      />

      <Text style={styles.sectionHeader}>Ingredients</Text>
      <FlatList
        data={recipe.ingredients}
        renderItem={({item}) => displayIngredient(item)}
        keyExtractor={item => item.name}
      />

      <Text style={styles.sectionHeader}>Instructions</Text>
      <FlatList
        style={{ marginBottom: 20 }}
        data={recipe.instructions}
        renderItem={({item, index}) => <Text>{index+1}. {item}</Text>}
        keyExtractor={(_, index) => `${index}`}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    alignSelf: 'center',
    marginTop: 10
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  recipeImage: {
    height: 250,
    marginTop: 15
  }
})

function displayIngredient(ingredient) {
  switch (ingredient.amount_unit) {
    case 'whole':
      return <Text>{ingredient.amount} {ingredient.name}</Text>

    case 'g':
    case 'ml':
      return <Text>{ingredient.amount}{ingredient.amount_unit} of {ingredient.name}</Text>

    case 'tbsp':
    case 'tsp':
      return <Text>{ingredient.amount} {ingredient.amount_unit} of {ingredient.name}</Text>

    default:
      return <Text>{ingredient.name}</Text>
  }
}
