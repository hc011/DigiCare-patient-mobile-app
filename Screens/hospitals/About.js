import React from "react";
import { View, Text, StyleSheet } from "react-native";
import fontSizes from "../../constants/fontSizes";

const AboutScreen = (props) => {
  const aboutContent =
    "This is a dummy description about the hospital. It provides a brief overview of the hospital's services and facilities.\n\n You can replace this content with a more detailed description in the future.";

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f2f2f2" }}>
      <Text style={{ fontSize: fontSizes.h4, fontWeight: "600" }}>
        About Us
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderRadius: 10,
          backgroundColor: "white",
          margin: 10,
          padding: 10,
          paddingVertical: 20,
        }}
      >
        <Text style={styles.aboutText}>{aboutContent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutText: {
    fontSize: fontSizes.base,
    lineHeight: 24,
  },
});

export default AboutScreen;
