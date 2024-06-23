import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import fontSizes from "../../constants/fontSizes";

const TreatmentsScreen = (props) => {
  const treatments = [
    "General Consultation",
    "Neurology",
    "Psychiatry",
    "ENT",
    "Cardiology",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <Text
        style={{
          fontSize: fontSizes.h4,
          fontWeight: "600",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        Treatments Offered
      </Text>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {treatments.map((treatment) => (
          <View
            key={treatment}
            style={{
              borderWidth: 0.5,
              margin: 10,
              padding: 10,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <Text style={styles.treatmentList}>{treatment}</Text>
          </View>
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
