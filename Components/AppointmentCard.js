import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import fontSizes from "../constants/fontSizes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";

const AppointmentCard = ({}) => {
  var appd = { appointmentId: "" };
  appd = useSelector((state) => state.appointmentDetails);
  const doctorDetails = useSelector(
    (state) => state.doctor.selectedDoctorSlice
  );
  // console.log(appd.appointmentId.slice(0, 5));

  const appointment = {
    dateTime:
      appd.appointmentId.slice(6, 16) +
      " | Booking time - " +
      appd.appointmentId.slice(17, 22),
    doctorImage:
      "https://th.bing.com/th/id/OIP.LczXdrMkR1M0DA0Q6diejQHaIH?w=167&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    doctorName: doctorDetails.name,
    address: "123 Main St, Anytown, CA 12345",
    bookingId: appd.appointmentId.slice(0, 6),
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardDateTime}>{appointment.dateTime}</Text>
      </View>
      <View style={styles.cardSeparator} />
      <View style={styles.cardDetails}>
        <View style={styles.doctorInfo}>
          <Image
            source={{ uri: appointment.doctorImage }}
            style={styles.doctorImage}
          />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>{appointment.doctorName}</Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="location-on" size={20} color="gray" />
              <Text style={styles.doctorAddress}>{appointment.address}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="book-online" size={20} color="gray" />
              <Text style={styles.bookingId}>
                Booking ID:{" "}
                <Text style={{ color: "black", fontWeight: "500" }}>
                  {appointment.bookingId}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardSeparator} />
      {/* <Button
        title="Cancel Appointment"
        color="#5B8DD3"
        onPress={onCancelPress}
        style={styles.cancelButton}
      /> */}
      <View style={styles.verifyButtonContainer}>
        <Button
          mode="contained"
          style={{
            borderRadius: 30,
            backgroundColor: "#5B8DD3",
            width: "90%",
          }}
          contentStyle={{ padding: 8, alignItems: "center" }}
          labelStyle={{ fontSize: fontSizes.buttonLarge }}
          // onPress={func}
        >
          <Text
            style={{
              fontSize: fontSizes.buttonLarge,
            }}
          >
            Cancel Appointment
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: 15,
    padding: 20,
  },
  cardHeader: {
    marginBottom: 5,
  },
  cardDateTime: {
    fontSize: fontSizes.base,
    fontWeight: "600",
  },
  cardSeparator: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: fontSizes.base,
    fontWeight: "400",
    marginBottom: 5,
  },
  doctorAddress: {
    fontSize: 12,
    color: "#777",
    marginBottom: 5,
  },
  bookingId: {
    fontSize: 12,
    color: "#777",
  },
  verifyButtonContainer: {
    width: "100%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#FF0000",
    color: "white",
    borderRadius: 5,
    paddingHorizontal: 15,
  },
});

export default AppointmentCard;
