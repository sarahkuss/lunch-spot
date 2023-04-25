import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function RestaurantList () {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant List</Text>
      <ScrollView style={styles.list}></ScrollView>
    </View>
  )
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: '#151B54',
    marginVertical: 8,
  },
  list: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 2,
  },
  container: {
    flex: 1, //take up as much space as we can
    backgroundColor: 'pink',
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})