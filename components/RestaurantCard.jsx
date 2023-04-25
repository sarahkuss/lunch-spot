import { Text, View, Image, StyleSheet } from "react-native"

export default function RestaurantCard ({ food }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{food.name}</Text>
      <Image style={styles.img} source={{ uri: food.image }} />
    </View>
  )
}

const styles = StyleSheet.create ({
  name: {
    fontSize: 24,
    marginBottom: 4,
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 6,
  },
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
})