import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
  const { mealId } = route.params;
  const {
    title,
    imageUrl,
    duration,
    affordability,
    complexity,
    ingredients,
    steps,
  } = MEALS.find(({ id }) => id === mealId);
  const { favoritesIds, removeFavorite, addFavorite } =
    useContext(FavoritesContext);
  const isFavorite = favoritesIds.includes(mealId);

  function changeFavoritesStatusHandler() {
    if (isFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoritesStatusHandler}
            icon={isFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [isFavorite]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.mealImage} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        {...{
          affordability,
          complexity,
          duration,
          textStyle: styles.detailText,
        }}
      />
      <View style={styles.innerContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={ingredients}></List>
        <Subtitle>Steps</Subtitle>
        <List data={steps}></List>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 32,
  },
  mealImage: {
    width: "100%",
    height: 350,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 40,
  },
  detailText: {
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
  },
});
