// Viewing all recipes

import React, { useState, useEffect } from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import RecipeListItem from './RecipeListItem'

export default function RecipeList() {
  const [isLoading, setIsLoading] = useState(true)
  const [recipesData, setRecipesData] = useState([])

  useEffect(() => {
    (async () => {
      const recipes = await getRecipes()
      setIsLoading(false)
      setRecipesData(recipes)
    })()
  }, [])

  if (isLoading) {
    return <Text>Loading...</Text>
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={recipesData}
          renderItem={({item}) => <RecipeListItem recipe={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: Constants.statusBarHeight
  },
})

const getRecipes = async () => {
  try {
    let recipes = await fetch('https://71b42ee7.ngrok.io/recipes_with_ingredients')
    recipes = await recipes.json()
    recipes = await recipes.data

    return recipes
  } catch(err) {
    console.error(err)
  }
}
