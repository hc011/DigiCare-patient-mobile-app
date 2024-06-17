import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import fontSizes from "../../constants/fontSizes";
import CircularIconCard from "../../Components/IconContainer";

const DoctorDetails = (props) => {
  const selectedDoctor = useSelector(
    (state) => state.doctor.selectedDoctorSlice
  );
  const handleAppointmentBooking = () => {
    props.navigation.navigate("Book Appointment");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/doctorDP__icon.jpg")}
            style={styles.profilePic}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{selectedDoctor.name}</Text>
            <Text style={styles.speciality}>
              {selectedDoctor.specialization}
            </Text>
            <Text style={styles.rating}>
              🌟 {selectedDoctor.rating} | 200 Reviews{" "}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // marginTop: 2,
          }}
        >
          <CircularIconCard
            name="75,000+ patients"
            iconName="group"
            color="#5B8DD3"
            size={30}
            IconbackgroundColor="#EBF5FF"
          />
          <CircularIconCard
            name={selectedDoctor.experience}
            iconName="business-center"
            color="#5B8DD3"
            size={30}
            IconbackgroundColor="#EBF5FF"
          />
          <CircularIconCard
            name={selectedDoctor.rating}
            iconName="star"
            color="#5B8DD3"
            size={30}
            IconbackgroundColor="#EBF5FF"
          />
          <CircularIconCard
            name="4,501 reviews"
            iconName="rate-review"
            color="#5B8DD3"
            size={30}
            IconbackgroundColor="#EBF5FF"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionHeader}>Contact Information</Text>
          <Text style={styles.infoText}>
            Phone: (+91) {selectedDoctor.phone_number}
          </Text>
          <Text style={styles.infoText}>Email: {selectedDoctor.email}</Text>
          <Text style={styles.infoText}>
            Address: 123 Medicine Rd, Health City
          </Text>

          {/* <Text style={styles.sectionHeader}>Professional Details</Text>
                    <Text style={styles.infoText}>Qualifications: MD, PhD - Cardiology</Text>
                    <Text style={styles.infoText}>Years of Experience: 20 years</Text>
                    <Text style={styles.infoText}>Affiliations: American Cardiology Association</Text> */}

          <Text style={styles.sectionHeader}>Timings</Text>
          <Text style={styles.infoText}>
            Monday - Friday: 9:00 AM - 5:00 PM
          </Text>
          <Text style={styles.infoText}>Emergency: 24/7 on call</Text>

          <Text style={styles.sectionHeader}>Insurance</Text>
          <Text style={styles.infoText}>
            Accepted Plans: Most major insurance plans accepted
          </Text>

          {/* <Text style={styles.sectionHeader}>Languages Spoken</Text>
                    <Text style={styles.infoText}>English, Hindi</Text> */}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAppointmentBooking}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: -20,
    flex: 1,
    backgroundColor: "#ECF0F1",
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  headerContainer: {
    // backgroundColor: "#7FA4D9",
    flexDirection: "row",
    // justifyContent: "center",
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: "#fff",
  },
  name: {
    fontSize: fontSizes.h3,
    fontWeight: "500",
    color: "black",
    marginTop: 10,
  },
  speciality: {
    fontSize: fontSizes.h6,
    color: "gray",
    // marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  button: {
    position: "absolute",
    bottom: 50,
    left: 10,
    right: 10,
    backgroundColor: "#5B8DD3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: fontSizes.buttonLarge,
    fontWeight: "500",
  },
});

export default DoctorDetails;
