import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import fontSizes from "../constants/fontSizes";

const CircularIconCard = ({
  name = "",
  iconName,
  color,
  size,
  IconbackgroundColor,
}) => {
  return (
    <View style={styles.card}>
      <View
        style={[styles.iconContainer, { backgroundColor: IconbackgroundColor }]}
      >
        <MaterialIcons name={iconName} size={size} color={color} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginTop: 5,
    fontSize: fontSizes.caption,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default CircularIconCard;
