import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RatingStars = ({ rating, outOf = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = outOf - fullStars - halfStar;

  return (
    <View style={styles.container}>
      {[...Array(fullStars)].map((_, i) => (
        <Text key={`full-${i}`} style={styles.star}>★</Text>
      ))}
      {halfStar ? <Text key={`half-${halfStar}`} style={styles.star}>½</Text> : null}
      {[...Array(emptyStars)].map((_, i) => (
        <Text key={`empty-${i}`} style={styles.emptyStar}>☆</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    color: '#FFD700', // Gold color for stars
    fontSize: 20,
  },
  emptyStar: {
    color: '#CCC', // Light grey color for empty stars
    fontSize: 20,
  },
});

export default RatingStars;

