import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import AppointmentCard from "../../Components/AppointmentCard";

const MyAppointments = () => {
  return (
    <View style={styles.container}>
      <AppointmentCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MyAppointments;
