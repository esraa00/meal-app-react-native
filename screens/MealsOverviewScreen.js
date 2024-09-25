import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealList/MealsList';
function MealsOverviewScreen({ route, navigation }) {
  const { categoryId, title } = route.params;

  const meals = MEALS.filter((meal) =>
    meal.categoryIds.some((id) => id === categoryId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  return <MealsList meals={meals} />;
}

export default MealsOverviewScreen;
