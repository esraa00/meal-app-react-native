import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MealDetails from '../MealDetails';

function MealItem({ meal }) {
  const navigation = useNavigation();
  const { id, title, imageUrl, complexity, affordability, duration } = meal;

  function onPressHandler() {
    navigation.navigate('MealDetails', {
      mealId: id,
    });
  }
  return (
    <View style={styles.root}>
      <Pressable
        android_ripple={{ color: 'gray' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPressHandler}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails {...{ duration, complexity, affordability }} />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    margin: 16,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
