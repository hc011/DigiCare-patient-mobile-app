import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useSelector } from "react-redux";
import fontSizes from "../../constants/fontSizes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CircularIconCard from "../../Components/IconContainer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DoctorList from "../doctors/DoctorList";
import TreatmentsScreen from "./Treatments";
import AboutScreen from "./About";
import { useEffect } from "react";
import { setSelectedDoctorSlice } from "../../storage/selectedDoctorSlice";

const Tab = createMaterialTopTabNavigator();
const HospitalDetails = (props) => {
  const selectedHospital = useSelector(
    (state) => state.hospital.selectedHospital
  );
  const handlePress = () => {
    props.navigation.navigate("Doctor List");
  };

  useEffect(() => {
    setSelectedDoctorSlice({});
  });

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.S3W84fWYx6AH0WyjjIQjXgHaE8?rs=1&pid=ImgDetMain",
        }}
        style={styles.image}
      />
      <View
        style={{
          marginTop: -90,
          backgroundColor: "white",
          flex: 1,
          borderRadius: 25,
        }}
      >
        <View
          style={{
            width: "auto",
            padding: 5,
            bottom: 16,
            backgroundColor: "#5B8DD3",
            position: "relative",
            alignSelf: "center",
            borderRadius: 30,
          }}
        >
          <Text style={styles.ratingText}>
            <Text style={{ fontWeight: "600" }}>
              <Text>🌟</Text> {selectedHospital.rating}
            </Text>{" "}
            (2.3K+ reviews)
          </Text>
        </View>

        <View style={{ padding: 20, marginTop: -30 }}>
          <Text style={{ fontSize: fontSizes.h4, fontWeight: "400" }}>
            {selectedHospital.hospital_name}
          </Text>

          <Text style={styles.specialties}>
            {selectedHospital.specializations}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              // marginBottom: 5,
            }}
          >
            <MaterialIcons name="location-on" size={20} color="#5B8DD3" />
            <Text style={styles.address}>Clinic Address</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="schedule" size={20} color="#5B8DD3" />
            <Text style={styles.address}>Mon-Sat | 10 am - 9 pm </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // marginTop: 2,
            }}
          >
            <CircularIconCard
              name="Website"
              iconName="language"
              color="#5B8DD3"
              size={20}
              IconbackgroundColor="#EBF5FF"
            />
            <CircularIconCard
              name="Call"
              iconName="call"
              color="#5B8DD3"
              size={20}
              IconbackgroundColor="#EBF5FF"
            />
            <CircularIconCard
              name="Direction"
              iconName="explore"
              color="#5B8DD3"
              size={20}
              IconbackgroundColor="#EBF5FF"
            />
            <CircularIconCard
              name="Share"
              iconName="share"
              color="#5B8DD3"
              size={20}
              IconbackgroundColor="#EBF5FF"
            />
          </View>
        </View>
        <View style={{ flex: 1, marginTop: -30 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600",
              },

              // tabBarPressColor: "#",
              // tabBarIndicatorStyle: {
              //   backgroundColor: "#5B8DD3",
              // },
            }}
          >
            <Tab.Screen name="Doctors" component={DoctorList} />
            <Tab.Screen name="Treatments" component={TreatmentsScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
          </Tab.Navigator>
        </View>
      </View>

      {/* <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Image source={require('../../assets/doctorDP__icon.jpg')} style={styles.clinicImage} />
            <Text style={styles.clinicName}>{selectedHospital.hospital_name}</Text>
            <Text style={styles.shortInfo}>🌟 {selectedHospital.rating} / 5 (200 Reviews)</Text>
            <Text style={styles.shortInfo}>9am to 8pm</Text>
            <Text style={styles.shortInfo}>Rs 500</Text>
            
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={{color:'white', fontSize: 18,}}>See doctors...</Text>
            </TouchableOpacity>
            
            <View style={styles.tile}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.sectionContent}>Description here</Text>
            </View>
    
            <View style={styles.tile}>
              <Text style={styles.sectionTitle}>Services Offered</Text>
            </View>

          </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#fff",
    // paddingLeft: 20,
    // paddingRight:20
  },
  container: {
    flex: 1,
    marginTop: 30,
    // borderWidth: 1,
    // backgroundColor: "red",
    // padding: 10,
  },
  ratingText: {
    color: "white",
    fontSize: fontSizes.paragraph,
  },
  specialties: {
    fontSize: fontSizes.paragraph,
    color: "#777",
    marginBottom: 10,
  },
  address: {
    paddingLeft: 5,
    fontSize: fontSizes.paragraph,
    color: "#777",
  },
  image: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  clinicImage: {
    alignSelf: "center",
    width: 300,
    height: 300,
    borderRadius: 15, // Slightly increased for a softer look
    marginBottom: 20, // Increased spacing
  },
  clinicName: {
    fontSize: 28, // Slightly larger for emphasis
    fontWeight: "bold",
    color: "#333", // Darker shade for better readability
    textAlign: "center", // Center-align the clinic name
    marginBottom: 10, // Adjusted spacing
  },
  shortInfo: {
    fontSize: 18, // Uniform font size with timing
    color: "#666",
    textAlign: "center", // Center-align for consistency
    marginBottom: 5, // Increased spacing before the next section
  },
  section: {
    marginTop: 30, // Increased spacing to distinguish sections clearly
    paddingHorizontal: 10, // Added horizontal padding for better text alignment
  },
  sectionTitle: {
    fontSize: 20, // Slightly larger for emphasis
    fontWeight: "bold",
    color: "#0f5cc6", // Use primary color for titles to enhance visual hierarchy
    marginBottom: 10, // Increased spacing
  },
  sectionContent: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24, // Increased line height for better readability
    textAlign: "justify", // Justify align for cleaner text presentation
  },
  serviceItem: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5, // Added space between items for clarity
  },
  doctorItem: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5, // Added space between items for clarity
  },
  bookButton: {
    marginTop: 30, // Increased spacing from the last section
    backgroundColor: "#0f5cc6",
    paddingVertical: 15, // Increased padding for a larger, more clickable area
    paddingHorizontal: 20, // Increased padding for a wider button
    borderRadius: 10, // Softened the corners for a modern look
    alignItems: "center",
    alignSelf: "center", // Center the button horizontally
    width: "80%", // Make the button wider for easier access
  },
  bookButtonText: {
    color: "white",
    fontSize: 18, // Slightly larger text for better visibility
    fontWeight: "bold", // Bold text for emphasis
  },
  button: {
    backgroundColor: "#5B8DD3",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  tile: {
    backgroundColor: "#fff", // Light background for the tile
    borderRadius: 8, // Rounded corners for the tile
    padding: 15, // Inner padding within the tile
    marginVertical: 10, // Space between tiles
    marginHorizontal: 20, // Align tiles nicely with some horizontal space
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default HospitalDetails;
