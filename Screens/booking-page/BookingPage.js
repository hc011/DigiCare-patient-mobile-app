import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addAppointment } from "../../api/addAppointement";
import { useDispatch } from "react-redux";
import { setAppointmentDetails } from "../../storage/appointmentDetailsSlice";
import { TextInput } from "react-native-paper";

function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const BookingPage = (props) => {
  const dispatch = useDispatch();
  const selectedDoctor = useSelector(
    (state) => state.doctor.selectedDoctorSlice
  );
  const userDetails = useSelector((state) => state.user.userDetails);
  const [bookingForSelf, setBookingForSelf] = useState(false);
  const [name, setName] = useState();
  const [reason, setReason] = useState("");
  const [contact, setContact] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState();

  const handleConfirm = async () => {
    const [response, appointmentId, position] = await addAppointment({
      name,
      sex,
      age,
      contact,
      reason,
      paid: true,
      appointment_time: new Date(),
      user: 1,
      cabinId: 1,
    });
    console.log([response, appointmentId, position]);
    if (appointmentId) {
      dispatch(setAppointmentDetails({ appointmentId, position }));
    }
    props.navigation.pop(2);
    props.navigation.navigate("Token Status");
  };

  const toggleSwitch = () => {
    setBookingForSelf((previousState) => {
      if (previousState) {
        // Currently booking for self, switch to booking for someone else
        // Clear all fields to simulate a completely new person being booked
        setName("");
        setContact("");
        setSex(""); // Ensure the 'sex' field is also cleared
        setAge("");
      } else {
        // Switching to booking for self, autofill from user's profile
        setName(userDetails.first_name + " " + userDetails.last_name); // Simulated user data
        setContact(userDetails.phone_number);
        setSex("M");
        setAge(String(calculateAge(userDetails.dob)));
      }
      return !previousState;
    });
  };

  const RadioButton = ({ label, value, onPress }) => {
    return (
      <TouchableOpacity
        style={styles.radioButtonContainer}
        onPress={() => onPress(value)}
      >
        <View
          style={[
            styles.radioButton,
            sex === value
              ? { borderColor: "#3498DB" }
              : { borderColor: "#ccc" },
          ]}
        >
          {sex === value && <View style={styles.radioButtonIcon} />}
        </View>
        <Text style={styles.radioText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.doctorSummary}>
        <Image
          source={require("../../assets/doctorDP__icon.jpg")}
          style={styles.profilePic}
        />
        <View style={styles.textContainer}>
          <Text style={styles.doctorName}>{selectedDoctor.name}</Text>
          <Text style={styles.specialty}>{selectedDoctor.specialization}</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Booking for myself:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#4A90E2" }}
            thumbColor={bookingForSelf ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={bookingForSelf}
          />
        </View>

        <Text style={styles.label}>Patient Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Full Name"
        />

        <Text style={styles.label}>Sex:</Text>
        <View style={styles.radioGroup}>
          <RadioButton label="Male" value="M" onPress={setSex} />
          <RadioButton label="Female" value="F" onPress={setSex} />
          <RadioButton label="Other" value="O" onPress={setSex} />
        </View>

        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Contact Information:</Text>
        <TextInput
          style={styles.input}
          value={contact}
          onChangeText={setContact}
          placeholder="Email or Phone"
        />

        <Text style={styles.label}>Reason for Visit:</Text>
        <TextInput
          style={styles.inputLarge}
          value={reason}
          onChangeText={setReason}
          placeholder="Brief description"
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F1",
  },
  doctorSummary: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#5B8DD3", // Light background for the header
    borderRadius: 10, // Rounded corners
    shadowColor: "#000", // Shadow for 3D effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5, // Elevation for Android
    marginHorizontal: 5, // Horizontal margin for better spacing
    marginTop: 10, // Top margin to space it from the top of the ScrollView
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40, // Fully rounded corners for the image
    marginRight: 20,
  },
  textContainer: {
    flexDirection: "column",
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white", // Theme color for the text
  },
  specialty: {
    fontSize: 16,
    color: "white",
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#CCC",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  inputLarge: {
    height: 80,
    borderColor: "#CCC",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    textAlignVertical: "top",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonIcon: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#3498DB",
  },
  radioText: {
    fontSize: 16,
    color: "#2C3E50",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#5B8DD3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BookingPage;
