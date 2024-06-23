import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import AppointmentCard from "../../Components/AppointmentCard";
import { useSelector } from "react-redux";
import fontSizes from "../../constants/fontSizes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const MyAppointments = () => {
  var appointmentDet = { appointmentId: "" };
  appointmentDet = useSelector((state) => state.appointmentDetails);
  return (
    <View style={styles.container}>
      {appointmentDet.appointmentId ? (
        <AppointmentCard />
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: fontSizes.h4, fontWeight: "400", marginTop: 50 }}
          >
            NO ACTIVE APPOINTMENTS.
          </Text>
          <MaterialIcons
            name="hourglass-empty"
            size={80}
            color="gray"
            style={{ marginTop: 200 }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MyAppointments;
