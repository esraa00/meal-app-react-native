import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

function MealsList({ meals }) {
  const renderMealItem = ({ item }) => <MealItem meal={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={meals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
