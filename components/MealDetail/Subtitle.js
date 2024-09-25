import { StyleSheet, Text } from 'react-native';

function Subtitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
  title: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
