import { StyleSheet, Text } from 'react-native';

function List({ data }) {
  return data.map((dataPoint) => {
    return (
      <Text style={styles.dataPoint} key={dataPoint}>
        {dataPoint}
      </Text>
    );
  });
}

export default List;

const styles = StyleSheet.create({
  dataPoint: {
    backgroundColor: '#e2b497',
    color: '#351401',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    borderRadius: 6,
    textAlign: 'center',
  },
});
