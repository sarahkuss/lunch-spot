import { useContext } from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { RestaurantContext } from "../App"

export default function RestaurantCard ({ food, navigation }) {

  const { setSelectedRestaurant } = useContext(RestaurantContext)

  const chooseRestaurant = () => {
    setSelectedRestaurant(food)
    navigation.navigate("Details")
  }

  return (
    <TouchableOpacity onPress={chooseRestaurant}>
    <View style={styles.card}>
      <Text style={styles.name}>{food.name}</Text>
      <Image style={styles.img} source={{ uri: food.image }} />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  card: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 8,
    alignItems: 'center',
    padding: 8,
    borderRadius: 6,
    borderColor: '#646D7E',
    borderWidth: 2,
  },
  name: {
    fontSize: 24,
    marginBottom: 4,
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 6,
  },
})