import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import fontSizes from "../constants/fontSizes";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setSelectedDoctorSlice } from "../storage/selectedDoctorSlice";

const photo =
  "https://th.bing.com/th/id/OIP.LczXdrMkR1M0DA0Q6diejQHaIH?w=167&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7"; // Replace with actual photo URL

const DoctorCard = ({
  docName,
  docRating,
  docEmail,
  docSpecialization,
  navigation,
  doctor,
}) => {
  const dispatch = useDispatch();

  const goToBooking = () => {
    dispatch(setSelectedDoctorSlice(doctor));
    navigation.navigate("Book Appointment");
  };

  const goToDoctorDetails = () => {
    dispatch(setSelectedDoctorSlice(doctor));
    navigation.navigate("Doctor Details");
  };

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image source={{ uri: photo }} style={styles.docImg} />
        <View>
          <Text style={{ fontSize: fontSizes.h4, fontWeight: "400" }}>
            {docName}
          </Text>
          <Text style={{ fontSize: fontSizes.paragraph, color: "gray" }}>
            {docSpecialization}
          </Text>
          <Text
            style={{
              fontSize: fontSizes.paragraph,
              fontWeight: "600",
              color: "gray",
              marginTop: 10,
            }}
          >
            <Text>🌟 </Text>
            {docRating} | 100 Reviews
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          mode="outlined"
          style={{
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#5B8DD3",
            // backgroundColor: "#5B8DD3",
            // width: "100%",
            marginTop: 10,
            marginRight: 10,
          }}
          contentStyle={{ alignItems: "center" }}
          labelStyle={{ fontSize: fontSizes.buttonLarge, color: "#5B8DD3" }}
          onPress={goToDoctorDetails}
        >
          About Doctor
        </Button>

        <Button
          mode="contained"
          style={{
            borderRadius: 10,
            backgroundColor: "#5B8DD3",
            // width: "100%",
            marginTop: 10,
          }}
          contentStyle={{ alignItems: "center" }}
          labelStyle={{ fontSize: fontSizes.buttonLarge }}
          onPress={goToBooking}
        >
          Book Appointment
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "gray",
    padding: 10,
    backgroundColor: "white",
  },
  details: {
    flexDirection: "row",
  },
  docImg: {
    width: 90,
    height: 100,
    borderRadius: 10,
    backgroundColor: "gray",
    marginRight: 10,
  },
  buttons: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
  },
});

export default DoctorCard;
