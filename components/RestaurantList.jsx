import { useState, useEffect } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import RestaurantCard from "./RestaurantCard"
import Random from "./Random"

export default function RestaurantList ({ navigation }) {

  const [foodList, setFoodList] = useState()

  useEffect(() => {
    fetch('https://my-first-firestore-bc.web.app/restaurants')
      .then(resp => resp.json())
      .then(setFoodList)
      .catch(alert)
  }, [])

  return(
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {foodList && foodList.map(food => (
          <RestaurantCard food={food} key={food.id} navigation={navigation}/>
        ))}

      </ScrollView>
      <Random navigation={navigation} foodList={foodList} />
    </View>
  )
}

const styles = StyleSheet.create ({
  list: {
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  container: {
    flex: 1, //take up as much space as we can
    backgroundColor: 'skyblue',
    // marginTop: 20,
    // marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  }
})