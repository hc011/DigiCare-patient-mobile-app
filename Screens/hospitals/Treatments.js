import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import fontSizes from "../../constants/fontSizes";

const TreatmentsScreen = (props) => {
  const treatments = [
    "Treatment 1",
    "Treatment 2",
    "Treatment 3",
    "Treatment 4",
    "Treatment 5",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <Text
        style={{
          fontSize: fontSizes.h4,
          fontWeight: "400",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        Treatments Offered
      </Text>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {treatments.map((treatment) => (
          <Text key={treatment} style={styles.treatmentList}>
            {treatment}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  treatmentList: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TreatmentsScreen;
