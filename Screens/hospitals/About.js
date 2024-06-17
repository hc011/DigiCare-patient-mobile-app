import React from "react";
import { View, Text, StyleSheet } from "react-native";
import fontSizes from "../../constants/fontSizes";

const AboutScreen = (props) => {
  const aboutContent = `
    This is a dummy description about the hospital. 
    It provides a brief overview of the hospital's services and 
    facilities. You can replace this content with a more detailed 
    description in the future.
  `;

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f2f2f2" }}>
      <Text style={{ fontSize: fontSizes.h4, fontWeight: "400" }}>
        About Us
      </Text>
      <Text style={styles.aboutText}>{aboutContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
});

export default AboutScreen;
