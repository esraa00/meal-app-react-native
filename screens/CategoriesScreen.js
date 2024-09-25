import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
        title: item.title,
      });
    }
    return (
      <CategoryGridTile
        color={item.color}
        title={item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      numColumns={2}
      style={styles.flatList}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem(item)}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
});
