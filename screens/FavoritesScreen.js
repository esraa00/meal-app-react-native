import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { StyleSheet, Text, View } from "react-native";

function FavoritesScreen() {
  const { favoritesIds } = useContext(FavoritesContext);
  const meals = MEALS.filter((meal) => favoritesIds.includes(meal.id));
  if (meals.length === 0)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals yet!</Text>
      </View>
    );

  return <MealsList meals={meals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
