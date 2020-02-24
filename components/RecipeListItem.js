import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function RecipeListItem(props) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('View Recipe', { recipe: props.recipe })}>
      <Text style={styles.item}>
        {props.recipe.attributes.name}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
